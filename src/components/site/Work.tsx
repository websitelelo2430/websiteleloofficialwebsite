import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import kcShot from "@/assets/kc-jewellers.png";
import beeraShot from "@/assets/beera-jewellers.png";

type Project = {
  name: string;
  industry: string;
  description: string;
  url?: string;
  image?: string;
  gradient?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    name: "K C Jewellers",
    industry: "Luxury Jewellery",
    description: "An elegant showcase for designer gold, diamond and polki collections.",
    url: "https://kc-jewellers.vercel.app/",
    image: kcShot,
  },
  {
    name: "Beera Jewellers",
    industry: "Heritage Atelier",
    description: "A premium website for antique gold jewellery, crafted with royal traditions.",
    url: "https://beera-jewellers.vercel.app/",
    image: beeraShot,
  },
  {
    name: "Your Business",
    industry: "Coming Soon",
    description: "Your project could be next. Let's build a website your customers will love.",
    gradient: "from-accent/30 via-accent-2/30 to-accent-soft/30",
    comingSoon: true,
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title={<>Real Websites For <span className="gradient-text">Real Businesses</span></>}
          subtitle="Click any project to see the live website we designed and built."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1.5 hover:border-border-strong hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.name} website preview`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${p.gradient}`}>
                      <div className="grid h-full place-items-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-soft">
                          <Clock className="h-4 w-4 text-accent" />
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  )}
                  {p.image && (
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  )}
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-medium uppercase tracking-widest text-accent">{p.industry}</div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  {p.comingSoon ? (
                    <button
                      disabled
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted-foreground"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform group-hover:scale-[1.02]">
                      View Live Demo <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </motion.div>
            );

            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${p.name} live demo`}>
                {card}
              </a>
            ) : (
              <div key={p.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
