import { Link } from "wouter";
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  { label: "Website Development", href: "/services" },
  { label: "Digital Menu Solutions", href: "/services" },
  { label: "CRM Systems", href: "/services" },
  { label: "Custom Software", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                <Code2 className="h-8 w-8 text-primary relative" />
              </div>
              <h2 className="text-xl font-bold font-accent tracking-tight">
                <span className="text-foreground">Nashik</span>{" "}
                <span className="text-primary">Web Dev</span>
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium web development services transforming businesses in Nashik with cutting-edge technology and personalized solutions.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="link-footer-github">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="link-footer-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="link-footer-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href}>
                    <button
                      className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm transition-colors"
                      data-testid={`link-footer-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <button
                      className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm transition-colors"
                      data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nashik, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@nashikwebdev.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest updates on web development trends and our services.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="h-9"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="w-full" size="sm" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nashik Website Development. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Founded by{" "}
              <span className="text-foreground font-medium">Aniket Rane</span>,{" "}
              <span className="text-foreground font-medium">Rushi Pagar</span>, and{" "}
              <span className="text-foreground font-medium">Dev Pawar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
