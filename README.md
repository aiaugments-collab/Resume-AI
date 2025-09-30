# Resume AI - AI-Powered Resume Builder

An open-source, intelligent resume builder that creates professional, ATS-friendly resumes tailored to specific job descriptions using advanced AI technology.

![Resume AI Banner](https://via.placeholder.com/800x400/2563eb/ffffff?text=Resume+AI+-+Smart+Resume+Builder)

## 🚀 Features

- **AI-Powered Resume Generation**: Automatically tailors resumes to job descriptions using Google Gemini AI
- **Multiple Professional Templates**: Choose from 4 beautifully designed resume templates
- **Real-time PDF Preview**: Live preview with instant updates as you edit
- **Profile Management**: Create and manage multiple professional profiles
- **ATS-Friendly**: Optimized for Applicant Tracking Systems
- **Career Interview Assistant**: AI-powered career guidance and interview preparation
- **Secure Authentication**: Powered by Clerk for robust user management
- **Cloud Storage**: Cloudinary integration for file uploads and image management

## 🏗️ Architecture Overview

### Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes, Hono.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **AI**: Google Gemini AI
- **PDF Generation**: React PDF Renderer
- **File Storage**: Cloudinary
- **Styling**: TailwindCSS, Shadcn/ui
- **State Management**: Zustand

### Application Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Main application dashboard
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # Reusable UI components
├── features/              # Feature-specific components
│   ├── profile/           # Profile management
│   ├── resume/            # Resume creation & editing
│   └── kanban/            # Task management
├── server/                # Backend logic
│   ├── db/                # Database schema & queries
│   ├── routers/           # API route handlers
│   └── services/          # Business logic & AI services
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 📊 Data Flow

### 1. User Authentication Flow
```
User → Clerk Auth → Database Sync → Dashboard Access
```

### 2. Resume Creation Flow
```
Profile Selection → Job Details Input → AI Processing → Resume Generation → PDF Export
```

### 3. AI Resume Generation Process
```
User Profile + Job Description → Google Gemini AI → Structured Resume Data → Template Rendering → PDF Output
```

### 4. Database Relationships
```
accounts (Clerk Users)
├── profiles (User Profiles)
│   ├── jobs (Work Experience)
│   └── educations (Education History)
└── resumes (Generated Resumes)
```

## 🔧 Environment Variables

### Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Clerk Authentication (Get from https://clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key"
CLERK_SECRET_KEY="sk_test_your_secret_key"

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL="/welcome"
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/welcome"

# Google Gemini AI (Get from https://makersuite.google.com/app/apikey)
GEMINI_API_KEY="your_gemini_api_key"

# Cloudinary Configuration (Get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"

# GitHub OAuth (Optional)
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

### Current Development Values
**⚠️ Note**: The following are development/demo values. Replace with your own for production:

```bash
DATABASE_URL="postgresql://neondb_owner:npg_Vczd9Yrl3GyI@ep-lucky-forest-adrah2by-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_dXNhYmxlLWdvbGRmaXNoLTg5LmNsZXJrLmFjY291bnRzLmRldiQ"
CLERK_SECRET_KEY="sk_test_UAKmFTuR9jAF5Y93T9nY6mXsuVIwrIClfdxnMug1Mf"
GEMINI_API_KEY="AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY"
CLOUDINARY_CLOUD_NAME="dogcsr680"
CLOUDINARY_API_KEY="154577213951948"
CLOUDINARY_API_SECRET="u5q3f1G1yVjeAvbrZHjrxcNBwDE"
```

## 🚀 Production Deployment

### Prerequisites

1. **Database**: PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. **Authentication**: Clerk account and application setup
3. **AI Service**: Google AI Studio API key
4. **File Storage**: Cloudinary account
5. **Hosting**: Vercel, Netlify, or any Node.js hosting platform

### Deployment Steps

#### 1. Database Setup

**Option A: Neon (Recommended)**
```bash
# 1. Create account at https://neon.tech
# 2. Create new project
# 3. Copy connection string
# 4. Set DATABASE_URL in your environment
```

**Option B: Supabase**
```bash
# 1. Create account at https://supabase.com
# 2. Create new project
# 3. Go to Settings > Database
# 4. Copy connection string
```

#### 2. Environment Setup

Create production environment variables in your hosting platform:

**Vercel Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
vercel env add GEMINI_API_KEY
vercel env add CLOUDINARY_CLOUD_NAME
vercel env add CLOUDINARY_API_KEY
vercel env add CLOUDINARY_API_SECRET
vercel env add CLOUDINARY_URL
```

#### 3. Database Migration

```bash
# Generate database schema
npm run db:generate

# Push schema to database
npm run db:push

# Or run migrations
npm run db:migrate
```

#### 4. Build and Deploy

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

### Platform-Specific Deployment

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

#### Docker Deployment
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variable Configuration by Service

#### Clerk Setup
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create new application
3. Copy API keys from "API Keys" section
4. Configure redirect URLs in "Paths" section

#### Google AI Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Enable Gemini API access

#### Cloudinary Setup
1. Create account at [Cloudinary](https://cloudinary.com)
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- PostgreSQL database
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/resume-ai.git
cd resume-ai

# Install dependencies
npm install
# or
pnpm install

# Set up environment variables
cp env.example.txt .env
# Edit .env with your values

# Set up database
npm run db:generate
npm run db:push

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues

# Database
npm run db:generate     # Generate database migrations
npm run db:migrate      # Run database migrations
npm run db:push         # Push schema to database
npm run db:studio       # Open Drizzle Studio
```

## 🏛️ Application Architecture

### Core Components

#### 1. Authentication System
- **Clerk Integration**: Handles user registration, login, and session management
- **Database Sync**: Automatically syncs Clerk users with internal database
- **Route Protection**: Middleware-based route protection for authenticated areas

#### 2. Profile Management
- **Multi-Profile Support**: Users can create multiple professional profiles
- **Structured Data**: Profiles include personal details, work experience, education, skills
- **Reusable Profiles**: Profiles can be used across multiple resume generations

#### 3. AI Resume Generation
- **Job Analysis**: AI analyzes job descriptions to extract key requirements
- **Profile Matching**: Matches user profile data with job requirements
- **Content Optimization**: Generates ATS-friendly content with relevant keywords
- **Structured Output**: Returns formatted resume data ready for template rendering

#### 4. Template System
- **Modular Templates**: Four professional templates with different layouts
- **React PDF**: Server-side PDF generation using React components
- **Customizable Styling**: TailwindCSS-based styling for easy customization
- **Real-time Preview**: Live preview updates as users edit content

#### 5. Data Management
- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Relational database for structured data storage
- **Real-time Sync**: Optimistic updates with server synchronization

### API Architecture

#### Router Structure
```typescript
/api/
├── auth/           # Authentication endpoints
├── profiles/       # Profile CRUD operations
├── resumes/        # Resume generation and management
├── career-interview/ # AI career guidance
└── uploads/        # File upload handling
```

#### Data Flow Patterns
1. **Client → API Router → Service Layer → Database**
2. **AI Integration**: Service Layer → Google Gemini → Structured Response
3. **File Handling**: Client → Cloudinary → Database URL Storage

## 🔒 Security Considerations

### Authentication
- Clerk handles secure authentication with industry standards
- JWT tokens for API authentication
- Route-level protection with middleware

### Data Protection
- Environment variables for sensitive data
- Database connection encryption
- API key rotation support

### File Security
- Cloudinary secure upload with signed URLs
- File type validation
- Size limits on uploads

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## 📈 Performance Optimization

### Frontend Optimizations
- **React Server Components**: Reduced client-side JavaScript
- **Code Splitting**: Dynamic imports for large components
- **Image Optimization**: Next.js automatic image optimization
- **Caching**: Strategic caching of API responses

### Backend Optimizations
- **Database Indexing**: Optimized queries with proper indexes
- **Connection Pooling**: Efficient database connection management
- **API Response Caching**: Cached responses for frequently accessed data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Add JSDoc comments for complex functions
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.com/) - Authentication platform
- [Google AI](https://ai.google.dev/) - AI services
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM
- [React PDF](https://react-pdf.org/) - PDF generation
- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI components

## 📞 Support

For support, email support@resume-ai.com or join our [Discord community](https://discord.gg/resume-ai).

## 🗺️ Roadmap

- [ ] Additional resume templates
- [ ] LinkedIn integration
- [ ] Resume analytics and tracking
- [ ] Team collaboration features
- [ ] Mobile application
- [ ] Advanced AI customization options
- [ ] Integration with job boards
- [ ] Resume version control

---

**Built with ❤️ by [Kiran](https://github.com/Kiranism)**