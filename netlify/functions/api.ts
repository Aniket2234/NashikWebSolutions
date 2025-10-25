import express from "express";
import serverless from "serverless-http";
import { storage } from "../../server/storage";
import { insertContactInquirySchema } from "../../shared/schema";
import PDFDocument from "pdfkit";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  try {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Nashik-Web-Dev-Services.pdf"');
    
    doc.pipe(res);

    const primaryColor = '#3b82f6';
    const accentColor = '#10b981';
    const textColor = '#1a1a1a';
    const lightGray = '#6b7280';

    doc.fontSize(32).fillColor(primaryColor).text('Nashik Website Development', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).fillColor(lightGray).text('Premium Digital Solutions for Modern Businesses', { align: 'center' });
    doc.moveDown(2);

    doc.fontSize(24).fillColor(textColor).text('Comprehensive Service Guide');
    doc.moveDown(0.5);
    doc.fontSize(12).fillColor(lightGray).text(
      'Transform your business with cutting-edge web technologies. We specialize in custom websites, digital menu solutions, CRM systems, and bespoke software - all with full deployment support.',
      { align: 'justify' }
    );
    doc.moveDown(2);

    doc.fontSize(20).fillColor(primaryColor).text('Our Services');
    doc.moveDown(1);

    const services = [
      {
        title: 'Website Development',
        description: 'Modern, responsive, and SEO-optimized websites that drive results.',
        features: ['Custom responsive design', 'SEO optimization', 'Performance optimization', 'Content management system', 'E-commerce integration', 'Full deployment & hosting'],
        tech: ['React', 'Next.js', 'Node.js']
      },
      {
        title: 'Digital Menu Solutions',
        description: 'Interactive digital menus for restaurants and cafés with real-time updates.',
        features: ['QR code generation', 'Real-time menu updates', 'Multi-language support', 'Image galleries', 'Order management', 'Analytics dashboard'],
        tech: ['React', 'Firebase', 'Stripe']
      },
      {
        title: 'CRM Systems',
        description: 'Custom CRM solutions to manage customer relationships effectively.',
        features: ['Customer database', 'Sales pipeline tracking', 'Email automation', 'Reporting & analytics', 'Task management', 'Mobile access'],
        tech: ['React', 'PostgreSQL', 'Node.js']
      },
      {
        title: 'Custom Software',
        description: 'Bespoke software solutions tailored to your unique business needs.',
        features: ['Requirements analysis', 'Custom development', 'API integration', 'Third-party integrations', 'Ongoing support', 'Scalable architecture'],
        tech: ['React', 'Python', 'AWS']
      }
    ];

    services.forEach((service) => {
      if (doc.y > 650) {
        doc.addPage();
      }
      
      doc.fontSize(16).fillColor(primaryColor).text(service.title);
      doc.fontSize(11).fillColor(textColor).text(service.description);
      doc.moveDown(0.5);
      
      service.features.forEach(feature => {
        doc.fontSize(10).fillColor(lightGray).text(`• ${feature}`, { indent: 20 });
      });
      
      doc.moveDown(0.3);
      doc.fontSize(9).fillColor(primaryColor).text(`Tech Stack: ${service.tech.join(', ')}`, { indent: 20 });
      doc.moveDown(1.5);
    });

    doc.addPage();
    doc.fontSize(20).fillColor(primaryColor).text('Our Development Process');
    doc.moveDown(1);

    const process = [
      { step: '1. Discovery', desc: 'Understanding your business needs and goals' },
      { step: '2. Design', desc: 'Creating wireframes and visual designs' },
      { step: '3. Development', desc: 'Building with modern technologies' },
      { step: '4. Deployment', desc: 'Launching and maintaining your solution' }
    ];

    process.forEach(item => {
      doc.fontSize(14).fillColor(textColor).text(item.step);
      doc.fontSize(11).fillColor(lightGray).text(item.desc, { indent: 20 });
      doc.moveDown(1);
    });

    doc.moveDown(1);
    doc.fontSize(20).fillColor(primaryColor).text('Pricing & Timeline');
    doc.moveDown(1);

    const pricing = [
      { service: 'Basic Website (5 pages)', price: '₹25,000 - ₹50,000', timeline: '2-3 weeks' },
      { service: 'E-Commerce Website', price: '₹75,000 - ₹1,50,000', timeline: '4-6 weeks' },
      { service: 'Digital Menu Solution', price: '₹30,000 - ₹60,000', timeline: '2-3 weeks' },
      { service: 'CRM System', price: '₹1,00,000 - ₹3,00,000', timeline: '6-8 weeks' },
      { service: 'Custom Software', price: 'Custom Quote', timeline: '8-12 weeks' }
    ];

    pricing.forEach(item => {
      doc.fontSize(12).fillColor(textColor).text(item.service);
      doc.fontSize(11).fillColor(primaryColor).text(`${item.price} | ${item.timeline}`, { indent: 20 });
      doc.moveDown(0.8);
    });

    doc.fontSize(9).fillColor(lightGray).text(
      '*Pricing varies based on project complexity. All packages include deployment and 30 days of free support.',
      { align: 'justify' }
    );

    doc.addPage();
    doc.fontSize(20).fillColor(primaryColor).text('Why Choose Us?');
    doc.moveDown(1);

    const benefits = [
      { title: 'Startup Agility', desc: 'Fast turnaround times and flexible approach to meet your evolving needs.' },
      { title: 'End-to-End Deployment', desc: 'We handle everything from development to deployment and maintenance.' },
      { title: 'Nashik-Based Support', desc: 'Local team providing personalized service and on-ground support.' },
      { title: 'Modern Tech Stack', desc: 'Cutting-edge technologies for scalable, performant solutions.' }
    ];

    benefits.forEach(benefit => {
      doc.fontSize(14).fillColor(textColor).text(benefit.title);
      doc.fontSize(11).fillColor(lightGray).text(benefit.desc, { indent: 20 });
      doc.moveDown(1);
    });

    doc.moveDown(1);
    doc.fontSize(20).fillColor(primaryColor).text('Our Founding Team');
    doc.moveDown(1);

    const founders = [
      { name: 'Aniket Rane', role: 'Co-Founder & Tech Lead', bio: 'Full-stack developer with expertise in modern web technologies and cloud architecture.' },
      { name: 'Rushi Pagar', role: 'Co-Founder & Design Lead', bio: 'UI/UX specialist focused on creating intuitive and beautiful digital experiences.' },
      { name: 'Dev Pawar', role: 'Co-Founder & Business Lead', bio: 'Strategic thinker driving business growth and client success initiatives.' },
      { name: 'Viraj', role: 'UI/UX Designer', bio: 'Creative designer focused on crafting beautiful and intuitive user experiences.' }
    ];

    founders.forEach(founder => {
      doc.fontSize(14).fillColor(textColor).text(founder.name);
      doc.fontSize(11).fillColor(primaryColor).text(founder.role, { indent: 20 });
      doc.fontSize(10).fillColor(lightGray).text(founder.bio, { indent: 20 });
      doc.moveDown(1.2);
    });

    doc.addPage();
    doc.rect(0, 0, doc.page.width, doc.page.height).fill(primaryColor);
    
    doc.fontSize(28).fillColor('white').text('Ready to Get Started?', { align: 'center' });
    doc.moveDown(1);
    doc.fontSize(14).fillColor('white').text(
      "Let's discuss your project and create something amazing together. Get a free consultation and detailed proposal.",
      { align: 'center' }
    );
    doc.moveDown(2);

    doc.fontSize(14).fillColor('white').text('📧 info@nashikwebdev.com', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).fillColor('white').text('📱 +91 98765 43210', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).fillColor('white').text('📍 Nashik, Maharashtra, India', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).fillColor('white').text('⏰ Mon-Sat: 9:00 AM - 6:00 PM', { align: 'center' });
    
    doc.moveDown(3);
    doc.fontSize(10).fillColor('white').text(
      `© ${new Date().getFullYear()} Nashik Website Development. All rights reserved.`,
      { align: 'center' }
    );
    doc.fontSize(10).fillColor('white').text(
      'Founded by Aniket Rane, Rushi Pagar, Dev Pawar, and Viraj',
      { align: 'center' }
    );

    doc.end();
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export const handler = serverless(app);
