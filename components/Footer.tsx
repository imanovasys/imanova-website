import Link from "next/link";
import { siteConfig, solutionsLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Imanova Logo"
                className="h-8 w-auto grayscale brightness-50"
                src={siteConfig.logoUrl}
              />
              <span className="font-display text-2xl font-bold text-on-surface">
                {siteConfig.legalName}
              </span>
            </Link>
            <p className="font-body text-on-surface-variant max-w-sm leading-relaxed">
              Global health engineering for African resilience. Headquartered
              in {siteConfig.location}, bridging the gap between policy and
              technology.
            </p>
            <div className="flex gap-5">
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                href="/contact-us/"
                aria-label="Contact"
              >
                <span className="material-symbols-outlined text-lg">
                  alternate_email
                </span>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-label text-[11px] uppercase font-bold tracking-[0.2em] text-on-surface">
              Our Solutions
            </p>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              {solutionsLinks.map((item) => (
                <li key={item}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/our-services/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <p className="font-label text-[11px] uppercase font-bold tracking-[0.2em] text-on-surface">
              Company
            </p>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/about-us/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/our-approach/">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/resources/">
                  Resources
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact-us/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[11px] text-on-surface-variant/70 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} {siteConfig.legalName}. Precise.
            Resilient. Authoritative.
          </p>
          <div className="flex gap-10">
            <a
              className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors font-bold"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors font-bold"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
