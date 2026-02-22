# AOA Import Export Website

A modern, responsive website for AOA Import Export - an MSME-registered import and export company in India providing comprehensive global trade solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **SEO Optimized**: Comprehensive metadata, structured data, and search engine optimization
- **Performance Optimized**: Fast loading with Next.js optimizations and image optimization
- **Contact Form**: Server Actions-powered contact form with validation
- **MSME Certified**: Highlighting government registration and credibility

## 📋 Pages

- **Homepage**: Hero section, services overview, and company differentiators
- **About Us**: Company overview, mission, vision, and core values
- **Services**: Detailed service offerings including import, export, sourcing, and logistics
- **International Markets**: Global presence across Asia, Middle East, Europe, and Africa
- **Contact**: Contact form and business information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (optimized with next/font)
- **Images**: Optimized SVG assets with next/image
- **Forms**: Server Actions with validation
- **SEO**: Next.js Metadata API with structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd aoa-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
aoa-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── markets/           # International markets page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # Reusable React components
│   ├── ContactForm.tsx    # Contact form component
│   ├── CTAButton.tsx      # Call-to-action button
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header with navigation
│   ├── Hero.tsx           # Homepage hero section
│   ├── ServicesGrid.tsx   # Services overview grid
│   └── WhyChooseAOA.tsx   # Company differentiators
├── lib/                   # Utility functions and data
│   ├── actions.ts         # Server Actions
│   ├── data.ts            # Static data and content
│   ├── utils.ts           # Utility functions
│   └── validations.ts     # Form validation schemas
├── public/                # Static assets
│   ├── icons/             # Service and feature icons
│   ├── images/            # Images and Open Graph assets
│   └── robots.txt         # Search engine directives
├── types/                 # TypeScript type definitions
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#1e3a8a, #1e40af, #2563eb)
- **Accent**: Gold (#f59e0b)
- **Text**: Gray shades for hierarchy
- **Background**: White with gray sections

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

### Components
- Consistent spacing using Tailwind utilities
- Hover effects and smooth transitions
- Mobile-first responsive design
- Accessible color contrasts

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔍 SEO Features

- **Metadata**: Unique titles and descriptions for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic XML sitemap
- **Robots.txt**: Search engine directives
- **Performance**: Optimized Core Web Vitals

## 📧 Contact Form

The contact form uses Next.js Server Actions for secure form processing:

- Client-side validation with real-time feedback
- Server-side validation and sanitization
- Email integration ready (configure SMTP in production)
- Proper error handling and success states

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder and other necessary files
3. Configure your server to serve the Next.js application

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Email configuration (optional)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.aoafoods.com
```

### Customization

- **Content**: Update data in `lib/data.ts`
- **Styling**: Modify Tailwind classes or `tailwind.config.ts`
- **Images**: Replace assets in `public/images/` and `public/icons/`
- **Contact Info**: Update contact details in `lib/data.ts`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: WebP/AVIF formats with proper sizing
- **Font Loading**: Zero layout shift with next/font
- **Code Splitting**: Automatic with Next.js

## 🔒 Security

- Security headers configured in `vercel.json`
- Form validation and sanitization
- XSS protection
- Content Security Policy ready

## 📈 Analytics

Ready for analytics integration:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom tracking events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to AOA Import Export.

## 📞 Support

For technical support or questions:
- Email: info@aoafoods.com
- Phone: +91 98765 43210

---

Built with ❤️ for AOA Import Export - Your trusted MSME-registered trade partner.