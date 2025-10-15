import { Link, useLocation } from "wouter";
import { Menu, X, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
              <Code2 className="h-8 w-8 lg:h-9 lg:w-9 text-primary relative" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold font-accent tracking-tight">
                <span className="text-foreground">Nashik</span>{" "}
                <span className="text-primary">Web Dev</span>
              </h1>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`relative ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {location === link.href && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden lg:block">
              <Button variant="default" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" className="block pt-2">
              <Button variant="default" className="w-full" data-testid="button-mobile-get-started">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
