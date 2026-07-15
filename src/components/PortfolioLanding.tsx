import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  HeartPulse,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import kpLogo from "@/assets/kp-logo.png.asset.json";
import ownImage from "@/assets/own image.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stats = [
  ["30+", "Projects Delivered"],
  ["5K+", "Monthly Transactions"],
  ["1K+", "LMS Active Users"],
  ["99.8%", "Reliability Achieved"],
];

// Real brand logos via simpleicons.org CDN
const techLogos: Record<string, { slug: string; color: string }> = {
  PHP: { slug: "php", color: "777BB4" },
  "CodeIgniter 4": { slug: "codeigniter", color: "EF4223" },
  CodeIgniter: { slug: "codeigniter", color: "EF4223" },
  WordPress: { slug: "wordpress", color: "21759B" },
  WooCommerce: { slug: "woocommerce", color: "96588A" },
  "React.js": { slug: "react", color: "61DAFB" },
  React: { slug: "react", color: "61DAFB" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  MySQL: { slug: "mysql", color: "4479A1" },
  "REST APIs": { slug: "swagger", color: "85EA2D" },
  Razorpay: { slug: "razorpay", color: "3395FF" },
  "Cashfree API": { slug: "cashapp", color: "00C244" },
  Cashfree: { slug: "cashapp", color: "00C244" },
  Git: { slug: "git", color: "F05032" },
  Bootstrap: { slug: "bootstrap", color: "7952B3" },
  HTML5: { slug: "html5", color: "E34F26" },
  HTML: { slug: "html5", color: "E34F26" },
  Elementor: { slug: "elementor", color: "92003B" },
  "Technical SEO": { slug: "googlesearchconsole", color: "458CF5" },
  SEO: { slug: "googlesearchconsole", color: "458CF5" },
  SQL: { slug: "mysql", color: "4479A1" },
  jQuery: { slug: "jquery", color: "0769AD" },
  "TanStack Router": { slug: "reactrouter", color: "CA4245" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  "Framer Motion": { slug: "framer", color: "0055FF" },
  Redis: { slug: "redis", color: "DC382D" },
  "Socket.io": { slug: "socketdotio", color: "FFFFFF" },
  WebSockets: { slug: "socketdotio", color: "FFFFFF" },
  Composer: { slug: "composer", color: "885630" },
  npm: { slug: "npm", color: "CB3837" },
  "Node.js Scripting": { slug: "nodedotjs", color: "339939" },
  Postman: { slug: "postman", color: "FF6C37" },
  "Apache/Nginx": { slug: "nginx", color: "009639" },
  Agile: { slug: "jira", color: "0052CC" },
  "JSON-LD Schema Markup": { slug: "json", color: "000000" },
  "Database Design": { slug: "databricks", color: "FF3621" },
  "Query Optimization": { slug: "apachespark", color: "E25A1C" },
  "Data Migration": { slug: "supabase", color: "3ECF8E" },
  "Banking APIs": { slug: "stripe", color: "008CDD" },
  UPI: { slug: "phonepe", color: "5E239D" },
  BBPS: { slug: "paytm", color: "002970" },
  "RC Verification API": { slug: "auth0", color: "EB5424" },
  "Core Web Vitals": { slug: "lighthouse", color: "F4470F" },
  "JWT Authentication": { slug: "jsonwebtokens", color: "000000" },
  "Role-Based Access Control (RBAC)": { slug: "okta", color: "007DC1" },
  MVC: { slug: "spring", color: "6DB33F" },
  OOP: { slug: "openjdk", color: "437291" },
  Microservices: { slug: "kubernetes", color: "326CE5" },
  "Responsive Design": { slug: "cssmodules", color: "000000" }
};

function logoUrl(name: string) {
  const meta = techLogos[name];
  if (!meta) return null;
  return `https://cdn.simpleicons.org/${meta.slug}/${meta.color}`;
}

const skills = [
  "PHP", "JavaScript", "HTML5", "CSS3", "SQL", "Java",
  "CodeIgniter 4", "React.js", "Bootstrap", "jQuery",
  "WordPress", "WooCommerce", "Elementor",
  "MySQL", "Database Design", "Query Optimization", "Data Migration",
  "REST APIs", "Razorpay", "Cashfree API", "Banking APIs", "UPI", "BBPS", "RC Verification API",
  "TanStack Router", "TypeScript", "Tailwind CSS", "Technical SEO", "JSON-LD Schema Markup", "Core Web Vitals", "Framer Motion",
  "WebSockets", "Socket.io", "Redis", "JWT Authentication", "Role-Based Access Control (RBAC)",
  "Git", "Composer", "npm", "Node.js Scripting", "Postman", "VS Code", "Apache/Nginx", "Agile", "MVC", "OOP", "Microservices", "Responsive Design"
];

const experience = [
  {
    role: "Sr. Web Developer / Software Developer",
    company: "The Brand Bugzz, Thane, Mumbai",
    period: "Mar 2026 – Present",
    points: [
      "Lead development on CodeIgniter 4 applications and explore modern JS frameworks (React, TanStack Router, TypeScript)",
      "Delivered 10+ websites and 3+ full-stack products including HRM Software (30+ users) and The Public Matters",
      "Architected microservices, multiple admin panels, and managed servers and MySQL databases end-to-end",
      "Implemented technical SEO, JSON-LD schema, dynamic sitemaps, Core Web Vitals and Lighthouse improvements",
    ],
  },
  {
    role: "Web Developer",
    company: "Innoplix IT Pvt. Ltd., Pune",
    period: "Jan 2025 – Mar 2026",
    points: [
      "Developed and maintained enterprise-level web applications using PHP, CodeIgniter 4, and MySQL",
      "Designed custom WordPress plugins and reusable components",
      "Integrated secure payment gateways and third-party verification APIs (Razorpay, Cashfree, RC Verification, BBPS, UPI)",
      "Performed code reviews and optimized applications for performance and security",
    ],
  },
  {
    role: "Web Developer",
    company: "Ozone CoWorks, Pune",
    period: "Jul 2024 – Jan 2025",
    points: [
      "Delivered 12+ WordPress websites with custom themes and advanced functionality",
      "Worked on SMS and WhatsApp marketing services",
      "Improved page load speed and overall performance by an average of 35%",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Sahyadree Softech, Pune",
    period: "Jan 2024 – Jul 2024",
    points: [
      "Built responsive websites using HTML, CSS, Bootstrap and JavaScript",
      "Assisted in PHP and MySQL backend development for client projects",
      "Gained hands-on experience with WordPress customization and deployment workflows",
    ],
  },
];


type Category =
  | "SaaS"
  | "Fintech"
  | "Education"
  | "Healthcare"
  | "E-commerce"
  | "Business"
  | "Internal Tools";

type Project = {
  name: string;
  url: string;
  tags: string[];
  points: string[];
  category: Category;
};

const projects: Project[] = [
  // SaaS
  {
    name: "The Public Matters",
    url: "https://thepublicmatters.com/",
    tags: ["React", "JavaScript", "REST APIs"],
    points: [
      "SaaS product platform with modern React frontend",
      "Component-driven, scalable UI architecture",
      "Optimized for performance and conversion",
    ],
    category: "SaaS",
  },
  {
    name: "RetailSera",
    url: "https://retailsera.com/",
    tags: ["React", "JavaScript", "REST APIs"],
    points: [
      "Retail SaaS solution with dashboard-style UI",
      "Data-driven interfaces for retail operations",
      "Responsive, fast and business-ready",
    ],
    category: "SaaS",
  },
  // Fintech
  {
    name: "Erupaiya Fintech Platform",
    url: "https://ci4.erupaiya.com/",
    tags: ["CodeIgniter 4", "Razorpay", "Cashfree", "MySQL", "REST APIs"],
    points: [
      "Built digital wallet system with BBPS, UPI and DMT",
      "Integrated Razorpay, Cashfree and banking APIs",
      "Handles 5,000+ monthly transactions with 99.8% uptime",
    ],
    category: "Fintech",
  },
  {
    name: "Vehicle Registration System",
    url: "https://www.innoplixit.com/vehicleregistration/",
    tags: ["PHP", "REST APIs", "MySQL"],
    points: [
      "Automated RC verification system",
      "Reduced manual processing time by 90%",
      "Built secure API-based verification flow",
    ],
    category: "Fintech",
  },
  // Education
  {
    name: "Neovidya LMS",
    url: "https://neovidya.co.in/",
    tags: ["PHP", "MySQL", "Bootstrap"],
    points: ["Built scalable learning platform", "Course management and student tracking"],
    category: "Education",
  },
  {
    name: "Techfreshers LMS",
    url: "https://techfreshers.org/",
    tags: ["PHP", "MySQL", "REST APIs"],
    points: ["Supports 1,000+ active users", "Integrated live classes and certification system"],
    category: "Education",
  },
  {
    name: "BrandEdge Training Institute",
    url: "https://brandedgetraininginstitute.com/",
    tags: ["WordPress", "Elementor", "SEO"],
    points: ["Custom LMS and training modules", "Designed for performance marketing education"],
    category: "Education",
  },
  // Business
  {
    name: "Innoplix IT",
    url: "https://www.innoplixit.com/",
    tags: ["HTML", "CSS", "Bootstrap"],
    points: ["Corporate website with clean UI", "Optimized for speed and responsiveness"],
    category: "Business",
  },
  {
    name: "BrandEdge Infotech",
    url: "https://brandedgeinfotech.com/",
    tags: ["WordPress", "Elementor", "SEO"],
    points: ["Custom theme setup", "SEO-friendly structure and performance optimization"],
    category: "Business",
  },
  {
    name: "HH Tech Solutions",
    url: "https://hhtechsolutions.co.uk/",
    tags: ["React", "JavaScript"],
    points: ["Modern React interface", "Smooth animations and responsive design"],
    category: "Business",
  },
  {
    name: "Navya Interior Designer",
    url: "https://navyainteriordesigner.com/",
    tags: ["React", "JavaScript"],
    points: ["Custom React portfolio site", "Gallery and service showcase sections"],
    category: "Business",
  },
  // Healthcare / Wellness
  {
    name: "Majestique Spa Mira Road",
    url: "https://majestiquespainmiraroad.in/",
    tags: ["React", "JavaScript"],
    points: ["Single-handedly built React frontend", "Animated, conversion-focused layout"],
    category: "Healthcare",
  },
  {
    name: "Jeeva Wellness Spa Mulund",
    url: "https://jeevawellneessspainmulund.in/",
    tags: ["React", "JavaScript"],
    points: ["Built complete React frontend solo", "Service pages with smooth animations"],
    category: "Healthcare",
  },
  {
    name: "Pearl Spa Mulund",
    url: "https://pearlspainmulund.in/",
    tags: ["React", "JavaScript"],
    points: ["Premium React spa website", "Mobile-first responsive UI"],
    category: "Healthcare",
  },
  {
    name: "Della Spa Kalyan",
    url: "https://www.dellaspainkalyan.in/",
    tags: ["React", "JavaScript"],
    points: ["Solo React frontend build", "Luxury spa booking experience"],
    category: "Healthcare",
  },
  {
    name: "Yeti Luxury Spa Bangalore",
    url: "https://yetiluxuryspainbanglore.in/",
    tags: ["React", "JavaScript"],
    points: ["Single-handedly developed in React", "Luxury brand styling with animations"],
    category: "Healthcare",
  },
  {
    name: "Royal Sky Thai Spa",
    url: "https://royalskythaispa.com/",
    tags: ["React", "JavaScript"],
    points: ["End-to-end React frontend build", "Booking-ready luxury experience"],
    category: "Healthcare",
  },
  {
    name: "Miaamor Salon",
    url: "https://miamorunisexsalon.com/",
    tags: ["React", "JavaScript"],
    points: ["Modern salon website", "Responsive UI with conversion-focused sections"],
    category: "Healthcare",
  },
  {
    name: "Aura Wellness Spa Thane",
    url: "https://aurawellnessspainthane.in/",
    tags: ["React", "JavaScript"],
    points: ["Solo-built React spa website", "Elegant animations and mobile-first layout"],
    category: "Healthcare",
  },
  {
    name: "Ananda Spa Powai",
    url: "https://anandaspapowai.in/",
    tags: ["React", "JavaScript"],
    points: ["End-to-end React frontend build", "Booking-focused luxury spa experience"],
    category: "Healthcare",
  },
  {
    name: "The Spa Story",
    url: "https://thespastory.in/",
    tags: ["React", "JavaScript"],
    points: ["Modern React spa brand website", "Smooth scroll and hover animations"],
    category: "Healthcare",
  },
  // Internal Tools
  {
    name: "BrandBug HRM System",
    url: "https://hrm.thebrandbug.com/login",
    tags: ["PHP", "MySQL", "REST APIs"],
    points: [
      "Live employee location tracking with map view",
      "Automated payslip generation with downloadable PDFs",
      "Role-based access for Employee, Manager, HR and Admin",
    ],
    category: "Internal Tools",
  },
  // E-commerce
  {
    name: "MM Interior",
    url: "https://mminterio.com/",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    points: ["Interior design e-commerce catalog", "Custom pages and mobile-first layout"],
    category: "E-commerce",
  },
  {
    name: "Wooden Story",
    url: "https://woodenstory.in/",
    tags: ["WordPress", "WooCommerce", "Razorpay"],
    points: ["Full online store setup", "Payment and inventory management"],
    category: "E-commerce",
  },
  {
    name: "Samrat Malam",
    url: "https://www.samratmalam.com/",
    tags: ["WordPress", "WooCommerce"],
    points: ["Dynamic catalog implementation", "Checkout and product management"],
    category: "E-commerce",
  },
  {
    name: "Madame Hall",
    url: "https://madamehall.com/",
    tags: ["WordPress", "WooCommerce", "SEO"],
    points: ["WooCommerce storefront", "Product pages optimized for discovery"],
    category: "E-commerce",
  },
  {
    name: "Mensense",
    url: "https://mensense.life/",
    tags: ["WordPress", "WooCommerce", "Razorpay"],
    points: ["D2C e-commerce experience", "Payment gateway integration"],
    category: "E-commerce",
  },
];

const categoryFilters: { label: "All" | Category; icon: typeof WalletCards }[] = [
  { label: "All", icon: Layers3 },
  { label: "SaaS", icon: Rocket },
  { label: "Fintech", icon: WalletCards },
  { label: "Education", icon: GraduationCap },
  { label: "Healthcare", icon: HeartPulse },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Business", icon: BriefcaseBusiness },
  { label: "Internal Tools", icon: Users },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Secure Payment Engineering",
    text: "Wallet transactions, bill payments and money transfers built with CodeIgniter 4, PHP, MySQL and reliable third-party APIs.",
  },
  {
    icon: Layers3,
    title: "Scalable LMS Architecture",
    text: "Course management, student enrollment, certifications and live session integrations for active learning communities.",
  },
  {
    icon: Zap,
    title: "Conversion Landing Pages",
    text: "Designed and developed 1000+ PPC-focused landing pages with fast loading, mobile-first layouts and clear lead flows.",
  },
];

const heroStack = ["PHP", "CodeIgniter 4", "WordPress", "React", "MySQL", "REST APIs"];

const premiumSignals = [
  { icon: Cpu, label: "Backend Logic" },
  { icon: Server, label: "API Systems" },
  { icon: Palette, label: "Modern UI" },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>}
    </motion.div>
  );
}

