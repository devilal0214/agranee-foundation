# Agranee Foundation - Email API Setup

## Quick Start

### 1. Install Server Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and update with your credentials:
```bash
cp .env.example .env
```

Edit `.env` and replace:
- `SMTP_USER`: Your email address
- `SMTP_PASS`: Your app-specific password
- `TO_EMAIL`: Where form submissions should be sent

### 3. Gmail Setup (if using Gmail)
1. Enable 2-Factor Authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Create a new app password
4. Use that password in the `.env` file

### 4. Start the Server
```bash
# From the server directory
npm start

# Or with auto-reload during development
npm run dev
```

The API will run on `http://localhost:3001`

### 5. Start the Frontend
In a separate terminal:
```bash
# From the root directory
npm run dev
```

## How It Works

1. **Contact Form Submission**: User fills out the form on `/contact`
2. **API Request**: Form data is sent to `http://localhost:3001/api/contact`
3. **Email Sending**: Server sends two emails:
   - One to your organization (`TO_EMAIL`)
   - One confirmation to the user
4. **Response**: User sees success/error message

## API Endpoints

### POST `/api/contact`
Send contact form submission

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "General Support Query",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### GET `/api/health`
Check if server is running

## Production Deployment

For production, consider:
1. Using a proper email service (SendGrid, AWS SES, etc.)
2. Deploying the API to a cloud service (Vercel, Railway, etc.)
3. Updating the API URL in Contact.tsx from localhost to your production URL
4. Setting up proper CORS policies
5. Adding rate limiting to prevent spam

## Troubleshooting

**Email not sending?**
- Check SMTP credentials in `.env`
- Verify Gmail app password (not regular password)
- Check server console for error messages

**CORS errors?**
- Make sure both frontend and backend are running
- Check that the API URL in Contact.tsx matches your server URL

**Form not submitting?**
- Open browser console for error messages
- Verify the API server is running on port 3001
