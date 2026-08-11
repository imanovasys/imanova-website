import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Services",
  description:
    "End-to-end digital health system development: audits, custom health information systems, DHIS2 integration, data collection, analytics, research support, and capacity building.",
  path: "/our-services/",
});

const services = [
  {
    icon: "fact_check",
    title: "Health Systems Audit",
    text: "Evaluate existing digital health systems to identify technical, operational, governance, and data quality gaps, with practical recommendations for optimization and long-term sustainability.",
  },
  {
    icon: "settings_suggest",
    title: "Custom Health Information Systems",
    text: "Design and develop responsive digital platforms tailored to country priorities, programme requirements, and evolving health system needs.",
  },
  {
    icon: "sync_alt",
    title: "DHIS2 Integration & Interoperability",
    text: "Enable secure integration between DHIS2 and other health information systems to support efficient data exchange, reduce duplication, and improve system performance.",
  },
  {
    icon: "app_registration",
    title: "Data Collection Platforms",
    text: "Develop robust electronic data collection systems for routine reporting, surveillance, research, monitoring, and programme implementation.",
  },
  {
    icon: "insights",
    title: "Data Analytics & Visualization",
    text: "Transform routine health data into actionable insights through interactive dashboards, GIS-enabled visualizations, predictive analytics, and decision-support tools.",
  },
  {
    icon: "biotech",
    title: "Health Research & Statistical Support",
    text: "Provide scientific and analytical expertise across the research lifecycle, including study design, data management, statistical analysis, modelling, visualization, and dissemination.",
  },
  {
    icon: "school",
    title: "Capacity Building",
    text: "Strengthen institutional capacity through practical training, mentorship, technical assistance, and knowledge transfer to promote sustainable system ownership.",
  },
];

export default function OurServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-bright py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mb-8">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                Comprehensive Capabilities
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] tracking-tight text-on-surface mb-8">
              End-to-end digital health system development
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              We provide high-integrity digital infrastructure and scientific
              expertise to help governments and organizations transform
              health outcomes across Africa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions Portfolio */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl lg:text-5xl mb-6 text-on-surface">
                Solutions built for lasting impact
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                We partner with governments, development organizations,
                research institutions, and healthcare providers to design,
                develop, integrate, and strengthen digital health systems
                that are resilient, scalable, and built for long-term
                sustainability.
                <br />
                <br />
                Whether enhancing an existing platform or developing a new
                solution from the ground up, our focus is on creating
                systems that support high-quality data, seamless
                interoperability, and evidence-based decision-making across
                all levels of the health system.
              </p>
            </div>
            <div className="mt-16 flex items-center gap-8">
              <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary flex-shrink-0">
                Our core services
              </h3>
              <div className="h-px flex-grow bg-outline-variant" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {services.map((service, i) => (
              <Reveal delay={(i % 4) * 100} key={service.title}>
                <div className="group">
                  <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl mb-4 text-on-surface">
                    {service.title}
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32 bg-surface">
        <Reveal className="max-w-7xl mx-auto">
          <div className="bg-on-surface text-surface-bright rounded-3xl p-12 md:p-28 relative overflow-hidden text-center shadow-[0_48px_100px_rgba(0,0,0,0.2)]">
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
                Join Imanova Systems in pioneering digital transformation
                that puts African health data back into African hands.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact-us/"
                  className="bg-primary text-on-primary px-12 py-5 rounded-lg font-label font-bold hover:scale-105 transition-transform"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/our-approach/"
                  className="bg-transparent border border-surface-bright/30 text-surface-bright px-12 py-5 rounded-lg font-label font-bold hover:bg-surface-bright/10 transition-colors"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
