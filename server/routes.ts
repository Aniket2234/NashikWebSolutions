import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, data: inquiry });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Invalid request data" 
      });
    }
  });

  app.get("/api/download-brochure", async (req, res) => {
    const brochureContent = generateBrochureHTML();
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="Nashik-Web-Dev-Services.html"');
    res.send(brochureContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateBrochureHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nashik Website Development - Service Guide</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: #ffffff;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .header {
      text-align: center;
      margin-bottom: 60px;
      padding-bottom: 40px;
      border-bottom: 3px solid #3b82f6;
    }
    
    .logo {
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 10px;
      color: #3b82f6;
    }
    
    .tagline {
      font-size: 18px;
      color: #6b7280;
    }
    
    h1 {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 20px;
      color: #111827;
    }
    
    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 30px;
      color: #1f2937;
      border-left: 4px solid #3b82f6;
      padding-left: 16px;
    }
    
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #374151;
    }
    
    .intro {
      font-size: 20px;
      color: #4b5563;
      margin-bottom: 50px;
      text-align: center;
      line-height: 1.8;
    }
    
    .section {
      margin-bottom: 60px;
      padding: 40px;
      background: #f9fafb;
      border-radius: 12px;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    
    .service-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
    }
    
    .service-card h3 {
      color: #3b82f6;
      margin-bottom: 16px;
    }
    
    .feature-list {
      list-style: none;
      margin-top: 16px;
    }
    
    .feature-list li {
      padding: 8px 0;
      padding-left: 28px;
      position: relative;
      color: #4b5563;
    }
    
    .feature-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
    
    .tech-badge {
      display: inline-block;
      background: #dbeafe;
      color: #1e40af;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 13px;
      margin: 4px;
    }
    
    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .step {
      text-align: center;
      padding: 24px;
      background: white;
      border-radius: 8px;
    }
    
    .step-number {
      font-size: 48px;
      font-weight: 800;
      color: #3b82f6;
      opacity: 0.3;
      margin-bottom: 12px;
    }
    
    .pricing-table {
      margin-top: 30px;
    }
    
    .pricing-row {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .pricing-row:last-child {
      border-bottom: none;
    }
    
    .pricing-label {
      font-weight: 600;
      color: #374151;
    }
    
    .pricing-value {
      color: #3b82f6;
      font-weight: 600;
    }
    
    .cta-section {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      padding: 50px;
      border-radius: 12px;
      text-align: center;
    }
    
    .cta-section h2 {
      color: white;
      border-left: none;
      padding-left: 0;
    }
    
    .contact-info {
      margin-top: 30px;
      font-size: 18px;
    }
    
    .contact-item {
      margin: 12px 0;
    }
    
    .founders {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    
    .founder-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
    }
    
    .founder-name {
      font-size: 20px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 8px;
    }
    
    .founder-role {
      color: #3b82f6;
      margin-bottom: 12px;
    }
    
    @media print {
      body {
        padding: 20px;
      }
      
      .section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Nashik Website Development</div>
    <div class="tagline">Premium Digital Solutions for Modern Businesses</div>
  </div>

  <h1>Comprehensive Service Guide</h1>
  <p class="intro">
    Transform your business with cutting-edge web technologies. We specialize in custom websites, 
    digital menu solutions, CRM systems, and bespoke software - all with full deployment support.
  </p>

  <div class="section">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div class="service-card">
        <h3>Website Development</h3>
        <p>Modern, responsive, and SEO-optimized websites that drive results.</p>
        <ul class="feature-list">
          <li>Custom responsive design</li>
          <li>SEO optimization</li>
          <li>Performance optimization</li>
          <li>Content management system</li>
          <li>E-commerce integration</li>
          <li>Full deployment & hosting</li>
        </ul>
        <div style="margin-top: 16px;">
          <span class="tech-badge">React</span>
          <span class="tech-badge">Next.js</span>
          <span class="tech-badge">Node.js</span>
        </div>
      </div>

      <div class="service-card">
        <h3>Digital Menu Solutions</h3>
        <p>Interactive digital menus for restaurants and cafés with real-time updates.</p>
        <ul class="feature-list">
          <li>QR code generation</li>
          <li>Real-time menu updates</li>
          <li>Multi-language support</li>
          <li>Image galleries</li>
          <li>Order management</li>
          <li>Analytics dashboard</li>
        </ul>
        <div style="margin-top: 16px;">
          <span class="tech-badge">React</span>
          <span class="tech-badge">Firebase</span>
          <span class="tech-badge">Stripe</span>
        </div>
      </div>

      <div class="service-card">
        <h3>CRM Systems</h3>
        <p>Custom CRM solutions to manage customer relationships effectively.</p>
        <ul class="feature-list">
          <li>Customer database</li>
          <li>Sales pipeline tracking</li>
          <li>Email automation</li>
          <li>Reporting & analytics</li>
          <li>Task management</li>
          <li>Mobile access</li>
        </ul>
        <div style="margin-top: 16px;">
          <span class="tech-badge">React</span>
          <span class="tech-badge">PostgreSQL</span>
          <span class="tech-badge">Node.js</span>
        </div>
      </div>

      <div class="service-card">
        <h3>Custom Software</h3>
        <p>Bespoke software solutions tailored to your unique business needs.</p>
        <ul class="feature-list">
          <li>Requirements analysis</li>
          <li>Custom development</li>
          <li>API integration</li>
          <li>Third-party integrations</li>
          <li>Ongoing support</li>
          <li>Scalable architecture</li>
        </ul>
        <div style="margin-top: 16px;">
          <span class="tech-badge">React</span>
          <span class="tech-badge">Python</span>
          <span class="tech-badge">AWS</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Our Development Process</h2>
    <div class="process-steps">
      <div class="step">
        <div class="step-number">01</div>
        <h3>Discovery</h3>
        <p>Understanding your business needs and goals</p>
      </div>
      <div class="step">
        <div class="step-number">02</div>
        <h3>Design</h3>
        <p>Creating wireframes and visual designs</p>
      </div>
      <div class="step">
        <div class="step-number">03</div>
        <h3>Development</h3>
        <p>Building with modern technologies</p>
      </div>
      <div class="step">
        <div class="step-number">04</div>
        <h3>Deployment</h3>
        <p>Launching and maintaining your solution</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Pricing & Timeline</h2>
    <div class="pricing-table">
      <div class="pricing-row">
        <span class="pricing-label">Basic Website (5 pages)</span>
        <span class="pricing-value">₹25,000 - ₹50,000 | 2-3 weeks</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">E-Commerce Website</span>
        <span class="pricing-value">₹75,000 - ₹1,50,000 | 4-6 weeks</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">Digital Menu Solution</span>
        <span class="pricing-value">₹30,000 - ₹60,000 | 2-3 weeks</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">CRM System</span>
        <span class="pricing-value">₹1,00,000 - ₹3,00,000 | 6-8 weeks</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">Custom Software</span>
        <span class="pricing-value">Custom Quote | 8-12 weeks</span>
      </div>
    </div>
    <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
      *Pricing varies based on project complexity and requirements. All packages include deployment and 30 days of free support.
    </p>
  </div>

  <div class="section">
    <h2>Why Choose Us?</h2>
    <div class="service-grid">
      <div class="service-card">
        <h3>Startup Agility</h3>
        <p>Fast turnaround times and flexible approach to meet your evolving needs. We adapt quickly to changes and deliver on time.</p>
      </div>
      <div class="service-card">
        <h3>End-to-End Deployment</h3>
        <p>We handle everything from development to deployment and maintenance. Your success is our priority.</p>
      </div>
      <div class="service-card">
        <h3>Nashik-Based Support</h3>
        <p>Local team providing personalized service and on-ground support. We're always just a call away.</p>
      </div>
      <div class="service-card">
        <h3>Modern Tech Stack</h3>
        <p>We use cutting-edge technologies to build scalable, performant, and future-proof solutions.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Our Founding Team</h2>
    <div class="founders">
      <div class="founder-card">
        <div class="founder-name">Aniket Rane</div>
        <div class="founder-role">Co-Founder & Tech Lead</div>
        <p>Full-stack developer with expertise in modern web technologies and cloud architecture.</p>
      </div>
      <div class="founder-card">
        <div class="founder-name">Rushi Pagar</div>
        <div class="founder-role">Co-Founder & Design Lead</div>
        <p>UI/UX specialist focused on creating intuitive and beautiful digital experiences.</p>
      </div>
      <div class="founder-card">
        <div class="founder-name">Dev Pawar</div>
        <div class="founder-role">Co-Founder & Business Lead</div>
        <p>Strategic thinker driving business growth and client success initiatives.</p>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <h2>Ready to Get Started?</h2>
    <p style="font-size: 18px; margin-bottom: 30px; opacity: 0.95;">
      Let's discuss your project and create something amazing together. 
      Get a free consultation and detailed proposal.
    </p>
    <div class="contact-info">
      <div class="contact-item">📧 info@nashikwebdev.com</div>
      <div class="contact-item">📱 +91 98765 43210</div>
      <div class="contact-item">📍 Nashik, Maharashtra, India</div>
      <div class="contact-item">⏰ Mon-Sat: 9:00 AM - 6:00 PM</div>
    </div>
  </div>

  <div style="margin-top: 60px; text-align: center; color: #6b7280; font-size: 14px;">
    <p>© ${new Date().getFullYear()} Nashik Website Development. All rights reserved.</p>
    <p style="margin-top: 8px;">Founded by Aniket Rane, Rushi Pagar, and Dev Pawar</p>
  </div>
</body>
</html>`;
}
