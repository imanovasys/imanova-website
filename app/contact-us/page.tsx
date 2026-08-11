import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Imanova Systems to discuss health systems audits, custom platforms, DHIS2 integration, analytics, research support, or capacity building.",
  path: "/contact-us/",
});

const contactCards = [
  {
    icon: "mail",
    title: "Email",
    text: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "location_on",
    title: "Location",
    text: siteConfig.location,
    href: undefined,
  },
  {
    icon: "schedule",
    title: "Response Time",
    text: "We usually reply within 1–2 business days",
    href: undefined,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mb-8">
            <span className="material-symbols-outlined text-[18px]">
              forum
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
              Let&apos;s Talk
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl leading-[1.1] tracking-tight text-on-surface mb-8">
            Let&apos;s build resilient health systems, together.
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Whether you&apos;re a government agency, research institution,
            development partner, or healthcare provider, we&apos;d love to
            hear about your challenge and explore how we can help.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Reveal className="lg:col-span-1 space-y-6">
            {contactCards.map((card) => {
              const Wrapper = card.href ? "a" : "div";
              return (
                <Wrapper
                  key={card.title}
                  {...(card.href ? { href: card.href } : {})}
                  className="flex items-start gap-4 bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 bg-primary-fixed text-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-[11px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-1">
                      {card.title}
                    </p>
                    <p className="font-body text-on-surface break-words">
                      {card.text}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 md:p-12">
              <h2 className="font-display text-3xl text-on-surface mb-2">
                Send us a message
              </h2>
              <p className="font-body text-on-surface-variant mb-8">
                Fill out the form and our team will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
