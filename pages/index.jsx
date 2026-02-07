import Head from 'next/head';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const siteUrl = 'https://vignesh-portfolio.com'; // Replace with your actual domain
  const imageUrl = `${siteUrl}/og-image.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vignesh M",
    "jobTitle": "Software Developer",
    "description": "Results-driven Full Stack Software Developer with 3+ years of experience in MERN stack development",
    "url": siteUrl,
    "email": "mvignesh191299@gmail.com",
    "telephone": "+91-8300773347",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Theni",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "RVS College of Arts and Science",
        "description": "Master of Computer Application (MCA)"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Arul Anandar College",
        "description": "Bachelor of Science in Mathematics"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Digisquares Technologies Pvt. Ltd."
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "RESTful API",
      "Microservices",
      "AI/ML Integration",
      "LLM Implementation"
    ],
    "sameAs": [
      "https://linkedin.com/in/vignesh-vicky",
      "https://github.com/vignesh191299"
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Vignesh M - Software Developer | Full Stack MERN Developer</title>
        <meta name="title" content="Vignesh M - Software Developer | Full Stack MERN Developer" />
        <meta 
          name="description" 
          content="Results-driven Full Stack Software Developer with 3+ years of experience in MERN stack, AI/ML integration, and scalable web application development. Expert in React.js, Next.js, Node.js, and TypeScript." 
        />
        <meta name="keywords" content="Software Developer, Full Stack Developer, MERN Stack, React.js, Next.js, Node.js, JavaScript, TypeScript, AI/ML Integration, Web Development, Tamil Nadu" />
        <meta name="author" content="Vignesh M" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Vignesh M - Software Developer | Full Stack MERN Developer" />
        <meta 
          property="og:description" 
          content="Results-driven Full Stack Software Developer with 3+ years of experience in MERN stack, AI/ML integration, and scalable web application development." 
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vignesh M Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Vignesh M - Software Developer | Full Stack MERN Developer" />
        <meta 
          name="twitter:description" 
          content="Results-driven Full Stack Software Developer with 3+ years of experience in MERN stack, AI/ML integration, and scalable web application development." 
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Theni" />
        <meta name="geo.position" content="10.0104;77.4840" />
        <meta name="ICBM" content="10.0104, 77.4840" />
      </Head>

      <Portfolio />
    </>
  );
}
