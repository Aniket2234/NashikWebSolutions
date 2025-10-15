# Design Guidelines: Nashik Website Development

## Design Approach
**Reference-Based with Tech Startup Aesthetic** - Drawing inspiration from modern web development agencies like Vercel, Linear, and Stripe. This approach balances professional credibility with startup energy, using clean minimalism with strategic bold elements.

## Color Palette

### Dark Mode (Primary)
- **Background**: 222 15% 8% (deep charcoal)
- **Surface**: 222 15% 12% (elevated panels)
- **Primary Brand**: 220 90% 56% (vibrant blue - trust & technology)
- **Accent**: 160 70% 45% (teal - growth & innovation)
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 0 0% 70%

### Light Mode
- **Background**: 0 0% 98%
- **Surface**: 0 0% 100%
- **Primary Brand**: 220 90% 48%
- **Accent**: 160 70% 42%
- **Text Primary**: 222 15% 12%
- **Text Secondary**: 0 0% 40%

## Typography
- **Headings**: Inter (700-800 weight) - modern, tech-forward
- **Body**: Inter (400-500 weight) - clean readability
- **Accents**: Space Grotesk for special callouts - geometric, distinctive
- **Scale**: text-5xl/6xl/7xl for heroes, text-xl/2xl for section headers, text-base/lg for body

## Layout System
**Tailwind Spacing**: Consistent use of 4, 8, 12, 16, 20, 24, 32 units
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-4 for cards
- Container: max-w-7xl with px-6 (mobile) to px-8 (desktop)

## Page Structure

### Home Page
1. **Hero Section** (80vh): Full-width background with abstract tech pattern/gradient, centered content with company tagline, primary CTA, subtle particle animation background
2. **Services Grid** (4 cards): Website Development, Digital Menu Solutions, CRM Systems, Custom Software - each with icon, title, description, hover lift effect
3. **Why Choose Us**: 3-column grid highlighting "Startup Agility", "End-to-End Deployment", "Nashik-Based Support"
4. **Co-Founders Section**: 3-column cards with founder images, names, roles, brief bios
5. **CTA Section**: Bold centered "Ready to Transform Your Business" with contact form preview
6. **Footer**: Multi-column (Services, Company, Connect) with newsletter signup

### Services Page
- Hero with services overview
- Detailed service cards in 2-column layout with pricing indicators
- Process timeline (Discovery → Design → Development → Deployment)
- Technology stack showcase (logos grid)
- Download CTA for service documentation

### About Page
- Startup story section with timeline
- Mission/Vision cards
- Detailed founder profiles with expanded bios
- Office location/Nashik presence highlight

### Portfolio Page
- Masonry grid of project thumbnails
- Project cards with hover overlay showing tech stack
- Case study sections with before/after comparisons

### Contact Page
- Split layout: form (left) + info/map (right)
- Service inquiry checkboxes
- Quick response promise ("24-hour response guarantee")

## Component Library

### Buttons
- Primary: Solid blue with subtle glow effect on hover
- Secondary: Outline with backdrop blur on images
- Ghost: Transparent with underline animation

### Cards
- Subtle border (1px) with hover scale (1.02)
- Backdrop blur for cards over images
- Consistent border-radius: rounded-xl

### Navigation
- Sticky header with blur backdrop
- Mobile: Slide-in menu from right
- Active page indicator with underline animation

### Forms
- Floating labels with focus animation
- Input background: slightly lighter surface color
- Success/error states with color + icon feedback

## Animation Strategy
**Lazy Loading Animations** (using Intersection Observer):
- Fade-in-up for section entries (duration: 0.6s, stagger: 0.1s)
- Scale-in for cards (duration: 0.5s)
- Slide-in from sides for alternating content sections
- Minimal hero animation: subtle floating or parallax only
- Smooth scroll between sections
- Micro-interactions: button hover, card lift, link underlines

**Animation Philosophy**: Purposeful and performant - enhance without distracting

## Images

### Required Images
1. **Hero Background**: Abstract tech pattern, circuit board aesthetic, or geometric gradient (full-width, 80vh)
2. **Founder Photos**: Professional headshots for Aniket Rane, Rushi Pagar, Dev Pawar (square crop, 400x400px)
3. **Service Icons**: Custom illustrated icons for each service category
4. **Portfolio Thumbnails**: 6-8 project mockups/screenshots
5. **Office/Team Photo**: Casual workspace image for About page authenticity

### Image Treatment
- Hero: Overlay with gradient (dark bottom fade)
- Founders: Subtle grayscale with color on hover
- Portfolio: Hover zoom with blue overlay
- Rounded corners throughout (rounded-lg to rounded-2xl)

## Client Documentation Design
**PDF Structure**: Multi-page professional deck
- Cover: Nashik Website Development branding
- Services overview with pricing tiers
- Development process flowchart
- Technology stack & capabilities
- Deliverables checklist
- Timeline estimates
- Contact & next steps

**Visual Style**: Match website colors, clean layout, professional typography, branded footer on each page

## Accessibility
- WCAG AA contrast ratios
- Keyboard navigation for all interactive elements
- Focus indicators matching brand blue
- Alt text for all images
- Semantic HTML structure

**Startup Positioning**: Emphasize agility, modern tech stack, personalized service, and local Nashik advantage throughout all content and design choices.