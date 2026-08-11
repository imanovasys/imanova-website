import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: `${siteConfig.name} | Resilient Health Systems for Africa`,
    description: siteConfig.description,
    path: "/",
  }),
  // Bypass the root layout's "%s | Imanova Systems" template here — this
  // title is already the fully composed brand title, not a page segment.
  title: {
    absolute: `${siteConfig.name} | Resilient Health Systems for Africa`,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 md:px-12 py-20 max-w-7xl mx-auto min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                Sustainable Health Tech
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] tracking-tight text-on-surface">
              Co-creating sustainable,{" "}
              <span className="text-primary italic">
                resilient health systems
              </span>{" "}
              for Africa.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Improve health outcomes through scientifically rigorous,
              interoperable and user-centered digital health solutions
              designed with governments, researchers and partners.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us/"
                className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                Partner With Us
              </Link>
              <Link
                href="/our-services/"
                className="border-2 border-outline text-on-surface px-10 py-4 rounded-lg font-label text-sm font-bold hover:bg-surface-container transition-colors"
              >
                Our Solutions
              </Link>
            </div>
          </Reveal>
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden border border-outline-variant shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] bg-surface-container-lowest p-5 relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full aspect-[4/5] object-cover rounded-xl"
                alt="Collaborative technical workshop in Nairobi"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhQ5UfQIHk9HfJ-AIkOfKtHt_4aTpoGxaXZ9iL54ut5wT3wewNfnu4UDbJjHeQBA2FkQvtSSyHCRJJ4MbBl5F_hJF4m6VfPKQ18ZTZUd-S_POtefzzC6H4xQBJ5LAdeOj-99rwzCpGtZeOZWRKgcLuzOC_kbN1HPHFxJXv_uN0B1P8D82jT6aTmkYP7CP0QHCuyFBBQ9DitbKecfqdtGJsbf-a_gw7_t36_KNjgiyOOyAii7DD6lWDXRXo7R0xfGW-1qjIfv7Siw"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              ["30+", "Countries Reached"],
              ["15+", "Years of Expertise"],
              ["120+", "Publications"],
              ["50+", "Active Systems"],
            ].map(([stat, label]) => (
              <div className="space-y-2" key={label}>
                <p className="font-display text-5xl text-primary font-bold">
                  {stat}
                </p>
                <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest font-semibold">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="bg-surface-bright py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 text-on-surface">
              A Foundation of Scientific Rigor
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              We don&apos;t just build software; we architect the future of
              health equity across the continent through three core pillars
              of resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "eco",
                bg: "bg-primary-fixed text-primary",
                title: "Sustainability",
                text: "Ensuring long-term viability through local capacity building, Nairobi-based engineering excellence, and sovereign data ownership.",
              },
              {
                icon: "sync_alt",
                bg: "bg-secondary-container text-secondary",
                title: "Interoperability",
                text: "Bridging health data silos using international standards (HL7 FHIR) to enable seamless information flow between regional and national levels.",
              },
              {
                icon: "expand",
                bg: "bg-tertiary-fixed text-tertiary",
                title: "Scalability",
                text: "Solutions designed to grow from pilot phases to national population-scale systems without technical or operational bottlenecks.",
              },
            ].map((card, i) => (
              <Reveal delay={i * 100} key={card.title}>
                <div className="group p-12 border border-outline-variant rounded-2xl bg-surface-container-lowest hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div
                    className={`w-16 h-16 ${card.bg} flex items-center justify-center rounded-2xl mb-10 transition-transform group-hover:scale-110`}
                  >
                    <span className="material-symbols-outlined text-4xl">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl mb-5 text-on-surface">
                    {card.title}
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32 bg-surface">
        <div className="max-w-7xl mx-auto bg-on-surface text-surface-bright rounded-3xl p-12 md:p-28 relative overflow-hidden text-center shadow-[0_48px_100px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Technical map network"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_DF6Ecj7cnH6GP1uGGapO-iUKTBOr-5oYopyucukXlOUg3oXrKv2YpU748t0yDJEFPq18PT0KUxuSlRAPJ3GW_SSsFsiwNAXyPCs0uLwjtvxGvpqdNysb83eRAeCyUz_sVpu2TNKmPJqnUdSouFdpv3ZJAHfgjp6jkpK6gaN1zKEyv9Xw1_ERljf9vrWz_ASMfh70l_fNdtatK840TYuQtuDD2LGEwoxceL45QOngwtJ5M_PYjcNR4vaatDa0KFrVGCNn3GerOA"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
              Ready to build resilient health systems?
            </h2>
            <p className="font-body text-lg opacity-80 leading-relaxed max-w-lg mx-auto">
              Join Imanova Systems in pioneering digital transformation that
              puts African health data back into African hands.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact-us/"
                className="bg-primary text-on-primary px-12 py-5 rounded-lg font-label font-bold hover:scale-105 transition-transform"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/our-services/"
                className="bg-transparent border border-surface-bright/30 text-surface-bright px-12 py-5 rounded-lg font-label font-bold hover:bg-surface-bright/10 transition-colors"
              >
                Technical Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
