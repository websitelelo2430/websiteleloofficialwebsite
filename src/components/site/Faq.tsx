import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "How long does a website project take?", a: "Most projects launch in 2–4 weeks depending on scope, content readiness and review cycles. You'll get a clear timeline before kickoff." },
  { q: "What information do you need before starting?", a: "Brand assets, content, references and a short brief on your goals. We provide a structured intake form to make this simple." },
  { q: "Do you provide hosting assistance?", a: "Yes. We guide you on the best hosting setup for your project and help with deployment, domain and SSL." },
  { q: "Will my website work on mobile devices?", a: "Every website we build is mobile-first and tested across real devices for performance and usability." },
  { q: "Can I request revisions during the project?", a: "Yes. Structured review rounds are built into the process so feedback is organized and changes stay on track." },
  { q: "What happens after the website is delivered?", a: "We provide a smooth handover, documentation and post-launch support to make sure everything runs reliably." },
  { q: "Do you take over unfinished projects?", a: "No. We focus on complete website projects from planning to launch. This ensures quality, consistency and a smooth experience for every client." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Common <span className="gradient-text">Questions</span></>}
          subtitle="Quick answers to what most clients ask before getting started."
        />

        <div className="mt-14 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface/30">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-display text-base font-medium md:text-lg">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-transform ${isOpen ? "rotate-45 bg-accent text-background border-accent" : ""}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground md:text-base">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
