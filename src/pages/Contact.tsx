import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Accent } from "@/components/ui";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import { SITE } from "@/data/site";

const info = [
  { icon: PinIcon, label: "Address", value: SITE.address, href: SITE.mapsUrl, external: true },
  { icon: MailIcon, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: PhoneIcon, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
];

const socials = [
  { label: "Facebook", href: SITE.facebook, icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com/", icon: TwitterIcon },
  { label: "Instagram", href: SITE.instagram, icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/", icon: YoutubeIcon },
];

export default function Contact() {
  return (
    <>
      <PageHero
        image="/images/heroes/contact.webp"
        tone="none"
        title={<span className="text-[#0a6cff]">Contact Us</span>}
        position="center"
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 text-[clamp(30px,4vw,45px)] font-semibold leading-[1.3] tracking-[-.02em]">
              Get in <Accent>Touch</Accent>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-[1.9] text-[#7a7a7a]">
              Visit our showroom, give us a call, or drop us a message—we’d love to assist you in
              bringing color to your world with Berger Paints. Let’s connect and make your space
              vibrant!
            </p>

            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {info.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className={label === "Address" ? "sm:col-span-2" : ""}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start gap-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-black text-white transition group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-pink">
                      <Icon className="size-[18px]" />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold leading-tight">{label}</span>
                      <span className="mt-1.5 block text-sm leading-[1.8] text-[#7a7a7a] transition group-hover:text-brand">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-2.5 border-t border-ink/20 pt-8">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-[34px] place-items-center rounded-full border border-ink/15 text-ink transition hover:border-transparent hover:bg-ink hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div id="form" className="scroll-mt-28 border border-ink/80 bg-white p-8 sm:p-10">
            <EnquiryForm />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[1200px] overflow-hidden bg-neutral-200">
          <iframe
            title="AGCS showroom on Google Maps"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[420px] w-full border-0 sm:h-[500px]"
          />
        </div>
      </section>
    </>
  );
}
