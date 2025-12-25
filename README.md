# Agranee Foundation

A modern, responsive website for Agranee Foundation - dedicated to building a future where every child in Delhi NCR has a safe place to grow.

## Features

- 🏠 Responsive design with modern UI/UX
- 📱 Mobile-first approach
- 🎨 Smooth animations using Framer Motion and GSAP
- 📧 Contact form with email integration
- 💳 Multiple donation methods (Online, Bank Transfer, Cheque, UPI)
- 🗺️ Google Maps integration
- 📊 Impact metrics and success stories
- 🔒 80G tax exemption compliance

## Tech Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Backend:** Express.js with Nodemailer

## Run Locally

**Prerequisites:** Node.js 16+

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update `VITE_API_URL` with your API endpoint

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Email API Setup

1. Navigate to the server directory:
   ```bash
   cd server
   npm install
   ```

2. Configure SMTP settings in `server/.env`

3. Start the API server:
   ```bash
   npm start
   ```

See [server/README.md](server/README.md) for detailed setup instructions.

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

© 2025 Agranee Foundation. All rights reserved.
