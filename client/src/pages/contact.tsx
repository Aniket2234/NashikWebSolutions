import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@nashikwebdev.com",
    link: "mailto:info@nashikwebdev.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Nashik, Maharashtra, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
];

const services = [
  "Website Development",
  "Digital Menu Solutions",
  "CRM Systems",
  "Custom Software",
  "Other",
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

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="mx-auto" variant="secondary">
              <Send className="h-3 w-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-accent">
              <span className="text-foreground">Let's Build Something</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-accent mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-contact-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            rows={5}
                            {...field}
                            data-testid="textarea-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-accent mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-elevate transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">24-Hour Response Guarantee</h3>
                      <p className="text-sm text-muted-foreground">
                        We pride ourselves on quick responses. You'll hear back from us within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      Local team with global standards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      End-to-end deployment support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      Competitive pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      Ongoing maintenance & support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Our Location</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold font-accent mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              Based in the heart of Nashik, serving clients locally and globally
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border border-border bg-muted/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold">Nashik, Maharashtra</p>
              <p className="text-sm text-muted-foreground">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
