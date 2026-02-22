# AOA Website Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel
- Node.js 18+ locally for testing

### Deployment Steps

1. **Connect Repository to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js framework

2. **Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add the following variables:
     ```
     NEXT_PUBLIC_GA_ID=your_google_analytics_id
     NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
     ```

3. **Domain Configuration**
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., www.aoafoods.com)
   - Configure DNS records as instructed by Vercel

4. **Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Static generation for all pages
- ✅ ISR (Incremental Static Regeneration) enabled
- ✅ Proper caching headers for static assets
- ✅ SEO optimization with metadata
- ✅ Structured data for better search visibility

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Verify SEO metadata
- [ ] Test Google Analytics integration
- [ ] Check all internal links work
- [ ] Verify sitemap.xml accessibility
- [ ] Test robots.txt

### Monitoring

- Use Vercel Analytics for performance monitoring
- Set up Google Analytics for user behavior tracking
- Monitor Core Web Vitals in Vercel dashboard

### Troubleshooting

**Build Failures:**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors

**Performance Issues:**
- Review bundle analyzer output: `npm run analyze`
- Optimize images if needed
- Check for unused dependencies

**SEO Issues:**
- Verify metadata in each page
- Check structured data with Google's Rich Results Test
- Ensure sitemap.xml is accessible