import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Users,
  Target,
  Eye,
  Lightbulb,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

const founders = [
  {
    name: "Aniket Rane",
    role: "Co-Founder & Tech Lead",
    bio: "Full-stack developer with 5+ years of experience in building scalable web applications. Expert in React, Node.js, and cloud technologies. Passionate about clean code and performance optimization.",
    expertise: ["Full-Stack Development", "Cloud Architecture", "Performance Optimization"],
  },
  {
    name: "Rushi Pagar",
    role: "Co-Founder & Design Lead",
    bio: "UI/UX specialist with a keen eye for detail and user-centered design. Creates intuitive interfaces that users love. Expert in Figma, user research, and design systems.",
    expertise: ["UI/UX Design", "Design Systems", "User Research"],
  },
  {
    name: "Dev Pawar",
    role: "Co-Founder & Business Lead",
    bio: "Strategic thinker with strong business acumen and client relationship management skills. Drives growth through innovative solutions and customer success initiatives.",
    expertise: ["Business Strategy", "Client Relations", "Project Management"],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and innovative approaches to solve complex problems.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Excellence is our standard. Every project receives meticulous attention to detail and craftsmanship.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through transparent communication and exceptional service.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Continuous learning and improvement drive us to stay ahead in the ever-evolving tech landscape.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Three passionate developers joined forces to create Nashik Website Development, bringing together expertise in technology, design, and business.",
  },
  {
    year: "Present",
    title: "Growing Strong",
    description: "Serving 30+ happy clients with 50+ successful projects delivered. Building the future of web development in Nashik.",
  },
  {
    year: "Future",
    title: "Scaling New Heights",
    description: "Expanding our team, launching new services, and becoming Nashik's premier technology partner for businesses of all sizes.",
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

export default function About() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="mx-auto" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-accent">
              <span className="text-foreground">Building the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Web Development in Nashik
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A startup born from passion, driven by innovation, and committed to excellence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="mb-4" variant="secondary">Our Story</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold font-accent mb-6">
                From Idea to Impact
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nashik Website Development was born from a simple yet powerful vision: to bring world-class web development services to businesses in Nashik and beyond.
                </p>
                <p>
                  As a startup, we combine the agility and innovation of a young company with the expertise and professionalism of seasoned developers. Our three co-founders bring together diverse skills in technology, design, and business to create comprehensive digital solutions.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each client's unique needs and delivering tailored solutions that drive real business results. We're not just building websites; we're building partnerships and success stories.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold font-accent text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold font-accent text-chart-2 mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold font-accent text-chart-3 mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold font-accent text-chart-4 mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-primary/20 hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold font-accent mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses in Nashik and beyond with cutting-edge web technologies and digital solutions. We strive to make professional web development accessible, affordable, and impactful for every business, regardless of size.
                </p>
              </CardContent>
            </Card>
            <Card className="border-chart-2/20 hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-chart-2 mb-4" />
                <h3 className="text-2xl font-bold font-accent mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Nashik's most trusted technology partner, known for innovation, quality, and client success. We envision a future where every local business has access to world-class digital solutions that drive growth and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Our Values</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Users className="h-3 w-3 mr-1" />
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
              Meet the Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three passionate technologists united by a common vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {founders.map((founder, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="h-full hover-elevate transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-chart-2 to-chart-3 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-accent mb-1 text-center">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-primary mb-4 text-center">{founder.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    <div className="space-y-2">
                      {founder.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Calendar className="h-3 w-3 mr-1" />
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-4">
              Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to success story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold font-accent text-primary border-4 border-background shadow-lg">
                      {item.year === "Present" ? "📍" : item.year === "Future" ? "🚀" : "🎯"}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-20 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold font-accent mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="bg-gradient-to-br from-primary/10 via-chart-2/5 to-background border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold font-accent mb-6">
            Proudly Based in Nashik
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're a local team providing world-class solutions. Meet us for a coffee and let's discuss how we can help your business grow.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-about-contact">
              Get in Touch
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
