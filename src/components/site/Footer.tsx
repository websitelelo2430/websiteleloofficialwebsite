import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { BRAND } from "./brand";

export function Footer() {
  return (
    <footer className="site-footer relative border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <a href="#top" className="inline-flex items-center">
            <img src={BRAND.logoUrl} alt="Website Lelo" className="h-12 w-auto object-contain" />
          </a>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Professional websites for serious businesses. Designed, built and delivered end-to-end.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-accent">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <Col title="Services" links={["Business Websites", "Company Websites", "E-Commerce", "Portfolio", "Industry-Specific", "Custom Solutions"]} />
        <Col title="Company" links={[["Portfolio", "#work"], ["Process", "#process"], ["About", "#about"], ["FAQ", "#faq"], ["Contact", "#contact"]] as any} />

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Get in touch</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-accent" />
              <a href={BRAND.mailto} className="hover:text-foreground">{BRAND.email}</a>
            </li>
            <li>
              <a
                href={BRAND.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Website Lelo. All rights reserved.</div>
          <div>Crafted with care — Aapka Business, Online.</div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: (string | [string, string])[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l, i) => {
          const [label, href] = Array.isArray(l) ? l : [l, "#"];
          return (
            <li key={i}>
              <a href={href} className="text-muted-foreground transition-colors hover:text-foreground">{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
