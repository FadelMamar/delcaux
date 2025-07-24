# Replit MD

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that serves as a business website for Delcaux, a West African technology company specializing in automation and AI solutions. The application features a modern, responsive design with a contact form system and company information display.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**Added Case Studies Section & Navigation (January 2025)**
- Created comprehensive Case Studies section with dedicated page at /case-studies route
- Added Case Studies navigation link to both desktop and mobile menus with multilingual support
- Implemented 5 real case studies spanning June 2024 to February 2025:
  * Association Management Application (June 2025) - Mobile app for 200+ member organization
  * AI Pneumonia Classification System (October 2024) - Healthcare startup AI diagnostic tool
  * Data Analysis Training for Public Servants (November 2024) - 15-hour government training program
  * Intelligent Legal Assistant (November-December 2024) - AI chatbot for legal document interaction
  * AI Training for IT Professionals (February 2025) - 16-hour intensive AI training curriculum
- Enhanced website to showcase established expertise rather than seeking first clients
- Added complete French translations for all case study content
- Updated mobile menu to use LanguageContext translation system consistently
- Fixed cross-page navigation performance using client-side routing instead of full page reloads
- Added proper navigation header and footer to Case Studies page with full multilingual support
- Implemented hash-based section navigation that works seamlessly between pages

**Completed AboutSection Localization & Font Migration (January 2025)**
- Updated AboutSection component to use LanguageContext variables instead of hardcoded text
- Implemented proper translation support for all About section content (title, description, mission, vision, values)
- Completed migration from Lato to Work Sans font across entire website including ServicesSection
- Applied Work Sans font (weight: 400) for all body text and content consistently
- Implemented Montserrat font (weight: 600-700) for all headings across the website
- Updated Google Fonts import to include Montserrat and Work Sans fonts
- Configured Tailwind CSS with custom font families (font-montserrat, font-worksans)
- Set Work Sans as the default sans-serif font for consistent body text
- Enhanced typography hierarchy and readability throughout all components

**Updated Brand Logo (January 2025)**
- Integrated latest Delcaux Consulting logo across all components (Navigation, Footer, Mobile Menu)
- Updated logo references to logo_delcaux_consulting_1753365185310.jpg with proper @assets import method
- Fixed logo display issues by using correct asset import syntax instead of direct paths
- Maintained consistent logo sizing and positioning throughout the website
- Enhanced brand identity with the refined geometric logo design

**Content Optimization for New Business (January 2025)**
- Removed Client Success Stories (testimonials) section as requested for new business seeking first clients
- Removed Medical AI featured section and references to focus on core automation and AI services
- Updated AI Solutions service description to emphasize predictive analytics and decision support systems
- Streamlined website content to better represent the business's current service focus

**Enhanced UI with shadcn/ui Components (January 2025)**
- Upgraded Services section to use authentic shadcn/ui Card components (Card, CardHeader, CardTitle, CardContent)
- Added Badge components to service cards for better categorization (Core Service, Enterprise, Advanced AI, Training)
- Enhanced Contact form with proper shadcn/ui Card structure while maintaining existing Form functionality
- Improved component consistency and maintainability following shadcn/ui design patterns
- Maintained all existing functionality while upgrading to more professional UI components

**Logo Integration & Color Refinements (January 2025)**
- Integrated official Delcaux Consulting logo across all components (Navigation, Footer, Mobile Menu)
- Replaced previous SVG logo with authentic brand logo for consistent identity
- Removed orange/terracotta color from "AI" text in hero section for cleaner design
- Updated all logo references to use the real brand asset

**Brand Color Palette Update (January 2025)**
- Updated entire website to use the new Delcaux Consulting brand colors
- Primary Color: Dark Navy Blue (#0B1F3A) - used for headers, navigation, buttons, and key highlights
- Secondary Color: Graph Grey (#B0B0B0) - used for icons and accents
- Accent Color: Blue-Grey (#7A8CA3) - used for hover effects and secondary text
- Optional Accents: Warm Gold (#D4AF37) and Terracotta (#E2725B) - used for CTA highlights and cultural elements
- Background: Clean White (#FFFFFF) for optimal readability
- Applied consistent color scheme across all components: Navigation, Hero, Services, About, Contact, Footer
- Maintained proper contrast ratios for accessibility
- Enhanced professional, tech-focused West African aesthetic

## System Architecture

The application follows a monorepo structure with a clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components organized by feature
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color variables for brand consistency
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query for API calls and caching

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for contact form submission
- **Storage**: Currently using in-memory storage (MemStorage class) with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot reload with Vite integration

### Database Schema
The application defines two main entities:
- **Users**: Basic user management (id, username, password)
- **Contacts**: Contact form submissions (id, firstName, lastName, email, company, service, message, createdAt)

Currently using Drizzle ORM with PostgreSQL configuration, but the actual storage implementation uses in-memory storage for development.

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - POST request sent to `/api/contact` endpoint
   - Server validates and stores contact information
   - Success/error feedback displayed to user

2. **Contact Retrieval**:
   - GET request to `/api/contacts` endpoint
   - Returns all stored contact submissions
   - Used for admin purposes

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with hooks and modern patterns
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Forms**: React Hook Form with Hookform resolvers
- **HTTP Client**: Fetch API with TanStack Query wrapper
- **Icons**: Lucide React icons and React Icons for brand icons
- **Animations**: CSS-based animations with Tailwind

### Backend Dependencies
- **Server**: Express.js with standard middleware
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Session**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with nodemon-like behavior
- **Database**: PostgreSQL connection via environment variables
- **Build Process**: Separate build steps for client and server

### Production
- **Frontend**: Static build output served by Express
- **Backend**: Compiled JavaScript bundle
- **Database**: PostgreSQL with connection pooling
- **Environment**: NODE_ENV-based configuration

### Build Configuration
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server to `dist/index.js`
- **Static Assets**: Served from build output directory

The application is designed to be easily deployable to platforms like Replit, with development-specific features like the Replit banner and cartographer plugin for enhanced development experience.