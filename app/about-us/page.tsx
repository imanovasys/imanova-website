import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Imanova Systems partners with governments, research institutions, development organizations, and healthcare providers to co-create sustainable, interoperable health system solutions.",
  path: "/about-us/",
});

const expertiseAreas = [
  "Public Health",
  "Medicine",
  "Epidemiology",
  "HIS",
  "Health Informatics",
  "Data Science",
  "AI",
  "GIS",
  "Statistics",
  "Software Engineering",
  "Research",
];

const philosophyPillars = [
  { icon: "handshake", title: "Partnership" },
  { icon: "home_pin", title: "Local ownership" },
  { icon: "sync_alt", title: "Interoperability" },
  { icon: "model_training", title: "Capacity strengthening" },
  { icon: "all_inclusive", title: "Long-term sustainability" },
];

const brandFramework = [
  {
    icon: "rocket_launch",
    title: "Our Mission",
    text: "To co-create resilient, sustainable health systems through collaborative innovation and digital transformation, empowering evidence-driven decisions that improve health outcomes across Africa.",
  },
  {
    icon: "visibility",
    title: "Our Vision",
    text: "A future where every African country has the data and technology infrastructure to make informed, timely health decisions that leave no one behind.",
  },
  {
    icon: "psychology",
    title: "Our Purpose",
    text: "To bridge the gap between complex health challenges and sustainable digital solutions through technical excellence and pan-African partnership.",
  },
];

