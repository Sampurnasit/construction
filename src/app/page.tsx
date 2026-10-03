import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectsGallery from "@/components/ProjectsGallery";
import Credentials from "@/components/Credentials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with Founder Portrait & Animated Counters */}
        <Hero />

        {/* 3. About Us with Founder Statement, Mission & Vision */}
        <AboutUs />

        {/* 4. Core Services (4 Elegant Cards with Hover Lift) */}
        <Services />

        {/* 5. Why Choose Us (6 Gold Points on Rich Emerald Green) */}
        <WhyChooseUs />

        {/* 6. Systematic 5-Step Process Timeline */}
        <ProcessTimeline />

        {/* 7. Projects & Execution Gallery with Interactive Lightbox */}
        <ProjectsGallery />

        {/* 8. Official Credentials & Verifiable GST Certificate */}
        <Credentials />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Contact Section with Validated Form & Google Map */}
        <ContactSection />
      </main>

      {/* 11. Luxury Corporate Dark Green Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Instant Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
