import { CATEGORY_PAGES } from "@/data/catalog";

export const SITE = {
  name: "AGCS",
  fullName: "Abundancia Global Colors",
  tagline: "Colors that Inspire, Quality that Lasts",
  phone: "+91 81249 36369",
  phoneHref: "tel:+918124936369",
  whatsapp: "https://wa.me/918124936369",
  email: "agcs.paints@gmail.com",
  address: "2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai, Tamil Nadu - 600106",
  addressShort: "2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai - 600106",
  hours: "07:00 AM - 07:00 PM",
  mapsUrl: "https://maps.app.goo.gl/4ziyKjsCd7sEqKvQ7",
  mapsEmbed:
    "https://www.google.com/maps?q=2/9,+Murugesan+Street,+Balavinayagar+Nagar,+Arumbakkam,+Chennai&z=16&output=embed",
  facebook: "https://www.facebook.com/people/AGCS/61569880902910/",
  instagram: "https://www.instagram.com/agcs.paints/",
  credit: { label: "DataDriven Services", href: "https://datadriven-services.com/" },
} as const;

export interface NavLink {
  label: string;
  to: string;
}

/** Product categories shown in the Products menu, footer and home page, in display order. */
export const PRODUCT_LINKS: NavLink[] = [
  { label: "Interior Emulsion", to: "/interior-emulsion" },
  { label: "Exterior Emulsion", to: "/exterior-emulsion" },
  { label: "Wood Coating", to: "/wood-coating" },
  { label: "Enamel & Metal Primer", to: "/enamel-metal-primer" },
  { label: "Construction Chemicals", to: "/construction-chemicals" },
  { label: "Tools", to: "/tools" },
];

export const MAIN_NAV: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "FAQs", to: "/faqs" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

// ---------------------------------------------------------------------------
// Site search: every product plus the main pages
// ---------------------------------------------------------------------------
export interface SearchEntry {
  title: string;
  context: string;
  to: string;
  keywords: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  "/interior-emulsion": "Interior Emulsion",
  "/exterior-emulsion": "Exterior Emulsion",
  "/wood-coating": "Wood Coating",
  "/enamel-metal-primer": "Enamel & Metal Primer",
  "/construction-chemicals": "Construction Chemicals",
  "/tools": "Painting Tools",
};

export const SEARCH_INDEX: SearchEntry[] = [
  ...CATEGORY_PAGES.flatMap((page) =>
    page.products.map((p) => ({
      title: p.title,
      context: `${CATEGORY_LABELS[page.path]} · ${p.badge}`,
      to: `${page.path}?q=${encodeURIComponent(p.title)}#catalog`,
      keywords: [p.brand, ...p.chips, ...p.features.map((f) => `${f.title} ${f.desc}`)].join(" "),
    })),
  ),
  {
    title: "Frequently Asked Questions (FAQs)",
    context: "Help Centre",
    to: "/faqs",
    keywords: "delivery bulk consultation warranty hours",
  },
  {
    title: "Contact Us & Showroom Directions",
    context: "Arumbakkam, Chennai",
    to: "/contact-us",
    keywords: "quote phone email address store map",
  },
  {
    title: "About AGCS",
    context: "Authorised Berger Distributor",
    to: "/about-us",
    keywords: "company history chennai showroom awards",
  },
];

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return SEARCH_INDEX.filter((entry) => {
    const hay = `${entry.title} ${entry.context} ${entry.keywords}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  }).slice(0, limit);
}