const imanovaWay = [
  {
    icon: "groups",
    title: "Co-create",
    text: "We build solutions with our partners—not for them—ensuring ownership, relevance, and long-term sustainability.",
  },
  {
    icon: "lightbulb",
    title: "Innovate",
    text: "We combine science, technology, and creativity to solve complex health system challenges.",
  },
  {
    icon: "all_inclusive",
    title: "Sustain",
    text: "We design resilient, interoperable systems that continue delivering value long after implementation.",
  },
  {
    icon: "school",
    title: "Empower",
    text: "We strengthen institutions through capacity building, mentorship, and knowledge transfer.",
  },
  {
    icon: "verified",
    title: "Excel",
    text: "We pursue scientific rigor, technical excellence, and continuous improvement in everything we do.",
  },
  {
    icon: "gavel",
    title: "Serve with Integrity",
    text: "We uphold transparency, accountability, ethical practice, and respect for the communities we serve.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="African health systems data visualization"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCunR_ChV9_64P57MMFcGsWJVO4CFPXCEc1udiHAu4VTulg_c1JBpMym0upEKyylo4fS4t8is1FGflW3j2tC8rkpAKSwx_shHHQ3yIeyI07ha_hB8SrJoRWos6YZO_pUpfF2PQ4maawlLu4zd4_KvQrtMvjbtQL7OpsZpA8_KG1MMz3vzBEKJ1mskOvp4njcOHZC-HWbFJds-F1rwSf4qwBsQ57NAXKAegVBgxnTjCzCja7f2V6MnQyPGB5Aj3xiOMYrO6v2U-20g"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                About Imanova
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
              Co-creating resilient health systems for a healthier Africa
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
              Imanova Systems partners with governments, research
              institutions, development organizations, and healthcare
              providers to co-create sustainable, interoperable, and
              data-driven health system solutions that improve
              decision-making and health outcomes.
            </p>
            <Link
              href="/contact-us/"
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-label font-bold hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 space-y-32">
        {/* Who We Are */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8">
                Who We Are
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                Imanova Systems is a health systems innovation firm committed
                to strengthening health systems and improving health outcomes
                across Africa. We partner with governments, research
                institutions, development partners, and healthcare
                organizations to co-create sustainable, interoperable, and
                data-driven digital solutions that enable better decisions
                and healthier communities.
              </p>
            </Reveal>
            <Reveal delay={150} className="flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-3xl" />
                <svg
                  className="w-full h-auto relative text-primary/40"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="70" fill="currentColor" opacity="0.15" />
                  <g className="text-primary">
                    <circle cx="100" cy="80" r="3" fill="currentColor" />
                    <circle cx="120" cy="110" r="2.5" fill="currentColor" />
                    <circle cx="80" cy="130" r="2.5" fill="currentColor" />
                    <circle cx="60" cy="70" r="2.5" fill="currentColor" />
                    <circle cx="140" cy="60" r="2" fill="currentColor" />
                    <line x1="100" y1="80" x2="120" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="100" y1="80" x2="80" y2="130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="80" y1="130" x2="120" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="60" y1="70" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="120" y1="110" x2="140" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  </g>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-surface-container-low py-32">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <Reveal className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mx-auto w-fit">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-on-surface mb-6">
                Technology alone does not transform health systems.
              </h2>
              <p className="font-body text-xl text-on-surface-variant max-w-3xl mx-auto">
                Sustainable transformation is anchored in interconnected
                pillars that ensure systems are built to last and serve
                people.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
              {philosophyPillars.map((p, i) => (
                <Reveal delay={i * 100} key={p.title}>
                  <div className="flex flex-col items-center p-8 bg-surface rounded-2xl border border-outline-variant hover:border-primary transition-all group h-full">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </span>
                    <h3 className="font-display text-xl mb-2 text-center">
                      {p.title}
                    </h3>
                    <div className="w-full h-px bg-outline-variant my-4" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Collaborative ecosystem diagram"
                className="w-full h-auto rounded-2xl"
                src="https://lh3.googleusercontent.com/aida/AP1WRLspux56D4Q6FYco4d2eQodWFac-iqG1McMUYOqcgSwYoKgAvCr4Fy9edGGpCgpfGrb7w90_qEt6PpAwyix_dBoatlTar8aiGSRMxtmFgbpwfMXfrRXUNtPpTGh_gOWUbodSJh6G2tI497Y3SJVd8d2zTUGp7o4lV_wfAYbg1AxBQerN344dQvumpJnk6wWwXNsdAk5mgdKWrTjdhX5-I4XPfUOr4SepYqR-e3-TtAzDBJeFWnRFtzaJ"
              />
            </Reveal>
            <Reveal delay={200} className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                  How We Work
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8">
                Co-designing for Impact
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-6">
                We don&apos;t believe in off-the-shelf software for bespoke
                challenges. Our collaborative approach ensures we understand
                local pain points before designing a single line of code.
              </p>
              <div className="space-y-4">
                {[
                  "Deep immersion to understand health system challenges.",
                  "Iterative co-design alongside frontline health workers and policy makers.",
                  "Building for seamless adoption and indigenous ownership.",
                ].map((text, i) => (
                  <div className="flex gap-4" key={text}>
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-on-surface-variant">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-surface py-32 border-t border-outline-variant/30">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <Reveal className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mx-auto w-fit">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                  Our Expertise
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-on-surface mb-6">
                Multidisciplinary Excellence
              </h2>
              <p className="font-body text-xl text-on-surface-variant max-w-3xl mx-auto mb-12">
                Our multidisciplinary team brings together expertise across
                public health, medicine, epidemiology, health information
                systems, health informatics, data science, artificial
                intelligence, geographic information systems (GIS),
                statistics, software engineering, and research. By combining
                technical excellence with deep health systems knowledge, we
                develop practical, scientifically rigorous solutions that
                meet real-world needs and create lasting impact.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertiseAreas.map((area) => (
                <div
                  key={area}
                  className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-primary-fixed transition-colors text-center"
                >
                  <p className="font-label text-sm font-bold tracking-wide text-on-surface">
                    {area}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-16 font-display text-2xl text-on-surface-variant max-w-4xl mx-auto italic">
              &quot;We bridge public health and technology to deliver
              context-specific solutions that save lives and strengthen
              communities.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Brand Framework */}
      <section className="px-6 md:px-12 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl text-on-surface mb-6">
              Our Brand Framework
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
              The foundation of our commitment to African health systems.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandFramework.map((item, i) => (
              <Reveal delay={i * 100} key={item.title}>
                <div className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="group bg-primary text-on-primary p-8 rounded-2xl border border-primary transition-all hover:-translate-y-2 hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center mb-6 text-on-primary">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3 className="font-display text-2xl mb-4">
                  The Imanova Promise
                </h3>
                <p className="opacity-90 text-sm leading-relaxed">
                  We promise precision in our data, resilience in our
                  systems, and authority in our insights, ensuring every
                  partnership results in measurable impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Imanova Way */}
      <section className="px-6 md:px-12 py-32 bg-surface-container-highest/30">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8">
                The Imanova Way
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                Our work is guided by a core set of principles that define
                how we build partnerships, design solutions, and foster a
                culture of excellence within our team. These are not just
                words; they are the blueprint for our collective impact.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imanovaWay.map((item, i) => (
              <Reveal delay={i * 80} key={item.title}>
                <div className="bg-white p-10 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-all group h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl mb-4 text-on-surface">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 md:px-12 py-32 bg-surface">
        <Reveal className="max-w-7xl mx-auto">
          <div className="bg-on-surface text-surface-bright rounded-3xl p-12 md:p-28 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Data network pattern"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_DF6Ecj7cnH6GP1uGGapO-iUKTBOr-5oYopyucukXlOUg3oXrKv2YpU748t0yDJEFPq18PT0KUxuSlRAPJ3GW_SSsFsiwNAXyPCs0uLwjtvxGvpqdNysb83eRAeCyUz_sVpu2TNKmPJqnUdSouFdpv3ZJAHfgjp6jkpK6gaN1zKEyv9Xw1_ERljf9vrWz_ASMfh70l_fNdtatK840TYuQtuDD2LGEwoxceL45QOngwtJ5M_PYjcNR4vaatDa0KFrVGCNn3GerOA"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
                Let&apos;s Build the Future of African Health Together
              </h2>
              <p className="font-body text-xl opacity-80 leading-relaxed">
                Every health system is unique. Every partnership is
                collaborative. Every solution is designed to strengthen the
                decisions that improve lives.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact-us/"
                  className="bg-primary text-on-primary px-12 py-5 rounded-lg font-label font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                >
                  Let&apos;s Build Together
                </Link>
                <Link
                  href="/contact-us/"
                  className="bg-transparent border border-surface-bright/30 text-surface-bright px-12 py-5 rounded-lg font-label font-bold hover:bg-surface-bright/10 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
