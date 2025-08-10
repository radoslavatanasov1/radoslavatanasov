import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Radoslav A. - Senior Full Stack Developer | React, Next.js, TypeScript Expert",
  description = "Senior Full Stack Developer with 4+ years experience. Expert in React, Next.js, TypeScript, Python. Specializing in FinTech, AI integration, and enterprise solutions. Available for hire.",
  keywords = "full stack developer, react developer, next.js expert, typescript developer, fintech developer, ai integration, web development, freelance developer, bulgaria developer, senior developer",
  image = "https://radoslav.site/og-image.jpg",
  url = "https://radoslav.site",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Radoslav Atanasov",
    "alternateName": "Radoslav A.",
    "jobTitle": "Senior Full Stack Developer",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/radoslavatanasov1/",
      "https://github.com/radoslavatanasov1"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js", 
      "TypeScript",
      "Python",
      "Full Stack Development",
      "FinTech Solutions",
      "AI Integration",
      "Web Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bulgaria"
      },
      "skills": [
        "React Development",
        "Next.js Development", 
        "TypeScript Programming",
        "Python Development",
        "Database Design",
        "API Development",
        "UI/UX Design",
        "DevOps"
      ]
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development services including frontend, backend, and full-stack solutions"
      },
      "availability": "InStock",
      "priceRange": "€799-€5999"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@devdone.io",
      "contactType": "customer service",
      "availableLanguage": ["English", "Bulgarian"]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevDone.io",
    "founder": {
      "@type": "Person",
      "name": "Radoslav Atanasov"
    },
    "url": url,
    "logo": `${url}/logo.png`,
    "description": "Professional web development services specializing in modern technologies",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@devdone.io",
      "contactType": "customer service"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Full Stack Development", 
      "FinTech Solutions",
      "AI Integration",
      "Enterprise Solutions"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Radoslav Atanasov" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Radoslav A. - Full Stack Developer" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@radoslavdev" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="radoslavatanasov1" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="msapplication-TileColor" content="#4F46E5" />
      <meta name="application-name" content="Radoslav A. Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Radoslav A." />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="BG" />
      <meta name="geo.country" content="Bulgaria" />
      <meta name="geo.position" content="42.6977;23.3219" />
      <meta name="ICBM" content="42.6977, 23.3219" />

      {/* Business/Professional Tags */}
      <meta name="classification" content="Business" />
      <meta name="category" content="Web Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://api.microlink.io" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.microlink.io" />
    </Helmet>
  );
};

export default SEOHead;
