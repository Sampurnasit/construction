import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsGallery from "@/components/ProjectsGallery";
import Credentials from "@/components/Credentials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
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

        {/* 5. Why Choose Us (6 Points on Rich Dark Maroon & Red) */}
        <WhyChooseUs />

        {/* 6. Projects & Execution Gallery with Interactive Lightbox */}
        <ProjectsGallery />

        {/* 7. Official Credentials & Verifiable GST Certificate */}
        <Credentials />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Contact Section with Validated Form & Google Map */}
        <ContactSection />

        {/* 10. Client & Government Endorsements Testimonials */}
        <Testimonials />
      </main>

      {/* 11. Red-Orange-Yellow Styled Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Instant Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
