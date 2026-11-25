import type { ReactNode } from "react";
import { Link } from "@/lib/router";

export interface HeroConfig {
  image: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { label: string; to: string };
  align?: "left" | "center";
  /** dark photos get a white title and a soft shade, light photos keep dark text */
  tone?: "dark" | "light" | "purple" | "none";
  /** CSS background-position for the photo */
  position?: string;
}

/** Full-width banner at the top of every inner page. */
export default function PageHero({
  image,
  title,
  subtitle,
  cta,
  align = "left",
  tone = "dark",
  position = "center",
}: HeroConfig) {
  const center = align === "center";
  const light = tone === "light";
  const large = tone === "light" || tone === "none";
  return (
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden md:min-h-[min(70vh,620px)]">
      <img
        src={image}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
        style={{ objectPosition: position }}
      />
      {tone === "dark" && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${center ? "bg-black/35" : "bg-gradient-to-r from-black/65 via-black/35 to-black/5"}`}
        />
      )}
      {tone === "purple" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c0a2b]/85 via-[#3b1456]/55 to-[#1c0a2b]/25"
        />
      )}
      {light && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white/70 via-white/20 to-transparent"
        />
      )}

      <div
        className={`mx-auto w-full max-w-[1200px] px-6 pb-16 pt-36 ${center ? "text-center" : ""}`}
      >
        <div className={center ? "mx-auto max-w-3xl" : "max-w-2xl"}>
          <h1
            className={`text-balance font-semibold leading-[1.18] tracking-[-.015em] ${
              large
                ? "text-[clamp(44px,7vw,84px)] font-bold leading-[1.05] text-ink"
                : "text-[clamp(28px,4vw,44px)] text-white"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 text-lg leading-relaxed ${large ? "text-ink/70" : "text-white/90"}`}
            >
              {subtitle}
            </p>
          )}
          {cta && (
            <Link
              to={cta.to}
              className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(118,45,151,.8)] transition hover:-translate-y-0.5 hover:bg-[#8a38ad]"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
