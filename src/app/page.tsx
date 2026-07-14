import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";
import { AlternatingFeatures } from "@/components/sections/alternating-features";
import { Benefits } from "@/components/sections/benefits";
import { Operation } from "@/components/sections/operation";
import { Carousel } from "@/components/sections/carousel";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Showcase />
      <AlternatingFeatures />
      <Benefits />
      <Operation />
      <Carousel />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
