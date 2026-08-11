import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources and Documentation",
  description:
    "Blogs and insights, research and publications, case studies, and a learning center from Imanova Systems.",
  path: "/resources/",
});

const sections = [
  {
    id: "blogs",
    icon: "article",
    title: "Blogs & Insights",
    text: "Under development, please check back later.",
  },
  {
    id: "research",
    icon: "science",
    title: "Research & Publications",
    text: "Coming soon.",
  },
  {
    id: "case-studies",
    icon: "cases",
    title: "Case Studies",
    text: "Under development, please check back later.",
  },
  {
    id: "learning-center",
    icon: "school",
    title: "Learning Center",
    text: "Coming soon.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full border border-primary/20 mb-8">
            <span className="material-symbols-outlined text-[18px]">
              menu_book
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold">
              Knowledge Hub
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl leading-[1.1] tracking-tight text-on-surface mb-8">
            Resources &amp; Documentation
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Insights, research, and practical guidance from our work
            strengthening health systems across Africa. This hub is growing —
            check back for new publications and case studies.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav
            aria-label="Resource categories"
            className="flex flex-wrap gap-4 mb-16"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-label text-sm text-on-surface-variant hover:text-primary border border-outline-variant hover:border-primary px-5 py-2.5 rounded-full transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((s, i) => (
              <Reveal delay={i * 100} key={s.id}>
                <div
                  id={s.id}
                  className="scroll-mt-32 bg-surface-container-lowest border border-outline-variant rounded-2xl p-10 h-full"
                >
                  <div className="w-14 h-14 bg-primary-fixed text-primary flex items-center justify-center rounded-2xl mb-8">
                    <span className="material-symbols-outlined text-3xl">
                      {s.icon}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl mb-4 text-on-surface">
                    {s.title}
                  </h2>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
