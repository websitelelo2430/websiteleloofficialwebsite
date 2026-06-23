import { motion } from "framer-motion";
import { Briefcase, Building2, ShoppingBag, GalleryHorizontal, Sparkles, Wrench, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { Icon: Briefcase, t: "Business Websites", d: "Professional websites designed to build trust and generate enquiries." },
  { Icon: Building2, t: "Company Websites", d: "Scalable websites for established businesses and growing brands." },
  { Icon: ShoppingBag, t: "E-Commerce Websites", d: "Modern online stores designed for seamless shopping experiences." },
  { Icon: GalleryHorizontal, t: "Portfolio Websites", d: "Beautiful websites that showcase products, services or expertise." },
  { Icon: Sparkles, t: "Industry-Specific Websites", d: "Tailored for jewellery, restaurants, consultants, clinics and local businesses." },
  { Icon: Wrench, t: "Custom Web Solutions", d: "Advanced website experiences built around unique business requirements." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>What <span className="gradient-text">We Build</span></>}
          subtitle="From a single landing page to a full e-commerce ecosystem — every project gets the same craft."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-7 transition-all hover:border-border-strong hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
              <div className="relative">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-accent transition-colors group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-2 group-hover:text-background">
                  <s.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
