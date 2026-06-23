import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Gem, UtensilsCrossed, Stethoscope, Briefcase } from "lucide-react";
import { BRAND } from "./brand";
import heroVisual from "@/assets/hero-visual.jpg";

const stats = [
  { k: "Happy", v: "Business Owners" },
  { k: "Fast", v: "Project Delivery" },
  { k: "100%", v: "Mobile Friendly" },
  { k: "24/7", v: "Online Presence" },
];

const floatingCards = [
  { Icon: Gem, label: "Jewellery", color: "from-amber-400 to-rose-500", pos: "top-2 -left-2 md:top-4 md:-left-6", delay: 0 },
  { Icon: UtensilsCrossed, label: "Restaurant", color: "from-orange-400 to-red-500", pos: "top-10 -right-2 md:top-14 md:-right-6", delay: 0.4 },
  { Icon: Stethoscope, label: "Clinic", color: "from-emerald-400 to-teal-500", pos: "bottom-10 -left-3 md:bottom-14 md:-left-8", delay: 0.8 },
  { Icon: Briefcase, label: "Business", color: "from-accent to-accent-2", pos: "bottom-2 -right-3 md:bottom-4 md:-right-6", delay: 1.2 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 75%)",
          }}
        />
        <div className="absolute left-1/4 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[-8%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent-2/30 blur-[140px] animate-float-slow" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Professional Websites For Serious Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              Beautiful Websites <br className="hidden md:block" /> Built For{" "}
              <span className="gradient-text">Real Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg md:mx-0 mx-auto"
            >
              We design and build modern websites for jewellery shops, restaurants, clinics, coaching institutes and local businesses — simple, professional, and made to bring you more customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start justify-center"
            >
              <a
                href={BRAND.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                {BRAND.ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* Right: real visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent-2/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={heroVisual}
                alt="Modern websites for businesses shown on laptop and mobile"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating industry chips */}
            {floatingCards.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 + c.delay },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: c.delay },
                }}
                className={`absolute ${c.pos} flex items-center gap-2 rounded-full glass-strong px-3 py-2 shadow-soft`}
              >
                <span className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${c.color} text-white`}>
                  <c.Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium">{c.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:mt-16 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.v} className="bg-background/40 px-6 py-5 text-center">
              <div className="font-display text-2xl font-semibold tracking-tight md:text-3xl gradient-text">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
