import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Palette, Code2, Eye, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "1", t: "Discussion", d: "Tell us about your business.", Icon: MessageSquare },
  { n: "2", t: "Planning", d: "We map out your website structure.", Icon: ClipboardList },
  { n: "3", t: "Design", d: "Beautiful designs in your brand style.", Icon: Palette },
  { n: "4", t: "Development", d: "We build it fast and clean.", Icon: Code2 },
  { n: "5", t: "Review", d: "You check it — we refine it.", Icon: Eye },
  { n: "6", t: "Launch", d: "Your website goes live.", Icon: Rocket },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Process"
          title={<>A Simple, <span className="gradient-text">Stress-Free</span> Process</>}
          subtitle="Six easy steps from your first message to a website that's live."
        />

        <div className="relative mt-12">
          {/* Animated progress line — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px md:block">
            <div className="h-full w-full bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-0 h-px bg-gradient-to-r from-accent to-accent-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white shadow-glow ring-4 ring-background">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Step {s.n}
                </div>
                <div className="mt-1 font-display text-sm font-semibold md:text-base">{s.t}</div>
                <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
