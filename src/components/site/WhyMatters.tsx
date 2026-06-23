import { motion } from "framer-motion";
import { ShieldCheck, Search, Clock, Award, GalleryHorizontal, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { Icon: ShieldCheck, t: "Customers Trust Businesses With Websites", d: "A real website tells people you're serious and reliable.", color: "from-emerald-400 to-teal-500" },
  { Icon: Search, t: "People Search Online First", d: "Before calling, customers check you on Google.", color: "from-blue-400 to-indigo-500" },
  { Icon: Clock, t: "Available 24×7", d: "Your website works for you while you sleep.", color: "from-amber-400 to-orange-500" },
  { Icon: Award, t: "Builds A Professional Image", d: "Look like the leader in your category.", color: "from-violet-400 to-purple-500" },
  { Icon: GalleryHorizontal, t: "Showcase Products & Services", d: "Show your best work in one beautiful place.", color: "from-pink-400 to-rose-500" },
  { Icon: TrendingUp, t: "Get More Enquiries", d: "Turn visitors into real customers every day.", color: "from-cyan-400 to-blue-500" },
];

export function WhyMatters() {
  return (
    <section className="relative bg-surface/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Impact"
          title={<>Why Your Business <span className="gradient-text">Needs A Website</span></>}
          subtitle="Today, having a website isn't optional — it's how customers decide to trust you."
        />

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
            >
              <span className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-soft`}>
                <s.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
