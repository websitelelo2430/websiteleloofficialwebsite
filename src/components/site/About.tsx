import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

const checks = [
  "Simple, easy-to-understand process",
  "Designs made for your business and customers",
  "Friendly support — talk to a real human",
  "Built to look great on phones first",
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Website Lelo
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              We Make Websites <span className="gradient-text">Simple</span> For Business Owners
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Getting a website shouldn't feel confusing or technical. At Website Lelo, we keep things clear, friendly and focused on what actually helps your business grow.
            </p>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              No jargon. No surprises. Just a beautiful, professional website built for the way your customers find you today.
            </p>

            <ul className="mt-6 space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-accent-2/25 blur-3xl animate-float-slow" style={{ animationDelay: "-6s" }} />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img
                  src={aboutVisual}
                  alt="Business owner happily growing online with their new website"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 top-8 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-soft border border-border"
              >
                <span className="text-base">⭐</span> 5-Star Reviews
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-3 bottom-10 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-soft border border-border"
              >
                <span className="text-base">📱</span> Mobile Ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
