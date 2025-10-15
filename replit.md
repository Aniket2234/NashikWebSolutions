# Nashik Website Development

## Overview

Nashik Website Development is a modern web development agency offering premium digital solutions including custom websites, digital menu systems, CRM platforms, and bespoke software. The application is built as a marketing website showcasing the company's services, portfolio, and team, with integrated contact form functionality and PDF brochure generation.

The platform follows a modern tech startup aesthetic inspired by companies like Vercel, Linear, and Stripe, featuring a dark-mode-first design with responsive layouts and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (no page refreshes)
- TanStack Query (React Query) for server state management and API communication

**UI Component Strategy**
- shadcn/ui component library (Radix UI primitives) for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design system
- Dark mode support via ThemeProvider context with localStorage persistence
- Custom animation hooks using Intersection Observer API for scroll-triggered animations

**Design System**
- Color palette based on HSL values with CSS variables for theme switching
- Typography using Inter (body/headings) and Space Grotesk (accents) fonts
- Consistent spacing scale using Tailwind's 4px base unit system
- Component variants using class-variance-authority for systematic styling

**Page Structure**
- Home: Hero section, services grid, value propositions, founders showcase, CTA
- Services: Detailed service cards with features, pricing, technology stack
- About: Team profiles, company values, mission/vision
- Portfolio: Project showcases with results and technologies
- Contact: Contact form with validation and inquiry submission

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes and middleware
- Custom Vite middleware integration for SSR-ready development environment
- In-development mode: Vite dev server with HMR
- In production: Static file serving from compiled dist directory

**API Design**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Submit contact inquiries with validation
- GET `/api/download-brochure` - Generate and stream PDF brochures
- Request/response logging middleware for debugging
- Centralized error handling middleware

**Data Layer (Current)**
- In-memory storage using MemStorage class with Map-based data structures
- UUID-based record identification using crypto.randomUUID()
- Type-safe schemas using Drizzle ORM schema definitions with Zod validation
- Ready for PostgreSQL migration (Drizzle configuration present)

**PDF Generation**
- PDFKit library for server-side PDF document creation
- Dynamic brochure generation with company services and branding
- Streaming response with proper Content-Disposition headers

### Data Storage Solutions

**Schema Design**
- Contact inquiries table with fields: id, name, email, phone, service, message, createdAt
- Drizzle ORM schema definitions in `shared/schema.ts` for type safety
- Zod schemas for runtime validation derived from Drizzle schemas
- PostgreSQL dialect configuration (ready for database provisioning)

**Current State**
- In-memory storage implementation for development/demo purposes
- No persistent database currently connected
- Migration-ready with Drizzle Kit configuration pointing to PostgreSQL

**Future Database Strategy**
- Neon serverless PostgreSQL configured as the target database
- Connection via `@neondatabase/serverless` driver
- Migration management through Drizzle Kit (`npm run db:push`)
- Environment-based DATABASE_URL configuration

### External Dependencies

**UI & Styling**
- Radix UI component primitives (@radix-ui/react-*) - Accessible UI components
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Component variant management
- lucide-react - Icon library

**Form Management**
- react-hook-form - Form state management
- @hookform/resolvers - Validation resolver integration
- zod - Schema validation library
- drizzle-zod - Drizzle to Zod schema conversion

**State & Data**
- @tanstack/react-query - Server state management and caching
- wouter - Lightweight routing library

**Backend Services**
- PDFKit - PDF document generation
- Neon Serverless PostgreSQL (configured, not yet provisioned)
- Drizzle ORM - Type-safe database toolkit

**Development Tools**
- Vite plugins for Replit integration (@replit/vite-plugin-*)
- TypeScript for type safety across the stack
- ESBuild for production server bundling

**Font Resources**
- Google Fonts (Inter, Space Grotesk) loaded via CDN