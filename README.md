<div align="center">
  <h1>Resume AI</h1>
  <p>AI-powered resume builder that creates professional, ATS-friendly resumes from job descriptions using advanced AI technology</p>
<a href="https://dub.sh/resume-ai">View Demo</a>
</div>

## 

  https://github.com/user-attachments/assets/7c9440fd-2083-4916-8ccb-f002c47d0234

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with React 19
- **Authentication:** [Clerk](https://clerk.com/)
- **PDF Generation:** [@react-pdf/renderer](https://react-pdf.org/)
- **AI Integration:** [Google AI (Gemini)](https://ai.google.dev/)
- **Database:**
  - [Drizzle ORM](https://orm.drizzle.team/)
  - [Neon Database](https://neon.tech/)
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com)
  - [Shadcn UI](https://ui.shadcn.com)
- **Forms & Validation:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev)

## ✨ Key Features

- 🤖 AI-powered resume content generation
- 📝 Multiple professional resume templates
- 🎨 Real-time PDF preview
- 📱 Responsive split-pane editor
- 👤 Profile-based resume management
- 🔄 Multi-step resume creation flow
- 📋 Comprehensive resume sections:
  - Personal Details
  - Work Experience
  - Education
  - Skills
  - Tools
  - Languages
- 💾 Auto-save functionality
- 📤 Export to PDF
- 🌓 Dark/Light mode
- 🔧 **Easy Setup** - No environment configuration required!

## 🚀 Quick Start (No Setup Required!)

This project includes fallback environment variables, so you can run it immediately without any configuration:

```bash
# Clone the repository
git clone https://github.com/your-username/resume-ai.git
cd resume-ai

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

That's it! The app will work out of the box with demo credentials.

## 🔧 Environment Variables (Optional)

The app works without any environment setup, but you can customize it with your own credentials:

### Required for Production
- `DATABASE_URL` - PostgreSQL database connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk authentication public key
- `CLERK_SECRET_KEY` - Clerk authentication secret key
- `GEMINI_API_KEY` - Google AI API key for resume generation
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name for image uploads
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

### Optional
- `NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL` - Custom sign-in redirect (default: `/welcome`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL` - Custom sign-up redirect (default: `/welcome`)

### How Fallbacks Work

If you don't provide environment variables, the app automatically uses demo credentials:
- ✅ Demo database with sample data
- ✅ Demo authentication (Clerk test keys)
- ✅ Demo AI integration (Gemini API)
- ✅ Demo file uploads (Cloudinary)

This makes it perfect for:
- 🎯 Quick demos and testing
- 👨‍💻 Development and learning
- 🔄 Contributing to the project

Cheers! 🥂
# Resume-AI
