# Nashik Website Development - Business Website

## Overview
A premium multi-page website for Nashik Website Development, a startup offering web development, digital menu solutions, CRM systems, and custom software services. The website showcases the company's services, team, portfolio, and provides a contact form for inquiries, along with a downloadable PDF service guide for client presentations.

## Project Information
- **Company**: Nashik Website Development
- **Founders**: Aniket Rane (Tech Lead), Rushi Pagar (Design Lead), Dev Pawar (Business Lead)
- **Services**: Website Development with Deployment, Digital Menu Solutions, CRM Systems, Custom Software
- **Location**: Nashik, Maharashtra, India
- **Tech Stack**: React, Node.js, Express, TypeScript, Tailwind CSS, Wouter (routing)

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Custom scroll animations using Intersection Observer
- **Theme**: Dark mode by default with light mode toggle
- **Forms**: React Hook Form with Zod validation

### Pages
1. **Home** (`/`) - Hero section, services overview, founders introduction, CTA sections
2. **Services** (`/services`) - Detailed service information, pricing, development process, tech stack
3. **About** (`/about`) - Company story, mission/vision, values, founders profiles, timeline
4. **Portfolio** (`/portfolio`) - Project showcase with results and technologies
5. **Contact** (`/contact`) - Contact form with validation, contact information, location map placeholder

### Backend
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) for contact inquiries
- **API Endpoints**:
  - `POST /api/contact` - Contact form submission with validation
  - `GET /api/download-brochure` - PDF service guide download
- **PDF Generation**: PDFKit for creating downloadable service brochures

## Design System

### Colors
- **Primary**: Blue (#3b82f6) - Trust & Technology
- **Accent**: Teal (#10b981) - Growth & Innovation
- **Background**: Dark mode primary, light mode support
- **Typography**: Inter (sans-serif), Space Grotesk (accent headings)

### Key Features
- Smooth scroll animations with lazy loading
- Responsive design (mobile-first approach)
- Dark/Light theme toggle
- Premium visual design with gradients and modern UI
- Accessible components with proper ARIA labels
- SEO-optimized with meta tags

## Key Components

### Navigation
- `navbar.tsx` - Sticky navigation with mobile menu, theme toggle, active page indicator
- `footer.tsx` - Multi-column footer with services, company info, contact details, newsletter signup

### Utilities
- `use-scroll-animation.ts` - Hook for intersection observer-based scroll animations
- `theme-provider.tsx` - Theme context provider for dark/light mode

### Forms
- Contact form with react-hook-form and Zod validation
- Proper error handling and success feedback
- All required fields validated before submission

## Data Models

### Contact Inquiry
```typescript
{
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  createdAt: Date;
}
```

## Development

### Running the Project
```bash
npm run dev
```
- Server runs on port 5000
- Frontend served via Vite
- Backend API on same port

### File Structure
```
client/
  src/
    pages/ - All page components
    components/ - Reusable components (navbar, footer, theme)
    hooks/ - Custom hooks (scroll animation)
server/
  routes.ts - API endpoints
  storage.ts - Data storage interface
shared/
  schema.ts - Shared types and validation schemas
```

## Recent Changes
- **UI/UX Enhancements (October 2025)**:
  - Added Viraj as UI/UX Designer to the founders team
  - Enhanced CSS with premium effects (glassmorphism, gradient borders, micro-interactions)
  - Improved card shadows and hover effects (card-shadow, hover-lift classes)
  - Added smooth animations (fade-in-up, slide-in-right, shimmer loading)
  - Implemented button scale effects and focus glow states
  - Enhanced hero section with animated gradient backgrounds
  - Added gradient text utilities for headings
  - Improved overall visual hierarchy and spacing
- Implemented multi-page website with smooth animations
- Added contact form with proper validation using react-hook-form
- Created PDF service guide generation using PDFKit
- Implemented dark/light theme toggle
- Added responsive design across all pages
- Fixed LSP errors for type safety

## Deployment

### Netlify Deployment

The application is now configured for Netlify deployment. See [`NETLIFY_DEPLOYMENT.md`](./NETLIFY_DEPLOYMENT.md) for detailed deployment instructions.

**Quick Start:**
1. Update the build script in `package.json` (see deployment guide)
2. Push to GitHub/GitLab
3. Connect repository to Netlify
4. Deploy!

**Key Files:**
- `netlify.toml` - Netlify configuration
- `netlify/functions/api.ts` - Serverless function wrapper
- `client/public/_redirects` - Routing configuration

## Future Enhancements
- Blog section for SEO and content marketing
- Client testimonials carousel
- Interactive pricing calculator
- Live chat support widget
- Analytics dashboard integration
- Map integration for office location
- Production database integration (Supabase/MongoDB Atlas)
