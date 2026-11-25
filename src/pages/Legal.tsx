import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import type { LegalDoc } from "@/data/legal";

const HERO = {
  "/privacy-policy": {
    title: "Privacy Policy: How We Protect Your Information",
    subtitle: "Your privacy matters to us",
    cta: "Read Policy",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions for Using AGCS and Buying Paints",
    subtitle: "Clear terms for a smooth experience",
    cta: "Read Terms",
  },
} as const;

/** Privacy policy / terms: sticky contents list + numbered sections. */
export default function Legal({ doc }: { doc: LegalDoc }) {
  const [active, setActive] = useState(doc.sections[0]?.id ?? "");
  const hero = HERO[doc.path as keyof typeof HERO];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -65% 0px" },
    );
    doc.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [doc]);

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <>
      <PageHero
        image="/images/heroes/exterior-emulsion.webp"
        tone="purple"
        title={hero.title}
        subtitle={hero.subtitle}
        cta={{ label: hero.cta, to: `${doc.path}#catalog` }}
        position="center bottom"
      />
      <section
        className="agcs-wc-catalog agcs-legal"
        id="catalog"
        aria-labelledby="agcs-legal-heading"
      >
        <div className="agcs-wc-ambient" aria-hidden="true" />
        <div className="agcs-wc-container" style={{ maxWidth: 1180 }}>
          <header className="agcs-wc-header">
            <div className="agcs-wc-eyebrow">
              <span className="agcs-wc-eyebrow-dot" aria-hidden="true" />
              {doc.eyebrow}
            </div>
            <h2 className="agcs-wc-title" id="agcs-legal-heading">
              {doc.title[0]}
              <span>{doc.title[1]}</span>
            </h2>
            <p className="agcs-wc-subtitle">{doc.subtitle}</p>
          </header>

          <div className="agcs-doc">
            <nav className="agcs-doc-toc" aria-label={`${doc.eyebrow} contents`}>
              <h4>On this page</h4>
              {doc.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={active === s.id ? "is-active" : undefined}
                  onClick={jump(s.id)}
                >
                  <b>{s.number}</b>
                  <span>{s.title}</span>
                </a>
              ))}
            </nav>
            <div className="agcs-doc-body">
              <div className="agcs-doc-meta">
                <span>
                  <strong>Last updated:</strong> {doc.updated}
                </span>
                <i className="dot" />
                <span>
                  <strong>Applies to:</strong> {doc.appliesTo}
                </span>
              </div>
              {doc.sections.map((s) => (
                <section key={s.id} className="agcs-doc-sec" id={s.id}>
                  <h3>
                    <i>{s.number}</i>
                    {s.title}
                  </h3>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
