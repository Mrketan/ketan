import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ketan Patil - Full Stack Web Developer | PHP, React, MySQL" },
      { name: "description", content: "Ketan Patil is a professional Full Stack Web Developer from Pune, Maharashtra. Expert in PHP, CodeIgniter, WordPress, React, MySQL, REST APIs, and e-commerce." },
      { name: "keywords", content: "Ketan Patil, Full Stack Developer, Web Developer Pune, PHP Developer, CodeIgniter Expert, WordPress Developer, React Developer, Backend Developer, Frontend Developer, IT Professional, Software Engineer" },
      { name: "author", content: "Ketan Patil" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Ketan Patil - Full Stack Web Developer" },
      { property: "og:description", content: "Ketan Patil is a professional Full Stack Web Developer from Pune. Hire me for scalable web apps, fintech, LMS, and custom e-commerce solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ketanpatil.netlify.app/" },
      { property: "og:image", content: "https://ketanpatil.netlify.app/kp-favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ketan Patil - Full Stack Web Developer" },
      { name: "twitter:description", content: "Full Stack Web Developer from Pune specializing in PHP, React, and REST APIs." },
      { name: "twitter:image", content: "https://ketanpatil.netlify.app/kp-favicon.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/kp-favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ketan Patil",
    "jobTitle": "Full Stack Web Developer",
    "url": "https://ketanpatil.netlify.app",
    "description": "Ketan Patil is a Pune-based Full Stack Web Developer specializing in PHP, CodeIgniter 4, WordPress, React, MySQL, and REST APIs.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "email": "patilketan1303@gmail.com",
    "telephone": "+917517305365"
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
