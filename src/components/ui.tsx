import { useEffect, useRef, useState, type ReactNode } from "react";
import { StarIcon } from "@/components/icons";

/** Fades children in the first time they scroll into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Small uppercase label + large heading with a gradient accent word. */
export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-[clamp(30px,4vw,45px)] font-semibold leading-[1.3] tracking-[-.02em] text-ink">
        {children}
      </h2>
    </div>
  );
}

export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-gradient">{children}</span>
);

/** Counts up to `value` once the element is visible. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return setN(value);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return (
    <span ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix && <span className="ml-1 text-[.6em] font-semibold">{suffix}</span>}
    </span>
  );
}

/** "4.9 ★★★★★ 4.1k+ review" card laid over photos. */
export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 bg-white px-5 py-4 shadow-lg ${className}`}
      aria-label="Rated 4.9 out of 5 from 4.1k+ reviews"
    >
      <span className="text-[44px] font-semibold leading-none text-[#7a7a7a]">4.9</span>
      <span className="flex flex-col gap-1">
        <span className="flex gap-0.5 text-[#f4a89a]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className="size-3" />
          ))}
        </span>
        <span className="text-sm text-[#7a7a7a]">4.1k+ review</span>
      </span>
    </div>
  );
}

/** Cross-fading image stack. `zoom` adds a slow Ken Burns zoom-out on every slide. */
export function Crossfade({
  images,
  interval = 6000,
  zoom = false,
  className = "",
}: {
  images: string[];
  interval?: number;
  zoom?: boolean;
  className?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(-1);
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setCurrent((c) => {
        setPrevious(c);
        return (c + 1) % images.length;
      });
    }, interval);
    return () => window.clearInterval(t);
  }, [visible, images.length, interval]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1600ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"} ${
            zoom && (i === current || i === previous) ? "agcs-zoom-out" : ""
          }`}
        />
      ))}
    </div>
  );
}
