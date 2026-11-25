import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "@/lib/router";
import { MAIN_NAV, PRODUCT_LINKS } from "@/data/site";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import SearchDialog from "@/components/SearchDialog";

const isProductPath = (path: string) => PRODUCT_LINKS.some((l) => l.to === path);

const pill = (active: boolean) =>
  `relative inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold leading-none transition-colors ${
    active ? "bg-brand/12 text-brand" : "text-[#2b2f3a] hover:bg-brand/10 hover:text-brand"
  }`;

const activeDot =
  "after:absolute after:bottom-[3px] after:left-1/2 after:h-[3px] after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-brand after:to-pink after:content-['']";

/** Floating, frosted header: hides while scrolling down and returns on scroll up. */
export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [search, setSearch] = useState(false);
  const closeSearch = useCallback(() => setSearch(false), []);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 160 && y > last + 6) setHidden(true);
      else if (y < last - 4 || y <= 160) setHidden(false);
      last = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the drawer after navigating
  useEffect(() => {
    setDrawer(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const productsActive = isProductPath(pathname);

  return (
    <>
      <header
        className={`fixed inset-x-3 top-[var(--gap)] z-50 mx-auto max-w-[1240px] rounded-[18px] transition-[top,transform] duration-500 ease-out lg:inset-x-4 lg:rounded-[22px] ${
          hidden ? "-translate-y-[140%]" : "translate-y-0"
        }`}
        style={{ ["--gap" as string]: scrolled ? "8px" : "12px" }}
      >
        <div
          className={`absolute inset-0 -z-10 rounded-[inherit] backdrop-blur-[18px] backdrop-saturate-150 transition-[background-color,box-shadow] duration-300 ${
            scrolled
              ? "bg-white/95 shadow-[0_0_0_1px_rgba(17,19,24,.06),0_18px_46px_-16px_rgba(17,19,24,.42)]"
              : "bg-white/85 shadow-[0_0_0_1px_rgba(17,19,24,.06),0_12px_40px_-16px_rgba(17,19,24,.30)]"
          }`}
        />
        <div className="flex min-h-[58px] items-center justify-between gap-3 pl-4 pr-2 lg:min-h-[66px] lg:pl-6 lg:pr-2.5">
          <Link to="/" aria-label="AGCS – Abundancia Global Colors, home" className="shrink-0">
            <img
              src="/images/brand/agcs-logo.webp"
              width={800}
              height={162}
              alt="AGCS – Abundancia Global Colors"
              className="h-8 w-auto lg:h-10"
            />
          </Link>

          {/* desktop navigation */}
          <nav aria-label="Main" className="hidden flex-1 items-center justify-end gap-0.5 lg:flex">
            {MAIN_NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`${pill(pathname === l.to)} ${pathname === l.to ? activeDot : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className={`${pill(productsActive)} ${productsActive ? activeDot : ""} group-hover:bg-brand/10 group-hover:text-brand`}
              >
                Products
                <ChevronDownIcon className="size-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-10 w-[300px] -translate-x-1/2 translate-y-1 pt-3.5 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="rounded-[20px] border border-ink/5 bg-white p-2.5 shadow-[0_30px_70px_-22px_rgba(17,19,24,.42)]">
                  {PRODUCT_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className={`group/item flex items-center gap-3 rounded-[13px] px-3.5 py-3 text-[14px] font-semibold transition hover:translate-x-[3px] hover:bg-[#f6f0fa] hover:text-brand ${
                          pathname === l.to ? "bg-[#f6f0fa] text-brand" : "text-[#1f2430]"
                        }`}
                      >
                        <span className="size-[9px] rounded-full bg-gradient-to-br from-brand to-pink opacity-55 transition group-hover/item:scale-125 group-hover/item:opacity-100" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-1.5 lg:gap-2">
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Search products"
              className="grid size-[42px] place-items-center rounded-full bg-ink/5 text-[#2b2f3a] transition hover:scale-105 hover:bg-brand/15 hover:text-brand"
            >
              <SearchIcon className="size-[18px]" />
            </button>
            <Link
              to="/contact-us"
              className="group/cta hidden items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-bold leading-none tracking-[.01em] text-white shadow-[0_10px_24px_-10px_rgba(17,19,24,.55)] transition hover:-translate-y-px hover:bg-gradient-to-br hover:from-brand hover:to-pink hover:shadow-[0_14px_28px_-10px_rgba(118,45,151,.65)] lg:inline-flex"
            >
              Contact Us
              <ArrowRightIcon className="size-3.5 transition-transform group-hover/cta:translate-x-[3px]" />
            </Link>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              aria-expanded={drawer}
              className="grid size-[42px] place-items-center rounded-full bg-ink/5 text-[#2b2f3a] transition hover:bg-brand/15 hover:text-brand lg:hidden"
            >
              <MenuIcon className="size-[19px]" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0e1018]/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawer ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawer(false)}
        aria-hidden="true"
      />
      <aside
        aria-label="Menu"
        aria-hidden={!drawer}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[min(86vw,360px)] flex-col overflow-y-auto rounded-r-[26px] bg-white px-[18px] pb-7 pt-[22px] shadow-[30px_0_70px_-20px_rgba(17,19,24,.45)] transition-transform duration-300 ease-out lg:hidden ${
          drawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-2.5 flex items-center justify-between border-b border-ink/10 px-1 pb-4">
          <Link to="/" aria-label="Home">
            <img
              src="/images/brand/agcs-logo.webp"
              width={800}
              height={162}
              alt="AGCS"
              className="h-[34px] w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full bg-ink/5 text-[#2b2f3a] transition hover:bg-brand/15"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {MAIN_NAV.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  tabIndex={drawer ? 0 : -1}
                  className={`flex rounded-[14px] px-3.5 py-4 text-[16px] font-semibold ${
                    pathname === l.to
                      ? "bg-brand/12 text-brand"
                      : "text-[#2b2f3a] hover:bg-brand/10"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setMobileProducts((v) => !v)}
                aria-expanded={mobileProducts}
                tabIndex={drawer ? 0 : -1}
                className={`flex w-full items-center justify-between rounded-[14px] px-3.5 py-4 text-[16px] font-semibold ${
                  productsActive ? "bg-brand/12 text-brand" : "text-[#2b2f3a] hover:bg-brand/10"
                }`}
              >
                Products
                <ChevronDownIcon
                  className={`size-4 transition-transform ${mobileProducts ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProducts && (
                <ul className="mb-2 mt-1 rounded-2xl bg-[#faf7fc] p-1.5">
                  {PRODUCT_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        tabIndex={drawer ? 0 : -1}
                        className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-[14.5px] font-semibold ${
                          pathname === l.to ? "bg-white text-brand" : "text-[#1f2430]"
                        }`}
                      >
                        <span className="size-2 rounded-full bg-gradient-to-br from-brand to-pink" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <Link
          to="/contact-us"
          tabIndex={drawer ? 0 : -1}
          className="mt-[18px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-pink px-[18px] py-4 text-[15px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(118,45,151,.7)]"
        >
          Contact Us <ArrowRightIcon className="size-4" />
        </Link>
      </aside>

      <SearchDialog open={search} onClose={closeSearch} />
    </>
  );
}
