import { motion } from "framer-motion";
import { Check, Star, ArrowUpRight, Sparkles, Shield, MessageSquare, Clock, MapPin, Phone, BarChart3, LayoutTemplate, PenTool, Settings, Zap, Calendar, HeadphonesIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BRAND } from "./brand";
import { useCurrency } from "@/hooks/use-currency";

type Package = {
  name: string;
  priceInr: number;
  priceNote?: string;
  badge?: string;
  description: string;
  features: { icon: React.ElementType; text: string }[];
  timeline: string;
  bestFor: string;
  highlighted?: boolean;
};

const packages: Package[] = [
  {
    name: "Starter Website",
    priceInr: 11999,
    description: "Professional websites for small businesses looking to establish a credible online presence.",
    features: [
      { icon: LayoutTemplate, text: "Up to 5 Pages" },
      { icon: Phone, text: "Mobile Responsive Design" },
      { icon: MessageSquare, text: "Contact Form" },
      { icon: MessageSquare, text: "WhatsApp Integration" },
      { icon: MapPin, text: "Google Maps Integration" },
      { icon: Settings, text: "Basic SEO Setup" },
      { icon: Sparkles, text: "Social Media Links" },
      { icon: Zap, text: "Performance Optimization" },
      { icon: HeadphonesIcon, text: "30 Days Support After Delivery" },
    ],
    timeline: "10–14 Business Days",
    bestFor: "Local Businesses, Consultants, Restaurants, Service Providers",
  },
  {
    name: "Business Website",
    priceInr: 19999,
    badge: "Most Popular",
    highlighted: true,
    description: "A complete business website designed to build trust, attract enquiries and showcase your services professionally.",
    features: [
      { icon: LayoutTemplate, text: "Up to 10 Pages" },
      { icon: PenTool, text: "Premium Custom Design" },
      { icon: Sparkles, text: "Gallery / Portfolio Section" },
      { icon: Star, text: "Testimonials Section" },
      { icon: LayoutTemplate, text: "Blog Setup" },
      { icon: MessageSquare, text: "Advanced Contact Forms" },
      { icon: BarChart3, text: "Lead Generation Focus" },
      { icon: Settings, text: "Enhanced SEO Structure" },
      { icon: BarChart3, text: "Analytics Integration" },
      { icon: HeadphonesIcon, text: "60 Days Support After Delivery" },
    ],
    timeline: "2–4 Weeks",
    bestFor: "Jewellery Brands, Clinics, Educational Institutes, Real Estate, Growing Businesses",
  },
  {
    name: "Custom Solution",
    priceInr: 39999,
    priceNote: "Starting From",
    description: "For businesses requiring advanced functionality, custom integrations, booking systems, online stores or unique website experiences.",
    features: [
      { icon: LayoutTemplate, text: "Unlimited Pages" },
      { icon: PenTool, text: "Fully Custom UI/UX" },
      { icon: Zap, text: "Advanced Animations" },
      { icon: Settings, text: "Custom Features & Integrations" },
      { icon: Calendar, text: "Appointment Booking Systems" },
      { icon: BarChart3, text: "Advanced Lead Capture" },
      { icon: Shield, text: "Strategy Consultation" },
      { icon: Sparkles, text: "Scalability Planning" },
      { icon: HeadphonesIcon, text: "Priority Support" },
    ],
    timeline: "4–8 Weeks Depending On Requirements",
    bestFor: "Established Businesses, Premium Brands, Online Stores, Businesses With Custom Requirements",
  },
];

const trustItems = [
  "No Hidden Charges",
  "Clear Communication",
  "Transparent Timelines",
  "Professional Delivery",
  "Business-Focused Approach",
];

export function Pricing() {
  const currency = useCurrency();
  return (
    <section id="pricing" className="relative py-16 md:py-20">
      {/* Subtle background glow behind the popular card */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Choose The Right Website For <span className="gradient-text">Your Business</span></>}
          subtitle="Whether you're a local business, growing brand, or established company, we offer website solutions tailored to your goals and budget."
        />

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${
                pkg.highlighted
                  ? "border-accent/40 bg-card shadow-glow hover:-translate-y-2"
                  : "border-border bg-card/70 hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-2 to-accent-soft" />
              )}

              <div className="flex flex-1 flex-col p-6 md:p-8">
                {/* Badge */}
                {pkg.badge && (
                  <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    <Star className="h-3 w-3 fill-white" />
                    {pkg.badge}
                  </div>
                )}

                {/* Package name */}
                <h3 className="font-display text-xl font-semibold md:text-2xl">{pkg.name}</h3>

                {/* Price */}
                <div className="mt-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {pkg.priceNote ?? "Starting at"}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span
                      className={`font-display font-bold tracking-tight leading-none text-5xl md:text-6xl ${
                        pkg.highlighted ? "gradient-text" : "text-foreground"
                      }`}
                      style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}
                    >
                      {currency.format(pkg.priceInr)}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">/ one-time</span>
                  </div>
                  {currency.isLocal && (
                    <div className="mt-1.5 text-[11px] text-muted-foreground">
                      Prices shown in your local currency
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-border" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${pkg.highlighted ? "bg-accent text-white" : "bg-accent/10 text-accent"}`}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    Timeline
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground">{pkg.timeline}</p>
                </div>

                {/* Best for */}
                <div className="mt-3 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/70">Best for:</span> {pkg.bestFor}
                </div>

                {/* CTA */}
                <a
                  href={BRAND.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-accent to-accent-2 text-white shadow-glow"
                      : "border border-border bg-surface/60 text-foreground hover:border-border-strong"
                  }`}
                >
                  Book Consultation <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 md:mt-14"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 text-accent" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-border bg-surface/40 p-8 text-center md:p-12"
        >
          <h3 className="font-display text-xl font-semibold md:text-2xl">
            Not Sure Which Package Fits Your Business?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Let's discuss your requirements and recommend the best solution for your goals and budget.
          </p>
          <a
            href={BRAND.consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            Book Consultation <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
