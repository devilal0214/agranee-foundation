import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    const transporter = createTransporter();

    // Email to organization
    const mailOptions = {
      from: process.env.FROM_EMAIL || 'noreply@agraneefoundation.org',
      to: process.env.TO_EMAIL || 'info@agraneefoundation.org',
      replyTo: email,
      subject: `Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #DC2626 0%, #991b1b 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; border-bottom: 2px solid #DC2626; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; margin-top: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Name:</td>
                <td style="padding: 10px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 10px 0; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Subject:</td>
                <td style="padding: 10px 0; color: #1f2937;">${subject || 'General Inquiry'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #1f2937; border-bottom: 2px solid #DC2626; padding-bottom: 10px;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; background: #1f2937; color: #9ca3af; font-size: 12px;">
            <p>This email was sent from the Agranee Foundation website contact form</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationEmail = {
      from: process.env.FROM_EMAIL || 'noreply@agraneefoundation.org',
      to: email,
      subject: 'Thank you for contacting Agranee Foundation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #DC2626 0%, #991b1b 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Reaching Out</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb; border: 1px solid #e5e7eb;">
            <p style="color: #1f2937; font-size: 16px;">Dear ${name},</p>
            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for contacting Agranee Foundation. We have received your message and will respond within 24 hours.
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              Your inquiry is important to us, and we appreciate your interest in supporting children in Delhi NCR.
            </p>
            <div style="margin-top: 30px; padding: 20px; background: white; border-left: 4px solid #DC2626;">
              <h3 style="color: #1f2937; margin-top: 0;">Your Message:</h3>
              <p style="color: #6b7280; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; background: #1f2937; color: #9ca3af; font-size: 12px;">
            <p style="margin: 5px 0;">Agranee Foundation | Building Futures with Dignity</p>
            <p style="margin: 5px 0;">B4, Sushant Lok, Phase I Sector 27, Gurugram, Haryana 122009</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Email API server running on http://localhost:${PORT}`);
});
