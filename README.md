# Vignesh M - Professional Portfolio Website

A high-performance, SEO-optimized portfolio website built with Next.js, designed to achieve 100% performance scores on Google PageSpeed Insights.

## 🚀 Features

- ✅ **100% Performance Optimized** - Fast loading, minimal JavaScript
- ✅ **SEO Optimized** - Complete meta tags, structured data, sitemap
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Accessibility** - WCAG AA compliant
- ✅ **Professional Design** - Clean, modern interface
- ✅ **PWA Ready** - Progressive Web App support
- ✅ **Zero Dependencies** - Only essential packages

## 📋 Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18 with Lucide Icons
- **Styling**: CSS-in-JS with global CSS
- **Performance**: Optimized images, fonts, and code splitting
- **SEO**: Complete meta tags and structured data

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm/yarn

### Setup

1. **Install dependencies**
```bash
npm install
# or
yarn install
```

2. **Run development server**
```bash
npm run dev
# or
yarn dev
```

3. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

## 📁 Project Structure

```
vignesh-portfolio/
├── components/
│   └── Portfolio.jsx          # Main portfolio component
├── pages/
│   ├── _app.jsx              # App wrapper
│   ├── _document.jsx         # HTML document structure
│   └── index.jsx             # Home page with SEO
├── public/
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml           # Site structure
│   └── site.webmanifest      # PWA manifest
├── styles/
│   └── globals.css           # Global styles
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Customization

### Update Personal Information

Edit `components/Portfolio.jsx`:
- Update contact details
- Modify experience, skills, projects
- Change color scheme (search for color codes)

### Update SEO

Edit `pages/index.jsx`:
- Change site URL
- Update meta descriptions
- Modify structured data

### Add Images

1. Place images in `public/` folder
2. Update image paths in components
3. Create Open Graph image (1200x630px) as `public/og-image.jpg`

## 🔍 SEO Checklist

- [x] Title tags (50-60 characters)
- [x] Meta descriptions (150-160 characters)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (Schema.org)
- [x] Canonical URLs
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Mobile-friendly
- [x] Fast loading (<3s)
- [x] HTTPS ready

## 📊 Performance Targets

### Google PageSpeed Insights
- Performance: 95-100/100
- Accessibility: 95-100/100
- Best Practices: 95-100/100
- SEO: 100/100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🔧 Configuration Files

### next.config.js
- Image optimization settings
- Security headers
- Compression enabled
- Production optimizations

### package.json
- Minimal dependencies for best performance
- Build and development scripts
- Metadata for SEO

## 📱 PWA Features

The site includes PWA support:
- Offline capability (optional)
- Add to home screen
- Fast loading
- Responsive design

To enable full PWA features, add a service worker in `public/sw.js`.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🧪 Testing

### Performance Testing
```bash
# Using Lighthouse (Chrome DevTools)
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
```

### SEO Testing
- Google Search Console
- Bing Webmaster Tools
- Schema.org validator

Built with ❤️ using Next.js
