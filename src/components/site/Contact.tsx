import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { BRAND } from "./brand";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  business: z.string().trim().min(1, "Business required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Invalid phone").max(20),
  details: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please review the form");
      setStatus("err");
      return;
    }
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/public/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !(data as any).ok) {
        throw new Error((data as any)?.error || "Send failed");
      }
      setStatus("ok");
      form.reset();
    } catch (e: any) {
      setStatus("err");
      setErr(
        (e?.message ? e.message + " — " : "") +
          "You can also email us directly at " +
          BRAND.email
      );
    }
  };

  return (
    <section id="contact" className="relative bg-surface/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's Build Something <span className="gradient-text">Great</span></>}
          subtitle="Share a few details about your business and project. We'll reach out within one business day."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="gradient-border rounded-2xl p-6">
              <img src={BRAND.logoUrl} alt="Website Lelo" className="h-10 w-auto object-contain" />
              <div className="mt-5 text-xs uppercase tracking-widest text-accent">Direct contact</div>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5"><Mail className="h-4 w-4 text-accent" /></span>
                  <a href={BRAND.mailto} className="hover:text-accent">{BRAND.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5"><Clock className="h-4 w-4 text-accent" /></span>
                  <span className="text-muted-foreground">Replies within 1 business day</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5"><MapPin className="h-4 w-4 text-accent" /></span>
                  <span className="text-muted-foreground">Available across India · Remote first</span>
                </li>
              </ul>
              <a
                href={BRAND.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white"
              >
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <div className="font-display text-lg font-semibold">Response promise</div>
              <p className="mt-2 text-sm text-muted-foreground">Every enquiry gets a personal reply within one business day — no auto-responders, no chatbots.</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="md:col-span-3 rounded-3xl border border-border bg-surface/40 p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Business Name" name="business" placeholder="Company / brand" />
              <Field label="Email" name="email" type="email" placeholder="you@business.com" />
              <Field label="Phone" name="phone" placeholder="+91 ..." />
            </div>
            <div className="mt-4">
              <label className="text-xs text-muted-foreground">Project Details</label>
              <textarea
                name="details"
                rows={5}
                placeholder="Tell us about your business, goals and timeline."
                className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            {status === "err" && <p className="mt-4 text-xs text-destructive">{err}</p>}
            {status === "ok" && <p className="mt-4 text-xs text-accent">Thank you! Your enquiry has been delivered — we'll reply within 1 business day.</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "loading" ? "Sending…" : "Send Enquiry"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Prefer email? Write to{" "}
              <a href={BRAND.mailto} className="text-accent hover:underline">{BRAND.email}</a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
