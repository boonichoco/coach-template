import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Results from "@/components/Results";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Results />
      <Offers />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
