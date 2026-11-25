import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useLocation } from "@/lib/router";
import type { CategoryPage, Product, Tone } from "@/data/catalog";
import { FeatureIcon } from "@/components/FeatureIcon";
import { ArrowRightIcon, CheckCircleIcon, SearchIcon, TableIcon } from "@/components/icons";
import { SITE } from "@/data/site";

/** Renders text with `**bold**` markers as <strong>. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text
        .split("**")
        .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}
    </>
  );
}

const enquiryLink = (title: string) => `/contact-us?product=${encodeURIComponent(title)}#form`;

const searchText = (p: Product) =>
  [
    p.title,
    p.badge,
    p.brand,
    ...p.chips,
    ...p.features.map((f) => `${f.title} ${f.desc}`),
    ...(p.specs?.items.flat() ?? []),
  ]
    .join(" ")
    .toLowerCase();

function SpecBox({ specs }: { specs: NonNullable<Product["specs"]> }) {
  return (
    <div className="agcs-wc-specbox">
      <div className="agcs-wc-specbox-head">
        {specs.table ? <TableIcon /> : <CheckCircleIcon />}
        {specs.title}
      </div>
      <div className="agcs-wc-spec-grid">
        {specs.items.map(([label, value]) => (
          <div key={label} className="agcs-wc-spec-kv">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  product,
  index,
  tone,
  onOpen,
}: {
  product: Product;
  index: number;
  tone?: Tone;
  onOpen: () => void;
}) {
  const iconStyle: CSSProperties | undefined = tone?.icon && {
    background: tone.icon.bg,
    borderColor: tone.icon.border,
    color: tone.icon.color,
  };
  return (
    <article className="agcs-wc-card">
      <div
        className="agcs-wc-stage"
        style={tone?.stage ? { background: tone.stage } : undefined}
        role="button"
        tabIndex={0}
        aria-label={`Quick view ${product.title}`}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
      >
        <div className="agcs-wc-stage-top">
          <span className="agcs-wc-badge">
            <span
              className="agcs-wc-badge-dot"
              style={tone?.dot ? { background: tone.dot } : undefined}
            />
            {product.badge}
          </span>
          <span className="agcs-wc-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <img
          className="agcs-wc-img"
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="agcs-wc-quick-pill">Quick View</span>
      </div>
      <div className="agcs-wc-body">
        <div className="agcs-wc-brand-line" style={tone?.brand ? { color: tone.brand } : undefined}>
          {product.brand}
        </div>
        <h3 className="agcs-wc-card-title">{product.title}</h3>
        <div className="agcs-wc-chips">
          {product.chips.map((c) => (
            <span key={c} className="agcs-wc-chip">
              {c}
            </span>
          ))}
        </div>
        <ul className="agcs-wc-features">
          {product.features.map((f) => (
            <li key={f.title} className="agcs-wc-feature">
              <span className="agcs-wc-feat-icon" aria-hidden="true" style={iconStyle}>
                <FeatureIcon name={f.icon} />
              </span>
              <div className="agcs-wc-feat-text">
                <strong className="agcs-wc-feat-title">{f.title}</strong>
                <p className="agcs-wc-feat-desc">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        {product.specs && <SpecBox specs={product.specs} />}
        <div className="agcs-wc-card-footer">
          <button type="button" className="agcs-wc-spec-btn" onClick={onOpen}>
            Quick Specs
          </button>
          <Link to={enquiryLink(product.title)} className="agcs-wc-enquire-btn">
            Enquire Now <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProductModal({
  product,
  tone,
  onClose,
}: {
  product: Product | null;
  tone?: Tone;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!product) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  return (
    <div
      className={`agcs-wc-modal-backdrop${product ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!product}
      aria-labelledby="agcs-modal-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      {product && (
        <div className="agcs-wc-modal">
          <button
            ref={closeRef}
            type="button"
            className="agcs-wc-modal-close"
            aria-label="Close product details"
            onClick={onClose}
          >
            &times;
          </button>
          <div
            className="agcs-wc-modal-visual"
            style={tone?.stage ? { background: tone.stage } : undefined}
          >
            <img src={product.image} alt={product.alt} />
          </div>
          <div className="agcs-wc-modal-content">
            <span className="agcs-wc-modal-badge">{product.badge}</span>
            <h3 className="agcs-wc-modal-title" id="agcs-modal-title">
              {product.title}
            </h3>
            <div className="agcs-wc-modal-chips">
              {product.chips.map((c) => (
                <span key={c} className="agcs-wc-chip">
                  {c}
                </span>
              ))}
            </div>
            <ul className="agcs-wc-modal-list">
              {product.features.map((f) => (
                <li key={f.title}>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </li>
              ))}
            </ul>
            {product.specs && (
              <div className="agcs-wc-modal-specs">
                <SpecBox specs={product.specs} />
              </div>
            )}
            <div className="agcs-wc-modal-actions">
              <Link
                to={enquiryLink(product.title)}
                className="agcs-wc-modal-primary"
                onClick={onClose}
              >
                Get Bulk / Retail Quote &rarr;
              </Link>
              <a href={SITE.phoneHref} className="agcs-wc-modal-secondary">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Filterable, searchable product grid with a quick-specs modal. Content comes from src/data/catalog.ts. */
