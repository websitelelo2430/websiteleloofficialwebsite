import { motion } from "framer-motion";
import { Smartphone, Zap, Sparkles, MousePointerClick, LayoutDashboard, MessageCircle, ClipboardList, Search } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { Icon: Smartphone, t: "Mobile Friendly Design", d: "Looks perfect on every phone and tablet." },
  { Icon: Zap, t: "Fast Loading Pages", d: "Quick to open — visitors never wait." },
  { Icon: Sparkles, t: "Professional Look", d: "A polished design that builds instant trust." },
  { Icon: MousePointerClick, t: "Easy Navigation", d: "Customers find what they need in seconds." },
  { Icon: LayoutDashboard, t: "Business-Focused Structure", d: "Built around your goals — not templates." },
  { Icon: MessageCircle, t: "WhatsApp Integration", d: "Customers can chat with you in one tap." },
  { Icon: ClipboardList, t: "Contact Forms", d: "Capture leads and enquiries automatically." },
  { Icon: Search, t: "SEO Ready Foundation", d: "Built so Google can find your business." },
];

export function WhatYouGet() {
  return (
    <section className="relative bg-surface/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What's Included"
          title={<>What You Get With <span className="gradient-text">Every Website</span></>}
          subtitle="Every website we build comes with everything a serious business needs to grow online."
        />

        <div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/10 to-accent-2/10 text-accent transition-all group-hover:from-accent group-hover:to-accent-2 group-hover:text-white">
                <s.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
