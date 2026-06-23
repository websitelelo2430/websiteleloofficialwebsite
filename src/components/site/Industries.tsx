import { motion } from "framer-motion";
import { Gem, UtensilsCrossed, Stethoscope, GraduationCap, Building, Briefcase, Rocket, Store } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { t: "Jewellery Stores", d: "Showcase collections beautifully and win customer trust.", Icon: Gem, color: "from-amber-400 to-rose-500" },
  { t: "Restaurants & Cafes", d: "Display menus, locations and attract hungry customers.", Icon: UtensilsCrossed, color: "from-orange-400 to-red-500" },
  { t: "Clinics & Healthcare", d: "Build credibility and make appointments simple.", Icon: Stethoscope, color: "from-emerald-400 to-teal-500" },
  { t: "Coaching Institutes", d: "Show courses, faculty and student achievements.", Icon: GraduationCap, color: "from-blue-400 to-indigo-500" },
  { t: "Real Estate", d: "Present properties with stunning visuals and clear details.", Icon: Building, color: "from-cyan-400 to-blue-500" },
  { t: "Consultants", d: "A professional online presence that wins client trust.", Icon: Briefcase, color: "from-violet-400 to-purple-500" },
  { t: "Startups", d: "Launch fast with a website that looks funded and serious.", Icon: Rocket, color: "from-pink-400 to-rose-500" },
  { t: "Local Businesses", d: "Be found online and get more enquiries every week.", Icon: Store, color: "from-fuchsia-400 to-accent-2" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={<>Websites Built For <span className="gradient-text">Your Business</span></>}
          subtitle="From small shops to growing brands — we design websites that fit your industry and your customers."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />
              <div className="relative">
                <span className={`inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-soft`}>
                  <s.Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-base font-semibold md:text-lg">{s.t}</div>
                <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
