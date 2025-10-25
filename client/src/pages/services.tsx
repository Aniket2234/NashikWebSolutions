import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LottieAnimation } from "@/components/lottie-animation";
import {
  Globe,
  Menu as MenuIcon,
  LineChart,
  Wrench,
  Check,
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Cloud,
  Layout,
  Palette,
  Search,
  Lock,
  Download,
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Modern, Responsive & SEO-Optimized",
    description: "We create stunning, high-performance websites that drive results. From simple landing pages to complex web applications, we've got you covered.",
    features: [
      "Custom responsive design",
      "SEO optimization",
      "Performance optimization",
      "Content management system",
      "E-commerce integration",
      "Full deployment & hosting",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
    color: "text-primary",
  },
  {
    icon: MenuIcon,
    title: "Digital Menu Solutions",
    tagline: "Interactive & Real-Time Updates",
    description: "Transform your restaurant or café with modern digital menus. QR code enabled, easy to update, and beautiful presentation for your customers.",
    features: [
      "QR code generation",
      "Real-time menu updates",
      "Multi-language support",
      "Image galleries",
      "Order management",
      "Analytics dashboard",
    ],
    technologies: ["React", "Firebase", "Cloudinary", "Stripe"],
    color: "text-chart-2",
  },
  {
    icon: LineChart,
    title: "CRM Systems",
    tagline: "Streamline Customer Relationships",
    description: "Custom CRM solutions designed to help you manage customer relationships, track sales, and grow your business effectively.",
    features: [
      "Customer database",
      "Sales pipeline tracking",
      "Email automation",
      "Reporting & analytics",
      "Task management",
      "Mobile access",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    color: "text-chart-3",
  },
  {
    icon: Wrench,
    title: "Custom Software",
    tagline: "Built for Your Unique Needs",
    description: "Bespoke software solutions tailored to your specific business requirements. We turn your vision into powerful, scalable applications.",
    features: [
      "Requirements analysis",
      "Custom development",
      "API integration",
      "Third-party integrations",
      "Ongoing support",
      "Scalable architecture",
    ],
    technologies: ["React", "Python", "Node.js", "AWS", "Docker"],
    color: "text-chart-4",
  },
];

const process = [
  { 
    step: "01", 
    title: "Discovery", 
    description: "Understanding your business needs and goals",
    lottieUrl: "https://lottie.host/4e9b6c8f-3d75-4c2e-9f1a-d1e3f5g6h7i8/DiscoveryAnim.json"
  },
  { 
    step: "02", 
    title: "Design", 
    description: "Creating wireframes and visual designs",
    lottieUrl: "https://lottie.host/5f0c7d9g-4e86-5d3f-0g2b-e2f4g6h8i9j0/DesignAnim.json"
  },
  { 
    step: "03", 
    title: "Development", 
    description: "Building with modern technologies",
    lottieUrl: "https://lottie.host/6g1d8e0h-5f97-6e4g-1h3c-f3g5h7i9j0k1/DevAnim.json"
  },
  { 
    step: "04", 
    title: "Deployment", 
    description: "Launching and maintaining your solution",
    lottieUrl: "https://lottie.host/7h2e9f1i-6g08-7f5h-2i4d-g4h6i8j0k1l2/DeployAnim.json"
  },
];

const techStack = [
  { icon: Code, name: "React & Next.js" },
  { icon: Smartphone, name: "React Native" },
  { icon: Database, name: "PostgreSQL & MongoDB" },
  { icon: Cloud, name: "AWS & Vercel" },
  { icon: Layout, name: "Tailwind CSS" },
  { icon: Palette, name: "Figma & Design" },
  { icon: Search, name: "SEO Tools" },
  { icon: Lock, name: "Security First" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`opacity-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="mx-auto" variant="secondary">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-accent">
              <span className="text-foreground">Comprehensive Digital</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end solutions that transform your business
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 space-y-20 lg:space-y-32">
        {services.map((service, index) => (
          <AnimatedSection key={index}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <service.icon className={`h-16 w-16 ${service.color} mb-6`} />
                <h2 className="text-3xl lg:text-4xl font-bold font-accent mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-primary mb-4">{service.tagline}</p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Link href="/contact">
                  <Button data-testid={`button-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Our Process</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="relative h-full card-shadow border-border">
                  <CardContent className="p-6">
                    <div className="text-6xl font-bold font-accent text-primary/20 mb-4 text-center">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                    <p className="text-muted-foreground text-center text-sm">{item.description}</p>
                  </CardContent>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 h-6 w-6 text-muted-foreground/30 -translate-y-1/2" />
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">Technology Stack</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
            Modern Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge tools and frameworks to build scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <Card className="text-center hover-elevate transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <tech.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="font-medium">{tech.name}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-br from-primary/10 via-chart-2/5 to-background border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <Download className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-6">
            Get Detailed Service Information
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download our comprehensive service guide with pricing, timelines, and detailed package information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-download-brochure">
              <a href="/api/download-brochure" download>
                <Download className="mr-2 h-4 w-4" />
                Download Service Guide
              </a>
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-services-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
