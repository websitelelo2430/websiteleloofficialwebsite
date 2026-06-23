import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BRAND } from "./brand";

const services = [
  { emoji: "💍", t: "Jewellery Websites", d: "Showcase collections beautifully and build customer trust.", color: "from-amber-400 to-rose-500" },
  { emoji: "🍽️", t: "Restaurant Websites", d: "Display menus, locations and attract more customers.", color: "from-orange-400 to-red-500" },
  { emoji: "🏥", t: "Clinic Websites", d: "Build credibility and make appointments simple.", color: "from-emerald-400 to-teal-500" },
  { emoji: "🎓", t: "Coaching Websites", d: "Show courses, achievements and student information.", color: "from-blue-400 to-indigo-500" },
  { emoji: "🏢", t: "Business Websites", d: "Professional online presence for any kind of business.", color: "from-violet-400 to-purple-500" },
  { emoji: "🛒", t: "E-Commerce Stores", d: "Sell your products online easily and grow nationwide.", color: "from-pink-400 to-fuchsia-500" },
];

export function Difference() {
  return (
    <section id="why-us" className="relative bg-surface/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Website Lelo"
          title={<>Who Do We Build <span className="gradient-text">Websites For?</span></>}
          subtitle="We focus on the businesses we know best — and design websites that actually work for them."
        />

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
            >
              <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${s.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25`} />
              <div className="relative">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{s.emoji}</span>
                  <h3 className="font-display text-lg font-semibold md:text-xl">{s.t}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                <a
                  href={BRAND.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-2"
                >
                  Get a quote <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={BRAND.consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            {BRAND.ctaLabel} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
