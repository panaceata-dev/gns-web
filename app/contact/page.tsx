import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
