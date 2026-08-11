import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Approach",
  description:
    "A six-stage co-creation lifecycle grounded in scientific rigor, local ownership, and long-term sustainability for African health systems.",
  path: "/our-approach/",
});

const steps = [
  {
    icon: "search",
    title: "1. Understand the Need",
    text: "We work closely with stakeholders to conduct comprehensive needs assessments, evaluate existing systems, and define opportunities for improvement.",
  },
  {
    icon: "draw",
    title: "2. Co-design the Solution",
    text: "Together with our clients, we iteratively design solutions that align with programme objectives, user workflows, and policy requirements.",
  },
  {
    icon: "construction",
    title: "3. Build with Purpose",
    text: "Using modern, scalable technologies, we develop interoperable systems that prioritize usability, security, and long-term sustainability.",
  },
  {
    icon: "auto_graph",
    title: "4. Optimize for Growth",
    text: "We continuously refine and enhance solutions to meet changing priorities, accommodate future expansion, and maintain high performance.",
  },
  {
    icon: "school",
    title: "5. Build Local Capacity",
    text: "We provide practical training and mentorship to promote local ownership and ensure the technology succeeds through empowered people.",
  },
  {
    icon: "handshake",
    title: "6. Transition & Support",
    text: "We support smooth handover and provide ongoing technical assistance to ensure systems continue delivering value well into the future.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <Reveal className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mb-8">
            <span className="material-symbols-outlined text-[18px]">
              biotech
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
              Scientific Methodology
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] tracking-tight text-on-surface mb-8">
            Co-create solutions that grow with your{" "}
            <span className="text-primary italic">health system</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            We believe the most successful digital health systems are
            developed through collaboration—not imposed through technology.
            Every project follows a structured, iterative process that
            ensures solutions remain responsive to local priorities while
            supporting future growth.
          </p>
        </Reveal>
      </section>

      {/* Co-creation Process */}
      <section className="bg-surface-container-low py-24 border-y border-outline-variant overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-on-surface mb-6">
              The Co-creation Process
            </h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              Our six-stage lifecycle ensures that every health system we
              build is technically sound, locally owned, and sustainably
              operated.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
            {steps.map((step, i) => (
              <Reveal delay={i * 80} key={step.title}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-3 text-on-surface">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant px-2">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Rigor */}
      <section className="py-32 px-6 md:px-12 bg-surface-bright">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhQ5UfQIHk9HfJ-AIkOfKtHt_4aTpoGxaXZ9iL54ut5wT3wewNfnu4UDbJjHeQBA2FkQvtSSyHCRJJ4MbBl5F_hJF4m6VfPKQ18ZTZUd-S_POtefzzC6H4xQBJ5LAdeOj-99rwzCpGtZeOZWRKgcLuzOC_kbN1HPHFxJXv_uN0B1P8D82jT6aTmkYP7CP0QHCuyFBBQ9DitbKecfqdtGJsbf-a_gw7_t36_KNjgiyOOyAii7DD6lWDXRXo7R0xfGW-1qjIfv7Siw"
                alt="Health Data Analysis"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl text-on-primary max-w-xs hidden md:block">
                <p className="font-display text-2xl italic leading-tight">
                  &quot;Rigor is not just a process; it&apos;s our promise to
                  the African health sector.&quot;
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-8 order-1 lg:order-2">
            <h2 className="font-display text-4xl lg:text-5xl text-on-surface">
              Scientific Rigor as Standard
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              Our engineering is guided by the same peer-reviewed standards
              found in clinical research. We don&apos;t just build features;
              we build evidence-based tools that improve diagnostic accuracy
              and public health surveillance.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Data Sovereignty
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Ensuring that African health data remains under the
                    jurisdiction and control of African institutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Predictive Accuracy
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Using advanced epidemiological modeling to turn raw
                    registry data into actionable health forecasts.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Ownership */}
      <section className="py-32 px-6 md:px-12">
        <Reveal className="max-w-7xl mx-auto">
          <div className="bg-primary-container rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h2 className="font-display text-4xl lg:text-5xl text-on-primary-container">
                  Local Ownership, Global Standards
                </h2>
                <p className="font-body text-lg text-on-primary-container/80 leading-relaxed">
                  Sustainable technology requires more than just code. We
                  prioritize the transfer of technical expertise to local
                  engineering teams, ensuring that systems can be
                  independently maintained for decades.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="bg-surface-container-lowest/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <p className="font-display text-4xl font-bold text-on-primary-container mb-2">
                      100%
                    </p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-primary-container">
                      African-Led Engineering
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <p className="font-display text-4xl font-bold text-on-primary-container mb-2">
                      24/7
                    </p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-primary-container">
                      Regional Support Hubs
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-on-primary-container/5 rounded-full flex items-center justify-center p-12 border border-on-primary-container/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-[120px] text-on-primary-container/40">
                      public_off
                    </span>
                    <p className="font-label text-sm mt-6 text-on-primary-container font-semibold">
                      Zero External Dependencies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-32">
        <Reveal className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-display text-4xl md:text-6xl text-on-surface">
            Let&apos;s co-create the future of health.
          </h2>
          <p className="font-body text-lg text-on-surface-variant">
            Whether you are a government agency, a research institution, or
            a health NGO, our methodology is designed to adapt to your
            unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <Link
              href="/contact-us/"
              className="bg-primary text-on-primary px-12 py-5 rounded-lg font-label font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/resources/"
              className="bg-transparent border border-outline text-on-surface px-12 py-5 rounded-lg font-label font-bold hover:bg-surface-container-low transition-colors"
            >
              View Our Resources
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
