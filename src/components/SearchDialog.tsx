import { useEffect, useId, useRef, useState } from "react";
import { Link, useNavigate } from "@/lib/router";
import { searchSite } from "@/data/site";
import { CloseIcon, SearchIcon } from "@/components/icons";

/** Full-screen product / page search opened from the header. */
export default function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const titleId = useId();
  const results = searchSite(query);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    onClose();
    navigate(results[0] ? results[0].to : `/faqs?q=${encodeURIComponent(q)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0e1018]/70 px-4 pt-[14vh] backdrop-blur-md"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-2xl">
        <div className="mb-3 flex items-center justify-between px-2 text-white">
          <h2 id={titleId} className="text-sm font-semibold tracking-wide">
            Search products &amp; pages
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <form
          onSubmit={submit}
          className="flex items-center gap-3 rounded-full bg-white px-5 shadow-2xl ring-1 ring-black/5"
        >
          <SearchIcon className="size-5 shrink-0 text-neutral-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            autoComplete="off"
            placeholder="Search Berger paints, primers, waterproofing..."
            aria-label="Search the site"
            className="h-14 min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Search
          </button>
        </form>

        {query.trim() && (
          <div className="mt-3 max-h-[46vh] overflow-y-auto rounded-3xl bg-white p-2 shadow-2xl">
            {results.length === 0 ? (
              <p className="px-4 py-5 text-center text-sm text-neutral-600">
                No exact product match. Press Enter to browse our FAQs, or{" "}
                <Link
                  to="/contact-us"
                  onClick={onClose}
                  className="font-semibold text-brand underline"
                >
                  contact us
                </Link>
                .
              </p>
            ) : (
              <ul>
                {results.map((r) => (
                  <li key={r.title + r.to}>
                    <Link
                      to={r.to}
                      onClick={onClose}
                      className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition hover:bg-lilac"
                    >
                      <span>
                        <span className="block text-[15px] font-semibold leading-tight text-ink">
                          {r.title}
                        </span>
                        <span className="mt-0.5 block text-xs font-semibold text-brand">
                          {r.context}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-bold text-neutral-500">View →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
