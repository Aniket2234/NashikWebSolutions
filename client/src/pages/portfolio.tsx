import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ExternalLink,
  Briefcase,
  Globe,
  Menu as MenuIcon,
  LineChart,
  Wrench,
  Check,
} from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "Restaurant Digital Menu",
    category: "Digital Menu",
    description: "Modern QR-based digital menu system for a premium restaurant in Nashik with real-time updates and multi-language support.",
    image: "bg-gradient-to-br from-chart-2/20 to-chart-2/5",
    technologies: ["React", "Firebase", "Tailwind CSS", "QR Codes"],
    icon: MenuIcon,
    results: ["50% faster order processing", "Zero printing costs", "Instant menu updates"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Website Development",
    description: "Full-featured e-commerce website with payment integration, inventory management, and admin dashboard.",
    image: "bg-gradient-to-br from-primary/20 to-primary/5",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    icon: Globe,
    results: ["200+ daily visitors", "95% uptime", "Secure payments"],
  },
  {
    id: 3,
    title: "Sales CRM System",
    category: "CRM System",
    description: "Custom CRM solution for a local business to track leads, manage customer relationships, and analyze sales performance.",
    image: "bg-gradient-to-br from-chart-3/20 to-chart-3/5",
    technologies: ["React", "Node.js", "MongoDB", "Charts.js"],
    icon: LineChart,
    results: ["30% productivity increase", "Better lead tracking", "Real-time analytics"],
  },
  {
    id: 4,
    title: "Inventory Management",
    category: "Custom Software",
    description: "Bespoke inventory management system with barcode scanning, stock alerts, and reporting for a retail chain.",
    image: "bg-gradient-to-br from-chart-4/20 to-chart-4/5",
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    icon: Wrench,
    results: ["Zero stock-outs", "Automated reordering", "Cost savings"],
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "Website Development",
    description: "Professional corporate website with CMS, blog, and contact forms for a consulting firm.",
    image: "bg-gradient-to-br from-primary/20 to-chart-2/10",
    technologies: ["React", "Strapi CMS", "Vercel", "SEO Tools"],
    icon: Globe,
    results: ["Top Google rankings", "500% traffic increase", "Professional image"],
  },
  {
    id: 6,
    title: "Appointment Booking System",
    category: "Custom Software",
    description: "Online appointment scheduling system for a healthcare clinic with SMS notifications and calendar integration.",
    image: "bg-gradient-to-br from-chart-3/20 to-primary/5",
    technologies: ["React", "Node.js", "Twilio", "Google Calendar API"],
    icon: Wrench,
    results: ["80% less no-shows", "Automated reminders", "Better scheduling"],
  },
];

const categories = ["All", "Website Development", "Digital Menu", "CRM System", "Custom Software"];

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

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="mx-auto" variant="secondary">
              <Briefcase className="h-3 w-3 mr-1" />
              Our Work
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-accent">
              <span className="text-foreground">Projects That Drive</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our recent work and the impact we've created for our clients
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <Card className="h-full hover-elevate transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="h-16 w-16 text-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="secondary">{project.category}</Badge>
                  <h3 className="text-xl font-bold font-accent mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="h-3 w-3 text-primary flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="ghost" className="w-full group/btn" data-testid={`button-project-${project.id}`}>
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection className="bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">Success Stories</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold font-accent mb-6">
                Real Impact, Real Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every project we undertake is a partnership. We measure our success by the tangible results we deliver to our clients - increased revenue, improved efficiency, and enhanced customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold font-accent text-primary mb-1">50+</div>
                  <p className="text-sm text-muted-foreground">Successful Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold font-accent text-chart-2 mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold font-accent text-chart-3 mb-1">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div>
                  <div className="text-3xl font-bold font-accent text-chart-4 mb-1">30+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" data-testid="button-portfolio-start-project">
                  Start Your Project
                </Button>
              </Link>
            </div>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-accent mb-4">Client Testimonial</h3>
                <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                  "Nashik Website Development transformed our business with a stunning website and digital menu system. The team's professionalism, technical expertise, and dedication to our success were outstanding. Highly recommended!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                    <span className="text-white font-bold">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rajesh Sharma</p>
                    <p className="text-sm text-muted-foreground">CEO, Local Restaurant Chain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-br from-primary/10 via-chart-2/5 to-background border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-portfolio-contact">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-portfolio-services">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
