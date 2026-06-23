import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Difference } from "@/components/site/Difference";
import { Process } from "@/components/site/Process";
import { WhatYouGet } from "@/components/site/WhatYouGet";
import { Work } from "@/components/site/Work";
import { Pricing } from "@/components/site/Pricing";
import { WhyMatters } from "@/components/site/WhyMatters";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Industries />
      <Difference />
      <Process />
      <WhatYouGet />
      <Work />
      <Pricing />
      <WhyMatters />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