export default function ProductShowcase({ page }: { page: CategoryPage }) {
  const { search: urlSearch } = useLocation();
  const initialQuery = new URLSearchParams(urlSearch).get("q") ?? "";
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState<Product | null>(null);

  // a link such as /wood-coating?q=WoodKeeper pre-fills the search box
  useEffect(() => {
    setQuery(new URLSearchParams(urlSearch).get("q") ?? "");
    setCategory("all");
  }, [urlSearch, page.slug]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: page.products.length };
    page.products.forEach((p) => (map[p.category] = (map[p.category] ?? 0) + 1));
    return map;
  }, [page]);

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      page.products.filter(
        (p) => (category === "all" || p.category === category) && (!q || searchText(p).includes(q)),
      ),
    [page, category, q],
  );
  const reset = () => {
    setCategory("all");
    setQuery("");
  };

  return (
    <>
      <section
        className={`agcs-wc-catalog${page.twoColumn ? " agcs-wc-catalog--two" : ""}`}
        id="catalog"
        aria-labelledby="agcs-wc-heading"
      >
        <div className="agcs-wc-ambient" aria-hidden="true" />
        <div className="agcs-wc-container">
          <header className="agcs-wc-header">
            <div className="agcs-wc-eyebrow">
              <span className="agcs-wc-eyebrow-dot" aria-hidden="true" />
              {page.eyebrow}
            </div>
            <h2 className="agcs-wc-title" id="agcs-wc-heading">
              {page.title[0]}
              <span>{page.title[1]}</span>
            </h2>
            <p className="agcs-wc-subtitle">
              <RichText text={page.subtitle} />
            </p>
          </header>

          <div
            className="agcs-wc-toolbar"
            role="region"
            aria-label={`Filter ${page.title.join("")} products`}
          >
            <div className="agcs-wc-tabs" role="tablist" aria-label="Product categories">
              {page.tabs.map((tab) => (
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
                placeholder={page.searchPlaceholder}
                aria-label={`Search ${page.title.join("")} products`}
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

          <div className="agcs-wc-grid">
            {visible.map((p) => (
              <ProductCard
                key={p.title}
                product={p}
                index={page.products.indexOf(p)}
                tone={page.tones[p.category]}
                onOpen={() => setOpen(p)}
              />
            ))}
          </div>

          <div className={`agcs-wc-empty${visible.length === 0 ? " is-visible" : ""}`}>
            <h4>{page.empty.title}</h4>
            <p>{page.empty.text}</p>
            <button type="button" className="agcs-wc-reset-btn" onClick={reset}>
              {page.empty.button}
            </button>
          </div>

          <div className="agcs-wc-system">
            <div className="agcs-wc-sys-intro">
              <span>{page.system.kicker}</span>
              <h3>{page.system.title}</h3>
              <p>{page.system.text}</p>
            </div>
            <div className="agcs-wc-sys-steps">
              {page.system.steps.map((s) => (
                <div key={s.kicker} className="agcs-wc-sys-step">
                  <strong>{s.kicker}</strong>
                  <b>{s.title}</b>
                  <small>{s.text}</small>
                </div>
              ))}
            </div>
            <Link to="/contact-us" className="agcs-wc-sys-cta">
              {page.system.cta} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ProductModal
        product={open}
        tone={open ? page.tones[open.category] : undefined}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
