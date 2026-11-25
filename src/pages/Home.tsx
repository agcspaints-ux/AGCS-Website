import { useState } from "react";
import { Link } from "@/lib/router";
import { Accent, CountUp, Crossfade, RatingBadge, Reveal, SectionHeading } from "@/components/ui";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import {
  HOME_CATEGORIES,
  HOME_FAQS,
  HOME_STATS,
  REVIEWS,
  TRANSFORMATION_TILES,
  WHY_CHOOSE,
} from "@/data/home";

const HERO_TEXTURES = [
  "/images/textures/wall-plaster.webp",
  "/images/textures/wall-marble-light.webp",
  "/images/textures/wall-concrete.webp",
  "/images/textures/wall-marble.webp",
];
const SLIDES = Array.from(
  { length: 10 },
  (_, i) => `/images/home/slides/slide-${String(i + 1).padStart(2, "0")}.webp`,
);

const btnDark =
  "inline-flex items-center justify-center rounded-full bg-black px-8 py-[15px] text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-brand hover:to-pink";
const btnLine =
  "inline-flex items-center justify-center rounded-full border border-ink/70 px-8 py-[14px] text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-0 pt-36 text-center">
      <Crossfade images={HERO_TEXTURES} interval={7000} className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="eyebrow">Welcome to Abundancia Global ColorS</p>
        <img
          src="/images/home/berger-100-years.webp"
          alt="Berger Paints – 100 years of trust"
          width={2160}
          height={2160}
          fetchPriority="high"
          className="mx-auto -my-6 w-[min(300px,70vw)] sm:-my-8"
        />
        <h1 className="mx-auto max-w-4xl text-balance text-[clamp(40px,6vw,72px)] font-semibold leading-[1.18] tracking-[-.02em]">
          <Accent>Berger Paints</Accent>
          <br />
          Distributor in Chennai
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.9] text-[#7a7a7a]">
          We specialize in high-quality{" "}
          <strong className="font-semibold">exterior, interior, and wood coatings</strong> that
          bring elegance, protection, and durability to your spaces.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/#products" className={btnDark}>
            Get Started
          </Link>
          <Link to="/contact-us#form" className={btnLine}>
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <Crossfade
            images={SLIDES}
            zoom
            interval={6000}
            className="aspect-[2/1] min-h-[220px] w-full bg-neutral-200"
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-6 py-24 text-center">
      <SectionHeading eyebrow="Our Stats" align="center">
        Delivering <Accent>Quality</Accent> Paints Since 2005
      </SectionHeading>
      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-2 gap-y-10 lg:grid-cols-4">
        {HOME_STATS.map((s) => (
          <Reveal key={s.label}>
            <p className="text-[clamp(34px,4vw,48px)] font-medium leading-none">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-sm text-[#7a7a7a]">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="scroll-mt-24 px-6 pb-24 pt-8 text-center">
      <SectionHeading eyebrow="Our Products" align="center">
        Spreading the Joy of <Accent>Painting</Accent>
        <br className="hidden sm:block" /> &amp; Coloring
      </SectionHeading>
      <div className="mx-auto mt-14 grid max-w-[1200px] gap-px bg-transparent text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {HOME_CATEGORIES.map((c, i) => (
          <Reveal key={c.to} delay={(i % 3) * 80}>
            <Link
              to={c.to}
              className="group flex h-full min-h-[300px] flex-col border border-ink/80 p-10 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(17,19,24,.35)] lg:-ml-px lg:-mt-px"
            >
              <img
                src={c.icon}
                alt=""
                width={64}
                height={64}
                loading="lazy"
                className="size-16 object-contain"
              />
              <h3 className="mt-7 text-[23px] font-semibold leading-tight">{c.title}</h3>
              <p className="mt-3.5 text-sm leading-[1.8] text-[#7a7a7a]">{c.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">
                Read More{" "}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-lilac px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
            <img
              src="/images/photos/colour-swatches.webp"
              alt="Paint colour swatches being reviewed"
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
            <RatingBadge className="absolute bottom-5 right-5" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-5 text-[clamp(30px,4vw,45px)] font-semibold leading-[1.3] tracking-[-.02em]">
            <Accent>Futuristic</Accent> Ways to Color Your Minds
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a]">
            At <strong>AGCS Abundancia Global Colors</strong>, we bring innovation and quality
            together as an authorized distributor of <strong>Berger Paints</strong>. Whether it’s
            interior, exterior, or wood coatings, our premium range ensures durability, elegance,
            and a flawless finish. Visit our showroom and transform your space with colors that
            inspire!
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-ink/20 pt-8">
            <img
              src="/images/people/anu-varshini.webp"
              alt="Anu Varshini, owner"
              width={64}
              height={64}
              loading="lazy"
              className="size-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-[#7a7a7a]">Anu Varshini</p>
              <p className="text-sm text-[#7a7a7a]">Owner of Abundancia Global Colors</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Why Choose us">
            Your <Accent>Best Choice</Accent> for Premium Paints
          </SectionHeading>
          <ol className="mt-10 space-y-5">
            {WHY_CHOOSE.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <li className="flex items-center gap-5 border border-ink/80 px-6 py-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black text-xl font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-1 text-sm text-[#7a7a7a]">{w.text}</p>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal>
          <img
            src="/images/photos/couple-choosing-colour.webp"
            alt="A couple choosing paint colours together"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="px-6 pb-24 pt-8">
      <SectionHeading eyebrow="Experience the" align="center">
        <Accent>Transformation</Accent> with Premium <br className="hidden sm:block" />
        Berger Paints!
      </SectionHeading>
      <div className="mx-auto mt-14 grid max-w-[1200px] gap-5 sm:grid-cols-2">
        {TRANSFORMATION_TILES.map((t, i) => (
          <Reveal key={t.to} delay={(i % 2) * 90}>
            <Link
              to={t.to}
              className="group relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-neutral-200"
            >
              <img
                src={t.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-6 left-6 bg-white px-5 py-4">
                <span className="block text-lg font-semibold underline underline-offset-4">
                  {t.title}
                </span>
                <span className="mt-1 block text-sm text-[#7a7a7a]">{t.caption}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const half = Math.ceil(HOME_FAQS.length / 2);
  const columns = [HOME_FAQS.slice(0, half), HOME_FAQS.slice(half)];
  return (
    <section id="faq" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="FAQs">
            Frequently <Accent>Asked</Accent> <br className="hidden sm:block" />
            Questions
          </SectionHeading>
          <Link to="/contact-us" className={btnDark}>
            Contact Us
          </Link>
        </div>
        <div className="mt-12 grid items-start gap-x-6 gap-y-3 lg:grid-cols-2">
          {columns.map((col, c) => (
            <div key={c} className="space-y-3">
              {col.map((f, i) => {
                const idx = c * half + i;
                const isOpen = open === idx;
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className={`flex w-full items-center justify-between gap-4 border px-6 py-4 text-left text-[15px] font-semibold underline underline-offset-4 transition ${
                        isOpen
                          ? "border-black bg-black text-white"
                          : "border-ink/70 bg-white hover:bg-neutral-50"
                      }`}
                    >
                      {f.q}
                      <ChevronDownIcon
                        className={`size-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-8 py-5 text-sm leading-[1.9] text-[#7a7a7a]">{f.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  const step = (d: number) => setI((v) => (v + d + REVIEWS.length) % REVIEWS.length);
  return (
    <section className="bg-lilac px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <img
            src="/images/photos/happy-client.webp"
            alt="A happy AGCS client"
            loading="lazy"
            className="aspect-[5/6] w-full object-cover"
          />
          <RatingBadge className="absolute bottom-5 right-5" />
        </div>
        <div>
          <SectionHeading eyebrow="Client Reviews">
            Positive <Accent>Reviews</Accent> From Our Clients
          </SectionHeading>
          <figure
            key={i}
            className="mt-10 animate-[fade-in_.5s_ease] border border-ink/80 bg-lilac p-8"
          >
            <blockquote className="text-[15px] leading-[1.9] text-[#7a7a7a]">{r.text}</blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <img
                src={r.avatar}
                alt=""
                width={56}
                height={56}
                loading="lazy"
                className="size-14 rounded-full object-cover"
              />
              <span>
                <span className="block font-semibold">{r.name}</span>
                <span className="text-sm text-[#7a7a7a]">{r.role}</span>
              </span>
            </figcaption>
          </figure>
          <div className="mt-6 flex gap-5 text-ink">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous review"
              className="p-1 transition hover:-translate-x-0.5 hover:text-brand"
            >
              <ArrowLeftIcon className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next review"
              className="p-1 transition hover:translate-x-0.5 hover:text-brand"
            >
              <ArrowRightIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <About />
      <WhyChoose />
      <Transformation />
      <Faq />
      <Reviews />
    </>
  );
}
