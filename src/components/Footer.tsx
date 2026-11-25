import { Link, useLocation } from "@/lib/router";
import { PRODUCT_LINKS, QUICK_LINKS, SITE } from "@/data/site";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from "@/components/icons";

const socialClass =
  "grid size-10 place-items-center rounded-full border border-ink/10 bg-white text-[#1f2430] shadow-[0_4px_12px_-6px_rgba(17,19,24,.14)] transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-brand hover:to-pink hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(118,45,151,.5)]";

const linkClass = (active: boolean) =>
  `group/link inline-flex items-center gap-2 py-1.5 text-[14.5px] font-medium transition hover:text-brand ${active ? "font-semibold text-brand" : "text-[#454c5c]"}`;

const dot = (active: boolean) =>
  `size-1.5 rounded-full bg-gradient-to-br from-brand to-pink transition-all ${
    active
      ? "scale-100 opacity-100"
      : "-ml-3.5 scale-50 opacity-0 group-hover/link:ml-0 group-hover/link:scale-100 group-hover/link:opacity-100"
  }`;

function Heading({ children }: { children: string }) {
  return (
    <h3 className="mb-[18px] mt-1 text-[12.5px] font-bold uppercase tracking-[.14em] text-ink">
      {children}
    </h3>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <>
      <span className="mt-px grid size-9 shrink-0 place-items-center rounded-[11px] border border-brand/15 bg-white text-brand shadow-[0_4px_10px_-5px_rgba(118,45,151,.2)] transition group-hover/contact:border-transparent group-hover/contact:bg-gradient-to-br group-hover/contact:from-brand group-hover/contact:to-pink group-hover/contact:text-white">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#7b8191]">
          {label}
        </span>
        <span className="break-words text-sm font-medium leading-normal text-[#262b38] transition group-hover/contact:text-brand">
          {value}
        </span>
      </span>
    </>
  );
  const cls = "group/contact flex items-start gap-3";
  if (!href) return <div className={cls}>{body}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <a href={href} className={cls}>
      {body}
    </a>
  );
}

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="relative isolate overflow-hidden border-t border-brand/10 bg-[radial-gradient(780px_380px_at_8%_0%,rgba(118,45,151,.065),transparent_70%),radial-gradient(680px_360px_at_92%_16%,rgba(217,70,143,.055),transparent_70%),linear-gradient(180deg,#FCFAFE_0%,#F7F2FB_54%,#EFE8F6_100%)]">
      <div className="mx-auto max-w-[1240px] px-4 pt-10 sm:px-5 lg:px-6 lg:pt-16">
        {/* showroom call-to-action */}
        <div className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[22px] border border-white/10 bg-ink bg-[radial-gradient(540px_280px_at_94%_-12%,rgba(217,70,143,.36),transparent_64%),radial-gradient(520px_300px_at_6%_118%,rgba(118,45,151,.45),transparent_66%)] px-[22px] py-7 shadow-[0_28px_64px_-24px_rgba(17,19,24,.42)] sm:gap-9 sm:rounded-[28px] sm:px-9 sm:py-9 lg:flex-row lg:items-center lg:px-12 lg:py-11">
          <div className="relative max-w-[630px]">
            <div className="mb-4 inline-flex items-center gap-[9px] rounded-full border border-white/15 bg-white/[.08] px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-[1.3] tracking-[.08em] text-[#f3e8ff] sm:px-3.5 sm:py-[7px] sm:text-[11.5px] sm:tracking-[.16em]">
              <span
                aria-hidden="true"
                className="size-[7px] shrink-0 rounded-full bg-gradient-to-br from-[#c084fc] to-[#f472b6] shadow-[0_0_10px_rgba(244,114,182,.75)]"
              />
              Chennai Showroom · 7:00 AM – 7:00 PM
            </div>
            <h2 className="mb-3 text-[clamp(28px,3.3vw,40px)] font-bold leading-[1.14] tracking-[-.025em] text-white">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-[#e2a8ff] via-[#ff7ac6] to-[#ffc68a] bg-clip-text text-transparent">
                Showroom
              </span>
            </h2>
            <p className="text-[15px] leading-[1.68] text-white/75">
              Experience our premium range of Berger Paints in person. Drop by our Chennai showroom
              for shade cards, computerised tinting, and expert advice for your space.
            </p>
          </div>
          <div className="relative flex w-full flex-wrap items-center gap-3 sm:w-auto">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex flex-1 items-center justify-center gap-[9px] whitespace-nowrap rounded-full border border-white bg-white px-5 py-3.5 text-[13.5px] font-bold text-ink shadow-[0_12px_28px_-10px_rgba(0,0,0,.45)] transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-brand hover:to-pink hover:text-white hover:shadow-[0_16px_32px_-10px_rgba(217,70,143,.55)] sm:flex-none sm:px-[26px] sm:text-sm"
            >
              Visit Now{" "}
              <ArrowUpRightIcon className="size-[15px] transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
            <Link
              to="/contact-us#form"
              className="group/btn inline-flex flex-1 items-center justify-center gap-[9px] whitespace-nowrap rounded-full border border-white/20 bg-white/[.08] px-5 py-3.5 text-[13.5px] font-bold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 sm:flex-none sm:px-[26px] sm:text-sm"
            >
              Get a Quote{" "}
              <ArrowRightIcon className="size-[15px] transition-transform group-hover/btn:translate-x-[3px]" />
            </Link>
          </div>
        </div>

        {/* directory */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-[30px] py-10 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-[minmax(245px,1.38fr)_minmax(175px,1fr)_minmax(150px,.86fr)_minmax(245px,1.28fr)] lg:gap-x-9 lg:gap-y-10 lg:pb-[46px] lg:pt-[58px]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Abundancia Global Colors home"
              className="mb-4 inline-block transition hover:opacity-90"
            >
              <img
                src="/images/brand/agcs-logo.webp"
                width={800}
                height={162}
                alt="AGCS – Abundancia Global Colors"
                loading="lazy"
                className="h-10 w-auto sm:h-[46px]"
              />
            </Link>
            <p className="mb-[18px] max-w-[420px] text-sm leading-[1.68] text-[#4b5262] lg:max-w-[320px]">
              Authorised Berger Paints distributor in Chennai delivering genuine interior, exterior,
              wood, metal, and waterproofing coatings since 2005.
            </p>
            <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/85 px-[13px] py-[7px] text-[11.5px] font-semibold leading-tight text-[#4c1d6e] shadow-[0_6px_16px_-10px_rgba(118,45,151,.25)]">
              <ShieldCheckIcon className="size-3.5 shrink-0 text-brand" />
              Authorised Berger Distributor · Est. 2005
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialClass}
              >
                <FacebookIcon className="size-[17px]" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialClass}
              >
                <InstagramIcon className="size-[17px]" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialClass}
              >
                <WhatsAppIcon className="size-[17px]" />
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Showroom directions"
                className={socialClass}
              >
                <PinIcon className="size-[17px]" />
              </a>
            </div>
          </div>

          <nav aria-label="Products">
            <Heading>Products</Heading>
            <ul>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass(pathname === l.to)}>
                    <span className={dot(pathname === l.to)} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quicklinks">
            <Heading>Quicklinks</Heading>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass(pathname === l.to)}>
                    <span className={dot(pathname === l.to)} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-1">
            <Heading>Get In Touch</Heading>
            <div className="flex flex-col gap-[13px]">
              <ContactItem
                icon={<PinIcon className="size-4" />}
                label="Showroom"
                value={SITE.addressShort}
                href={SITE.mapsUrl}
                external
              />
              <ContactItem
                icon={<PhoneIcon className="size-4" />}
                label="Phone"
                value={SITE.phone}
                href={SITE.phoneHref}
              />
              <ContactItem
                icon={<MailIcon className="size-4" />}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactItem
                icon={<ClockIcon className="size-4" />}
                label="Showroom Hours"
                value={SITE.hours}
              />
            </div>
          </div>
        </div>

        {/* legal bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-3.5 border-t border-ink/10 pb-[26px] pt-5 sm:flex-row sm:items-center sm:gap-4 sm:pb-7 sm:pt-[22px]">
          <p className="text-[13.5px] leading-normal text-[#5e6575]">
            Copyright © {SITE.fullName} ·{" "}
            <a
              href={SITE.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1f2430] transition hover:text-brand"
            >
              {SITE.credit.label}
            </a>
          </p>
          <div className="flex w-full items-center justify-between gap-3.5 sm:w-auto sm:justify-end">
            <span className="inline-flex items-center gap-3.5 text-[13.5px] font-medium text-[#4a5060]">
              <Link
                to="/privacy-policy"
                className={`transition hover:text-brand ${pathname === "/privacy-policy" ? "text-brand" : ""}`}
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="size-1 rounded-full bg-ink/20" />
              <Link
                to="/terms-and-conditions"
                className={`transition hover:text-brand ${pathname === "/terms-and-conditions" ? "text-brand" : ""}`}
              >
                Terms &amp; Conditions
              </Link>
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              title="Back to top"
              className="ml-1 grid size-9 place-items-center rounded-full border border-ink/12 bg-white text-[#1f2430] shadow-[0_4px_10px_-5px_rgba(17,19,24,.18)] transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white"
            >
              <ArrowUpIcon className="size-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
