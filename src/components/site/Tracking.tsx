import { motion } from "framer-motion";
import { CheckCircle2, Circle, Loader2, Bell, Activity } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const statuses = [
  { t: "Order Received", s: "done", time: "Day 1" },
  { t: "Requirements Approved", s: "done", time: "Day 2" },
  { t: "Design In Progress", s: "active", time: "Day 4–8" },
  { t: "Development In Progress", s: "todo", time: "Day 9–16" },
  { t: "Review Phase", s: "todo", time: "Day 17–19" },
  { t: "Delivered", s: "todo", time: "Day 20" },
];

export function Tracking() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Project Tracking"
          title={<>Always Know What's <span className="gradient-text">Happening</span></>}
          subtitle="A live, structured dashboard of your project — no chasing updates, no guessing what comes next."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="gradient-border rounded-3xl p-2 shadow-soft">
            <div className="rounded-[22px] bg-surface/80 p-5 md:p-7">
              {/* topbar */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="text-xs text-muted-foreground">project / kc-jewellers</div>
                </div>
                <div className="hidden items-center gap-3 text-xs text-muted-foreground md:flex">
                  <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-accent" /> Live</span>
                  <span className="inline-flex items-center gap-1.5"><Bell className="h-3.5 w-3.5" /> 2 updates</span>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {/* progress */}
                <div className="md:col-span-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Current phase</div>
                      <div className="font-display text-xl font-semibold">Design In Progress</div>
                    </div>
                    <div className="text-sm text-muted-foreground">40% complete</div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                    />
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {statuses.map((st) => (
                      <li
                        key={st.t}
                        className={`flex items-center justify-between rounded-xl border border-border px-4 py-3 ${
                          st.s === "active" ? "bg-gradient-to-r from-accent/10 to-accent-2/10" : "bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {st.s === "done" && <CheckCircle2 className="h-4.5 w-4.5 text-accent" />}
                          {st.s === "active" && <Loader2 className="h-4.5 w-4.5 animate-spin text-accent-2" />}
                          {st.s === "todo" && <Circle className="h-4.5 w-4.5 text-muted-foreground/60" />}
                          <span className={`text-sm ${st.s === "todo" ? "text-muted-foreground" : "text-foreground"}`}>{st.t}</span>
                        </div>
                        <span className="font-mono text-[11px] text-muted-foreground">{st.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* side card */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-white/[0.02] p-4">
                    <div className="text-xs text-muted-foreground">Next milestone</div>
                    <div className="mt-1 font-display text-lg font-semibold">Design Review</div>
                    <div className="mt-3 text-xs text-muted-foreground">Scheduled for Friday — full screens, brand applied, ready for feedback.</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/[0.02] p-4">
                    <div className="text-xs text-muted-foreground">Team</div>
                    <div className="mt-2 flex -space-x-2">
                      {["WL", "DS", "DV"].map((i, idx) => (
                        <span key={i} className="grid h-8 w-8 place-items-center rounded-full border border-background bg-gradient-to-br from-accent to-accent-2 text-[10px] font-semibold text-background" style={{ zIndex: 10 - idx }}>
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/[0.02] p-4">
                    <div className="text-xs text-muted-foreground">Communication</div>
                    <div className="mt-1 font-display text-lg font-semibold">Daily updates</div>
                    <div className="mt-3 text-xs text-muted-foreground">Direct channel with project lead — replies within hours.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
