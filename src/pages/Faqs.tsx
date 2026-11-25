import { useEffect, useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { Link, useLocation } from "@/lib/router";
import { FAQS, FAQ_SEARCH_PLACEHOLDER, FAQ_TABS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { ChevronDownIcon, SearchIcon } from "@/components/icons";

export default function Faqs() {
  const { search: urlSearch } = useLocation();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState(() => new URLSearchParams(urlSearch).get("q") ?? "");
  const [opened, setOpened] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    setQuery(new URLSearchParams(urlSearch).get("q") ?? "");
    setCategory("all");
  }, [urlSearch]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: FAQS.length };
    FAQS.forEach((f) => (map[f.category] = (map[f.category] ?? 0) + 1));
    return map;
  }, []);

  const q = query.trim().toLowerCase();
  const visible = FAQS.map((faq, index) => ({ faq, index })).filter(
    ({ faq }) =>
      (category === "all" || faq.category === category) &&
      (!q || `${faq.question} ${faq.text}`.toLowerCase().includes(q)),
  );

  const toggle = (i: number) =>
    setOpened((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      <PageHero
        image="/images/heroes/exterior-emulsion.webp"
        tone="purple"
        title="Frequently Asked Questions About Berger Paints & Ordering"
        subtitle="Clear answers from the AGCS team"
        cta={{ label: "Browse FAQs", to: "/faqs#catalog" }}
        position="center bottom"
      />
      <section
        className="agcs-wc-catalog agcs-legal"
        id="catalog"
        aria-labelledby="agcs-faq-heading"
      >
        <div className="agcs-wc-ambient" aria-hidden="true" />
        <div className="agcs-wc-container">
          <header className="agcs-wc-header">
            <div className="agcs-wc-eyebrow">
              <span className="agcs-wc-eyebrow-dot" aria-hidden="true" />
              Help Centre
            </div>
            <h2 className="agcs-wc-title" id="agcs-faq-heading">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="agcs-wc-subtitle">
              Quick answers about Berger paints, ordering, delivery, colour advice and warranty from
              the AGCS team in Arumbakkam, Chennai.
            </p>
          </header>

          <div className="agcs-wc-toolbar" role="region" aria-label="Filter questions">
            <div className="agcs-wc-tabs" role="tablist" aria-label="Question categories">
              {FAQ_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={category === tab.id}
                  className={`agcs-wc-tab${category === tab.id ? " is-active" : ""}`}
                  onClick={() => setCategory(tab.id)}
                >
                  {tab.label} <span className="agcs-wc-tab-count">{counts[tab.id] ?? 0}</span>
                </button>
              ))}
            </div>
            <div className="agcs-wc-search-wrap">
              <SearchIcon className="agcs-wc-search-icon" />
              <input
                type="search"
                className="agcs-wc-search"
                placeholder={FAQ_SEARCH_PLACEHOLDER}
                aria-label="Search frequently asked questions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="button"
                className={`agcs-wc-search-clear${query ? " is-visible" : ""}`}
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                &times;
              </button>
            </div>
          </div>

          <div className="agcs-faq-list">
            {visible.map(({ faq, index }) => (
              <details
                key={faq.question}
                className="agcs-faq-item"
                open={q ? true : opened.has(index)}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(index);
                  }}
                >
                  <span className="agcs-faq-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="agcs-faq-q">{faq.question}</span>
                  <span className="agcs-faq-cat">{faq.categoryLabel}</span>
                  <span className="agcs-faq-chevron" aria-hidden="true">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="agcs-faq-a">{faq.answer}</div>
              </details>
            ))}
          </div>

          <div className={`agcs-wc-empty${visible.length === 0 ? " is-visible" : ""}`}>
            <h4>No matching questions found</h4>
            <p>Try a different keyword, or ask our team directly.</p>
            <button
              type="button"
              className="agcs-wc-reset-btn"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Show All Questions
            </button>
          </div>

          <div className="agcs-help-strip">
            <div>
              <span>Still need help?</span>
              <h3>Talk to a paint expert</h3>
              <p>
                Get product, shade and quantity advice from our showroom team, open 7:00 AM &ndash;
                7:00 PM.
              </p>
            </div>
            <div className="agcs-help-actions">
              <Link to="/contact-us" className="agcs-help-btn primary">
                Contact Us &rarr;
              </Link>
              <a href={SITE.phoneHref} className="agcs-help-btn ghost">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
