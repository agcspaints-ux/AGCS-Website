import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Accent, CountUp, RatingBadge, Reveal, SectionHeading } from "@/components/ui";
import { ABOUT_STATS, ABOUT_WHY, AWARDS } from "@/data/home";

export default function About() {
  return (
    <>
      <PageHero image="/images/heroes/about.webp" tone="light" title="About Us" position="center" />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src="/images/photos/colour-swatches.webp"
                alt="Paint colour swatches being reviewed"
                loading="lazy"
                className="aspect-[5/6] w-full object-cover"
              />
              <RatingBadge className="absolute bottom-0 right-0" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-5 text-[clamp(30px,4vw,45px)] font-semibold leading-[1.4] tracking-[-.02em]">
              Bringing Colors to Life with <Accent>Quality &amp; Innovation</Accent>
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-[#7a7a7a]">
              At <strong>AGCS Abundancia Global Colors</strong>, we are your trusted{" "}
              <strong>Berger Paints distributor</strong>, offering{" "}
              <strong>premium interior, exterior, and wood coatings</strong>. Our high-quality
              paints ensure <strong>durability, elegance, and a flawless finish</strong>. Visit our
              showroom and transform your space with colors that inspire!
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

      <section className="bg-lilac px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Our Stats">
            Delivering <Accent>Quality</Accent> Service Since 2005
          </SectionHeading>
          <div className="grid grid-cols-2 gap-y-12 text-center">
            {ABOUT_STATS.map((s) => (
              <Reveal key={s.label}>
                <p className="text-[clamp(34px,4vw,48px)] font-medium leading-none">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-[#7a7a7a]">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[clamp(30px,4vw,45px)] font-semibold tracking-[-.02em]">
            Awards &amp; <Accent>Recognitions</Accent>
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <figure className="text-center">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full bg-neutral-100 object-cover"
                  />
                  <figcaption className="mt-4">
                    <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
                    <p className="mt-1 text-sm text-[#7a7a7a]">{a.by}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Why Choose Us">
              Your <Accent>Best Choice</Accent> for Premium Paints
            </SectionHeading>
            <p className="text-sm leading-[1.9] text-[#7a7a7a]">
              At <strong>AGCS Abundancia Global Colors</strong>, we offer genuine Berger Paints with
              expert guidance, competitive prices, and fast availability. Whether for homes or
              businesses, our high-quality, long-lasting paints ensure a perfect finish every time!
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ABOUT_WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[22px] p-8 text-white">
                  <img
                    src={w.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 -z-20 size-full object-cover"
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-8 top-8 grid size-12 place-items-center rounded-full bg-white/90 text-lg font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[22px] font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-white/90">{w.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="relative isolate scroll-mt-24 px-6 py-24">
        <img
          src="/images/photos/couple-painting.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/20"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-[clamp(30px,4vw,45px)] font-semibold leading-[1.3] tracking-[-.02em]">
              Make Your Appointment Right Away
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.9] text-white/85">
              Ready to transform your space? Visit our showroom or book a consultation today. Let’s
              bring your dream colors to life with AGCS!
            </p>
          </div>
          <div className="bg-white p-8 shadow-2xl sm:p-10">
            <EnquiryForm submitLabel="Send Appointment" />
          </div>
        </div>
      </section>
    </>
  );
}
