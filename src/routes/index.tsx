import { createFileRoute } from "@tanstack/react-router";
import { PortfolioLanding } from "../components/PortfolioLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ketan Patil - Full Stack Web Developer | PHP, React, MySQL" },
      {
        name: "description",
        content:
          "Portfolio of Ketan Patil, a Pune-based Full Stack Web Developer specializing in PHP, CodeIgniter 4, WordPress, React, MySQL, REST APIs and e-commerce.",
      },
      { name: "keywords", content: "Ketan Patil, Full Stack Developer, Web Developer Pune, PHP Developer, CodeIgniter Expert, WordPress Developer, React Developer, Backend Developer, Frontend Developer, IT Professional, Software Engineer" },
      { property: "og:title", content: "Ketan Patil - Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Explore fintech apps, LMS platforms, business websites, React applications and e-commerce work by Ketan Patil.",
      },
      { name: "twitter:title", content: "Ketan Patil - Full Stack Web Developer" },
      {
        name: "twitter:description",
        content: "Fast, secure, responsive portfolio for PHP, CodeIgniter, WordPress and React projects by Ketan Patil.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioLanding />;
}
