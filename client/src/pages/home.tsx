import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Code2,
  Rocket,
  Users,
  ChevronRight,
  Globe,
  Menu as MenuIcon,
  LineChart,
  Wrench,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites with full deployment support. Modern, responsive, and SEO-optimized solutions tailored to your business needs.",
    color: "text-primary",
  },
  {
    icon: MenuIcon,
    title: "Digital Menu Solutions",
    description: "Interactive digital menus for restaurants and cafes. QR code enabled, real-time updates, and beautiful presentation.",
    color: "text-chart-2",
  },
  {
    icon: LineChart,
    title: "CRM Systems",
    description: "Custom CRM solutions to manage customer relationships effectively. Streamline your sales and improve customer satisfaction.",
    color: "text-chart-3",
  },
  {
    icon: Wrench,
    title: "Custom Software",
    description: "Bespoke software solutions designed specifically for your unique business requirements and workflows.",
    color: "text-chart-4",
  },
];

const features = [
  {
    icon: Zap,
    title: "Startup Agility",
    description: "Fast turnaround times and flexible approach to meet your evolving needs.",
  },
  {
    icon: Rocket,
    title: "End-to-End Deployment",
    description: "We handle everything from development to deployment and maintenance.",
  },
  {
    icon: Shield,
    title: "Nashik-Based Support",
    description: "Local team providing personalized service and on-ground support.",
  },
];

const founders = [
  {
    name: "Aniket Rane",
    role: "Co-Founder & Tech Lead",
    bio: "Full-stack developer with expertise in modern web technologies and cloud architecture.",
  },
  {
    name: "Rushi Pagar",
    role: "Co-Founder & Design Lead",
    bio: "UI/UX specialist focused on creating intuitive and beautiful digital experiences.",
  },
  {
    name: "Dev Pawar",
    role: "Co-Founder & Business Lead",
    bio: "Strategic thinker driving business growth and client success initiatives.",
  },
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-chart-2/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Badge className="mx-auto w-fit" variant="secondary">
              <Rocket className="h-3 w-3 mr-1" />
              A Nashik Startup
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-accent tracking-tight">
              <span className="text-foreground">Transform Your Business</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                With Premium Tech
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build cutting-edge websites, digital menu solutions, CRM systems, and custom software.
              From concept to deployment, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="group" data-testid="button-hero-start-project">
                  Start Your Project
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-hero-view-work">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Happy Clients", value: "30+" },
                { label: "Team Members", value: "3" },
                { label: "Technologies", value: "20+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold font-accent text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatedSection className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">Our Services</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full hover-elevate transition-all duration-300 hover:scale-[1.02] border-border">
                <CardContent className="p-8">
                  <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                  <h3 className="text-2xl font-semibold font-accent mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
              The Nashik Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Local expertise, global standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Users className="h-3 w-3 mr-1" />
            Meet the Team
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
            Our Founding Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three passionate technologists building the future of web development in Nashik
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card className="text-center hover-elevate transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-accent mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary mb-4">{founder.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {founder.bio}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-br from-primary/10 via-chart-2/5 to-background border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build the perfect digital solution.
            Get a free consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-contact">
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild data-testid="button-cta-download">
              <a href="/api/download-brochure" download>
                Download Service Guide
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