function TechBadge({ name, size = 16 }: { name: string; size?: number }) {
  const url = logoUrl(name);
  return (
    <span className="tech-badge">
      {url ? (
        <img src={url} alt={name} width={size} height={size} loading="lazy" />
      ) : (
        <Code2 size={size} className="text-muted-foreground" />
      )}
      <span>{name}</span>
    </span>
  );
}

function BrowserPreview({ name, url, tags }: { name: string; url: string; tags: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "800px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Reset loaded state when it goes out of view to show skeleton next time it mounts
  useEffect(() => {
    if (!isInView) {
      setLoaded(false);
    }
  }, [isInView]);

  return (
    <div className="project-preview" ref={containerRef}>
      <div className="preview-toolbar flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-muted" />
        <span className="hidden rounded-full border border-border px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-accent sm:inline-flex">
          Live
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {(!loaded || !isInView) && (
          <div className="preview-loading absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-6 bg-muted">
            <div className="relative">
              <div className="h-10 w-10 animate-pulse rounded-lg bg-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Smartphone className="text-primary" size={20} />
              </div>
            </div>
            <div className="w-full max-w-[16rem] space-y-2">
              <div className="skeleton-bar h-2 w-3/4 rounded-full" />
              <div className="skeleton-bar h-2 w-1/2 rounded-full" />
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Loading live preview…</span>
          </div>
        )}
        {isInView && (
          <iframe
            title={`${name} live website preview`}
            src={`/api/portfolio-preview?url=${encodeURIComponent(url)}`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
            className={`relative z-10 h-full w-full border-0 bg-background pointer-events-none transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
        <div className="preview-stack pointer-events-none absolute left-3 top-3 z-20 hidden gap-1.5 sm:flex">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  return (
    <motion.article
      layout
      key={project.name}
      className="project-card premium-project-card group cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04 }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <BrowserPreview name={project.name} url={project.url} tags={project.tags} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <h4 className="text-xl font-bold">{project.name}</h4>
        <a
          className="icon-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <TechBadge key={tag} name={tag} />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Click to view full details and live preview →</p>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl border-border bg-card/95 p-0 backdrop-blur-xl">
        {project && (
          <div className="grid max-h-[85vh] gap-0 overflow-y-auto lg:grid-cols-[1.3fr_1fr]">
            <div className="relative">
              <BrowserPreview name={project.name} url={project.url} tags={project.tags} />
            </div>
            <div className="flex flex-col gap-5 p-6 lg:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p>
                  <DialogTitle className="mt-2 text-2xl font-black md:text-3xl">{project.name}</DialogTitle>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground"
                >
                  <X size={16} />
                </button>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} size={18} />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Highlights</p>
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckCircle2 className="mt-1 shrink-0 text-accent" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="neon-button mt-auto self-start"
              >
                Visit Live Site <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />;
}

function ParallaxAccents() {
  const { scrollYProgress } = useScroll();
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -260]), { stiffness: 60, damping: 24 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 220]), { stiffness: 60, damping: 24 });
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -160]), { stiffness: 50, damping: 22 });

  return (
    <div className="parallax-accents" aria-hidden>
      <motion.div className="parallax-orb parallax-orb--one" style={{ y: y1 }} />
      <motion.div className="parallax-orb parallax-orb--two" style={{ y: y2 }} />
      <motion.div className="parallax-orb parallax-orb--three" style={{ y: y3 }} />
      <div className="parallax-grid" />
    </div>
  );
}


function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, .project-card, .skill-card, .filter-chip, .tag",
      );
      ring.classList.toggle("cursor-ring--hover", Boolean(interactive));
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onDown = () => ring.classList.add("cursor-ring--click");
    const onUp = () => ring.classList.remove("cursor-ring--click");

    document.body.classList.add("has-custom-cursor");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}

export function PortfolioLanding() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const consoleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const filteredProjects = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <ParallaxAccents />
      <CustomCursor />

      <section className="hero-grid relative min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--hero-light-field)] opacity-80" />
        <div className="neon-beam neon-beam-one" />
        <div className="neon-beam neon-beam-two" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
          <nav className="glass-nav flex items-center justify-between gap-4 px-4 py-3">
            <a href="#top" className="flex items-center gap-3 font-semibold" aria-label="Ketan Patil portfolio home">
              <img src={kpLogo.url} alt="Ketan Patil KP logo" width={40} height={40} className="h-10 w-10 rounded-lg object-contain shadow-neon" />
              <span className="hidden sm:block">Ketan Patil</span>
            </a>
            <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a className="story-link" href="#projects">Projects</a>
              <a className="story-link" href="#skills">Skills</a>
              <a className="story-link" href="#experience">Experience</a>
              <a className="story-link" href="#contact">Contact</a>
            </div>
            <a className="neon-button" href="mailto:patilketan1303@gmail.com">
              Hire Me <ArrowUpRight size={16} />
            </a>
          </nav>

          <div id="top" className="grid items-start gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
            <motion.div 
              className="flex flex-col gap-12"
              initial="hidden" 
              animate="visible" 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
              }}
            >
              <div>
                <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent hover:bg-accent/20 transition-colors">
                  👋 Hello, I'm <strong className="font-bold">Ketan Patil</strong>
                </motion.div>
                <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Full Stack Web Developer building <span className="gradient-text">fast fintech, LMS & commerce</span> platforms.
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Results-driven developer from Pune with 2+ years of experience in PHP, CodeIgniter 4, WordPress, React, MySQL, REST APIs and secure e-commerce integrations.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a className="neon-button neon-button-lg group" href="#projects">
                    View Projects <Rocket size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a className="ghost-button" href="mailto:patilketan1303@gmail.com">
                    <Mail size={18} /> Contact Me
                  </a>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  <a className="contact-pill" href="tel:+917517305365"><Phone size={16} /> <span suppressHydrationWarning>+91 7517305365</span></a>
                  <a className="contact-pill" href="mailto:patilketan1303@gmail.com"><Mail size={16} /> <span suppressHydrationWarning>patilketan1303@gmail.com</span></a>
                  <span className="contact-pill sm:col-span-2 text-xs leading-relaxed">
                    <MapPin size={16} className="shrink-0" /> 
                    <span className="font-semibold text-foreground/80 mr-1">Available in:</span>
                    Pune · Mumbai · Bengaluru · Hyderabad · Delhi NCR · Nagpur · Nashik
                  </span>
                  <span className="contact-pill sm:col-span-2"><Globe2 size={16} /> Linkedin · Github · My Website</span>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-10 relative overflow-hidden rounded-2xl border border-accent/20 shadow-neon max-w-sm group"
                variants={fadeUp}
                style={{ y: heroImageY }}
              >
                <img src={ownImage} alt="Ketan Patil" className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
              </motion.div>

            </motion.div>

            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* PORTFOLIO CONSOLE */}
              <motion.div className="signature-orbit w-full" style={{ y: consoleY }}>
                <div className="glass-panel relative p-5 md:p-7 transition-all duration-500 hover:shadow-neon hover:border-accent/40">
                  <div className="absolute -right-5 -top-5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold text-accent shadow-neon backdrop-blur-xl">LIVE STACK</div>
                  <div className="hero-ring" aria-hidden="true" />
                  <div className="mb-6 flex items-center gap-4 border-b border-border/50 pb-5">
                    <div className="flex-1">
                      <p className="text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-1">System Status</p>
                      <h2 className="text-2xl font-black tracking-tight">PORTFOLIO CONSOLE</h2>
                    </div>
                    <Code2 className="text-accent/50" size={36} />
                  </div>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map(([value, label]) => (
                    <div key={label} className="metric-card">
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Database size={16} className="text-primary" /> Core stack signal
                  </div>
                  <div className="space-y-3">
                    {[
                      ["PHP / CodeIgniter", "92%"],
                      ["WordPress / WooCommerce", "88%"],
                      ["React / JavaScript", "82%"],
                      ["API & Payment Integrations", "90%"],
                    ].map(([label, width]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-xs text-muted-foreground"><span>{label}</span><span>{width}</span></div>
                        <div className="h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-primary shadow-neon" style={{ width }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {premiumSignals.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <div className="signal-chip" key={signal.label}>
                        <Icon size={16} />
                        <span>{signal.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              </motion.div>

              {/* ABOUT ME */}
              <motion.div 
                className="mt-12 lg:mt-16"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary uppercase shadow-neon">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" /> ABOUT ME
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-[1.15] sm:text-4xl">
                  Building Scalable &<br />Reliable <span className="text-primary">Web Solutions</span>
                </h2>
                <p className="mb-8 text-[0.95rem] leading-relaxed text-muted-foreground">
                  I specialize in building robust web applications that are fast, secure and user-focused. From elegant frontends to powerful backend systems, I deliver complete digital solutions.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Code2, label: "Clean & Efficient Code" },
                    { icon: Server, label: "RESTful API Development" },
                    { icon: ShieldCheck, label: "Scalable & Secure Architecture" },
                    { icon: Zap, label: "Performance Optimized" }
                  ].map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 p-3 transition-colors hover:border-primary/30 hover:bg-primary/5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon size={18} />
                      </div>
                      <span className="text-sm font-semibold">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* FULL WIDTH TECHNOLOGY STACK ROW */}
          <motion.div 
            className="mt-8 mb-8 rounded-2xl border border-border/50 bg-background/40 p-6 md:p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-border/50" />
              TECHNOLOGY STACK
              <div className="h-[1px] flex-1 bg-border/50" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {heroStack.map((item) => {
                const url = logoUrl(item);
                return (
                  <div key={item} className="group flex min-w-[130px] flex-1 sm:flex-none flex-col items-center justify-center gap-4 rounded-xl border border-border/40 bg-background/60 py-5 transition-all hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-neon">
                    {url ? (
                       <img src={url} alt={item} width={36} height={36} loading="lazy" className="opacity-90 transition-transform group-hover:scale-110" />
                    ) : (
                       <Code2 size={36} className="text-muted-foreground opacity-90 transition-transform group-hover:scale-110" />
                    )}
                    <span className="text-xs font-bold tracking-wide">{item}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Real tools, real logos"
          text="A practical full-stack toolkit for backend systems, CMS builds, frontends, databases, integrations and deployment workflows."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => {
            const url = logoUrl(skill);
            return (
              <motion.div
                key={skill}
                className="skill-card skill-card-premium"
                style={{ "--skill-delay": `${index * 80}ms` } as CSSProperties}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                {url ? (
                  <img src={url} alt={skill} width={36} height={36} loading="lazy" />
                ) : (
                  <Code2 size={36} className="text-muted-foreground" />
                )}
                <p>{skill}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-section">
        <SectionHeading eyebrow="Project Highlights" title="High-impact systems with measurable outcomes" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Icon className="mb-5 text-accent" size={34} />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Filter projects by category"
          text="Tap any card to open a focused modal with a live website preview, full tech stack and highlight points."
        />

        <div className="mx-auto mb-10 max-w-5xl">
          <div className="filter-bar flex flex-wrap justify-center gap-2">
            {categoryFilters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeCategory === filter.label;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveCategory(filter.label)}
                  className={`filter-chip ${isActive ? "filter-chip-active" : ""}`}
                  aria-pressed={isActive}
                >
                  <Icon size={15} />
                  <span>{filter.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="filter-indicator"
                      className="filter-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                  onOpen={() => setActiveProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      <section id="experience" className="section-shell bg-section">
        <SectionHeading eyebrow="Experience" title="Professional journey" />
        <div className="mx-auto max-w-5xl space-y-5">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="timeline-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{job.period}</span>
              </div>
              <ul className="mt-5 grid gap-2 text-muted-foreground md:grid-cols-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2"><CheckCircle2 className="mt-1 shrink-0 text-primary" size={16} />{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Education & Certifications" title="Foundation and credentials" />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <motion.div 
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GraduationCap className="mb-5 text-primary" size={34} />
            <h3 className="text-xl font-bold">Education</h3>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">BE Computer Science</strong><br />MET Bhujbal Knowledge City, Nashik · 2019 – 2023 · CGPA 7.58/10</p>
              <p><strong className="text-foreground">HSC</strong><br />K.T.H.M College, Nashik · 2018 – 2019 · 55.69%</p>
              <p><strong className="text-foreground">SSC</strong><br />Rachana Vidhyalaya, Nashik · 2016 – 2017 · 78.80%</p>
            </div>
          </motion.div>
          <motion.div 
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Award className="mb-5 text-accent" size={34} />
            <h3 className="text-xl font-bold">Certifications</h3>
            <div className="mt-4 space-y-3 text-muted-foreground">
              <p>National Skill Development Corporation (NSDC) – Web Development Certification</p>
              <p>Journal of Interdisciplinary Cycle Research Certification</p>
              <p className="rounded-lg border border-border bg-background/50 p-4"><strong className="text-foreground">Notice Period:</strong> 30 Days<br /><strong className="text-foreground">Availability:</strong> Immediate</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 sm:px-8 lg:px-12">
        <motion.div
          className="mx-auto max-w-6xl rounded-2xl border border-border bg-[image:var(--cta-gradient)] p-8 shadow-deep md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Let’s Build</p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">Need a developer for a fast, secure web application?</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">Available for full-time, contract and remote roles across PHP, CodeIgniter, WordPress, React, MySQL, REST APIs and e-commerce projects.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a className="neon-button neon-button-lg" href="mailto:patilketan1303@gmail.com"><Mail size={18} /> <span suppressHydrationWarning>Email Ketan</span></a>
              <a className="ghost-button" href="tel:+917517305365"><Phone size={18} /> <span suppressHydrationWarning>Call Now</span></a>
              <div className="flex gap-3">
                <a className="icon-link" href="#top" aria-label="Website"><Globe2 size={18} /></a>
                <a className="icon-link" href="#top" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a className="icon-link" href="#top" aria-label="GitHub"><Github size={18} /></a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
