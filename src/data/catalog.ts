// Generated from the original page content. Edit freely: this is the single source of truth for the product pages.
import type { FeatureIconName } from "@/components/FeatureIcon";

export interface Tone {
  /** CSS background for the product stage */
  stage?: string;
  /** colour of the badge dot */
  dot?: string;
  /** colour of the small brand line above the title */
  brand?: string;
  /** feature icon colours */
  icon?: { bg: string; border: string; color: string };
}

export interface Feature {
  icon: FeatureIconName;
  title: string;
  desc: string;
}

export interface Product {
  category: string;
  image: string;
  alt: string;
  badge: string;
  brand: string;
  title: string;
  chips: string[];
  features: Feature[];
  /** structured highlights / dimensions box (not every product has one) */
  specs?: { title: string; table?: boolean; items: [label: string, value: string][] };
}

export interface CategoryTab {
  id: string;
  label: string;
}

export interface SystemStep {
  kicker: string;
  title: string;
  text: string;
}

export interface CategoryPage {
  slug: string;
  /** public route */
  path: string;
  eyebrow: string;
  /** [plain text, gradient accent] */
  title: [string, string];
  /** `**bold**` marks emphasised phrases */
  subtitle: string;
  /** two columns instead of three on wide screens */
  twoColumn?: boolean;
  searchPlaceholder: string;
  tabs: CategoryTab[];
  tones: Record<string, Tone>;
  products: Product[];
  empty: { title: string; text: string; button: string };
  system: { kicker: string; title: string; text: string; steps: SystemStep[]; cta: string };
}

export const CATEGORY_PAGES: CategoryPage[] = [
  {
    slug: "wood-coating",
    path: "/wood-coating",
    eyebrow: "Berger WoodTech & WoodKeeper Range",
    title: ["Wood ", "Coating"],
    subtitle:
      "Enhance and protect your wood surfaces with our premium wood coatings, offering lasting durability, rich finish, and superior resistance against wear and tear.",
    searchPlaceholder: "Search products or benefits...",
    tabs: [
      { id: "all", label: "All Products" },
      { id: "finishes", label: "Topcoats & Polishes" },
      { id: "prep", label: "Sealers, Primers & Stains" },
      { id: "protection", label: "Anti-Termite Care" },
    ],
    tones: {
      finishes: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F6E4C2 100%)",
        dot: "#D97706",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
      },
      prep: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FAF0EA 66%, #EFE0D4 100%)",
        dot: "#9A3412",
        icon: { bg: "#FDF5F0", border: "rgba(154, 52, 18, 0.16)", color: "#9A3412" },
      },
      protection: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #EDF8F2 66%, #D7EFE2 100%)",
        dot: "#059669",
        icon: { bg: "#EEFBF4", border: "rgba(5, 150, 105, 0.18)", color: "#047857" },
      },
    },
    products: [
      {
        category: "prep",
        image: "/images/products/wood-coating/NC-Sanding-Sealer.webp",
        alt: "NC Sanding Sealer for Wood",
        badge: "Sealer & Undercoat",
        brand: "WoodTech System",
        title: "NC Sanding Sealer for Wood",
        chips: ["Grain Filling Undercoat", "Ragging Application"],
        features: [
          {
            icon: "dollar",
            title: "Cost Effective",
            desc: "WoodTech NC Sanding Sealer is an economical undercoat system which provides desired grain filling.",
          },
          {
            icon: "bolt",
            title: "Fast Drying",
            desc: "This is a fast drying product.",
          },
          {
            icon: "checkCircle",
            title: "Compatibility",
            desc: "Can be applied on wood quickly, simply by ragging.",
          },
        ],
      },
      {
        category: "finishes",
        image: "/images/products/wood-coating/Woodkeeper-1K-PU.webp",
        alt: "WoodKeeper 1K PU",
        badge: "1K Polyurethane",
        brand: "WoodKeeper Range",
        title: "WoodKeeper 1K PU",
        chips: ["Interior & Exterior", "Cloth Application"],
        features: [
          {
            icon: "home",
            title: "Dual Usage",
            desc: "Woodkeeper 1K PU wood paint is meant for both Interior & Exterior wood.",
          },
          {
            icon: "thumbsUp",
            title: "Very Easy to Apply",
            desc: "Woodkeeper 1K PU does not require a spray gun and can be applied with a cloth.",
          },
          {
            icon: "box",
            title: "Ready to Use Product",
            desc: "Open the lid & Apply, if required GP thinner can be added to this wood paint colour.",
          },
        ],
      },
      {
        category: "finishes",
        image: "/images/products/wood-coating/Imperia-Breatheasy.webp",
        alt: "Imperia Breathe Easy",
        badge: "German Tech · Low VOC",
        brand: "Imperia Luxury Woodcare",
        title: "Imperia Breathe Easy",
        chips: ["Antimicrobial & Non-Toxic", "Brush or Roller"],
        features: [
          {
            icon: "star",
            title: "Premium Aesthetics",
            desc: "Enhances wooden surfaces with German technology, offering non-toxic, antimicrobial benefits for improved air quality in hotels or offices.",
          },
          {
            icon: "command",
            title: "Ease of Use",
            desc: "Apply with brush or roller—no air-assisted spray needed. Regular emulsion applicators can achieve results; no skilled wood finisher required.",
          },
          {
            icon: "book",
            title: "Heritage Furniture",
            desc: "Heritage furniture can be overcoated after light sanding; does not need stripping of old polish.",
          },
        ],
      },
      {
        category: "prep",
        image: "/images/products/wood-coating/Woodkeeper-Wood-Stainer.webp",
        alt: "WoodKeeper Wood Stainer",
        badge: "Tintable Wood Stain",
        brand: "WoodKeeper Range",
        title: "WoodKeeper Wood Stainer",
        chips: ["Rich Grain Definition", "Raw & Precoated Wood"],
        features: [
          {
            icon: "droplet",
            title: "Colour Strength",
            desc: "Colour strength is high as a result of which it looks beautiful once applied.",
          },
          {
            icon: "eye",
            title: "Highlights Grain",
            desc: "Berger WoodKeeper Wood Stainer brings out the grain pattern of your wooden surfaces to make it more noticeable and increase its appeal.",
          },
          {
            icon: "layers",
            title: "Seamless Application",
            desc: "This tintable exterior wood stain is easy to apply on all kinds of wooden surfaces, from raw wood to precoated wood.",
          },
        ],
      },
      {
        category: "finishes",
        image: "/images/products/wood-coating/Luxol-Clear-Varnish.webp",
        alt: "Luxol Clear Varnish",
        badge: "Clear Gloss Varnish",
        brand: "Luxol Classic Finish",
        title: "Luxol Clear Varnish",
        chips: ["Wet-Look Shine", "Brush or Cloth"],
        features: [
          {
            icon: "sun",
            title: "High Clarity & Gloss",
            desc: "Delivers a wet-look finish with exceptional shine.",
          },
          {
            icon: "dollar",
            title: "Cost-Effective",
            desc: "Long-lasting gloss with great value for money.",
          },
          {
            icon: "shield",
            title: "Safe Application",
            desc: "Apply with a brush or cloth; free from harmful chemicals.",
          },
        ],
      },
      {
        category: "finishes",
        image: "/images/products/wood-coating/Ezee-Hand-Polish.webp",
        alt: "Ezee Hand Polish",
        badge: "Low-Odour Hand Polish",
        brand: "WoodKeeper Polish",
        title: "Ezee Hand Polish",
        chips: ["High Transparency", "Minimal Odour"],
        features: [
          {
            icon: "wind",
            title: "Fast Drying",
            desc: "A quick drying solvent base wood polish with high transparency & excellent applicability.",
          },
          {
            icon: "sparkles",
            title: "Low Smell",
            desc: "Woodkeeper Ezee Hand Polish has minimal odour, which is one of the lowest smell in its category.",
          },
          {
            icon: "star",
            title: "Hi-Gloss",
            desc: "Designed to enhance warm wood tones, it builds up a properly filled surface to produce an elegant glossy finish.",
          },
        ],
      },
      {
        category: "prep",
        image: "/images/products/wood-coating/Imperia-Epoxy-Block-Primeer.webp",
        alt: "Imperia Epoxy Block Primer",
        badge: "Epoxy Block Primer",
        brand: "Imperia Wood Preparation",
        title: "Imperia Epoxy Block Primer",
        chips: ["Tannin & Resin Lock", "Interior & Exterior"],
        features: [
          {
            icon: "shield",
            title: "Prevents Leaching",
            desc: "It penetrates into the substrate & captures the tannins, resins and glue for surface protection.",
          },
          {
            icon: "layers",
            title: "Improves Adhesion",
            desc: "Prevents leaching of Wood & this improves adhesion & peeling of coatings.",
          },
          {
            icon: "home",
            title: "Dual Usage",
            desc: "Meant for both Interior & Exterior Wood.",
          },
        ],
      },
      {
        category: "protection",
        image: "/images/products/wood-coating/Wood-Protektor-Anti-Termite.webp",
        alt: "Wood Protektor Anti-Termite (Spray)",
        badge: "GreenPro Spray",
        brand: "Wood Protektor Defense",
        title: "Wood Protektor Anti-Termite (Spray)",
        chips: ["Green Pro Certified", "Fastener Safe"],
        features: [
          {
            icon: "shieldCheck",
            title: "Anti Termites",
            desc: "It is an effective anti-termite preservative ensuring the longevity of the wooden structure.",
          },
          {
            icon: "wrench",
            title: "Usability",
            desc: "Simple to use, corrosion and erosion-resistant for metal or plastic fasteners used with treated products.",
          },
          {
            icon: "leaf",
            title: "Green Pro Certified",
            desc: "It’s Green Pro Certified, validating the company's efforts towards a cleaner, more sustainable future.",
          },
        ],
      },
      {
        category: "protection",
        image: "/images/products/wood-coating/Wood-Protektor-Anti-Termite-Liquid.webp",
        alt: "Wood Protektor Anti-Termite (Liquid)",
        badge: "Preservative Liquid",
        brand: "Wood Protektor Defense",
        title: "Wood Protektor Anti-Termite (Liquid)",
        chips: ["Hardwood & Softwood", "Topcoat Compatible"],
        features: [
          {
            icon: "shieldCheck",
            title: "Anti Termites",
            desc: "It is an effective anti-termite preservative ensuring the longevity of the wooden structure.",
          },
          {
            icon: "layers",
            title: "Compatibility",
            desc: "It is designed for use on wood and is compatible with most wood decorative coatings.",
          },
          {
            icon: "dollar",
            title: "Effectiveness",
            desc: "Wood Protektor protects hardwoods and softwoods from wood borers under a budget.",
          },
        ],
      },
    ],
    empty: {
      title: "No matching wood coatings found",
      text: "Try clearing your search or switching back to all 9 Berger wood coating products.",
      button: "Show All 9 Products",
    },
    system: {
      kicker: "Complete Woodcare System",
      title: "Recommended 3-Stage Protection",
      text: "Pair Berger primers, stains, and topcoats for lasting furniture & architectural woodwork.",
      steps: [
        {
          kicker: "Step 01 · Protect",
          title: "Termite & Resin Guard",
          text: "Wood Protektor Spray/Liquid & Imperia Epoxy Block Primer",
        },
        {
          kicker: "Step 02 · Seal & Tone",
          title: "Grain Fill & Rich Stain",
          text: "NC Sanding Sealer & WoodKeeper Wood Stainer",
        },
        {
          kicker: "Step 03 · Finish",
          title: "Lasting Topcoat & Gloss",
          text: "WoodKeeper 1K PU, Imperia Breathe Easy, Luxol & Ezee Polish",
        },
      ],
      cta: "Request Bulk Quote",
    },
  },
  {
    slug: "tools",
    path: "/tools",
    eyebrow: "Berger Painting Tools & Accessories",
    title: ["", "Tools"],
    subtitle:
      "Achieve precision and efficiency with **Berger Tools**. Designed for both professionals and DIY enthusiasts, our high-quality rollers, brushes, and sanding sheets ensure smooth application, superior coverage, and effortless finishing. Whether for interiors or exteriors, Berger Tools make every painting job easier and more effective.",
    twoColumn: true,
    searchPlaceholder: "Search tools, grit size, sleeve...",
    tabs: [
      { id: "all", label: "All Tools" },
      { id: "prep", label: "Surface Sanding" },
      { id: "application", label: "Paint Rollers" },
    ],
    tones: {
      prep: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F7EFFA 66%, #EADBF3 100%)",
        dot: "#762D97",
      },
      application: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F5E2BC 100%)",
        dot: "#D97706",
        brand: "#9A5812",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
      },
    },
    products: [
      {
        category: "prep",
        image: "/images/products/tools/AGCS-12.png",
        alt: "Wet & Dry Sheets",
        badge: "Abrasive Sanding Sheets",
        brand: "Berger Surface Preparation",
        title: "Wet & Dry Sheets",
        chips: ["Wall & Wood Sanding", "Grit 80 – 1000", "50 Sheets / Packet"],
        features: [
          {
            icon: "wind",
            title: "Less Clogging",
            desc: "Designed to resist clogging, ensuring a smoother sanding experience with minimal material buildup for consistent performance.",
          },
          {
            icon: "shieldCheck",
            title: "Better Durability",
            desc: "Made with high-quality abrasives, these sheets last longer, reducing the need for frequent replacements and improving efficiency.",
          },
          {
            icon: "layers",
            title: "Superior Finish",
            desc: "Provides an even and refined surface, making it ideal for both wet and dry sanding applications across various materials.",
          },
        ],
        specs: {
          title: "Dimensions & Pack Details",
          items: [
            ["Usage Area", "Wall & Wood Sanding"],
            ["Sheet Size", "22 cm × 28 cm"],
            ["Grit Sizes", "80 – 1000"],
            ["Backing & Pack", "Heavy Duty Paper · 50 Sheets"],
          ],
          table: true,
        },
      },
      {
        category: "application",
        image: "/images/products/tools/AGCS-13.png",
        alt: "Rollers",
        badge: "6-Inch Foam Roller",
        brand: "Berger Precision Applicators",
        title: "Rollers",
        chips: ["6-Inch Foam Sleeve", "Interior & Exterior", "Washable & Reusable"],
        features: [
          {
            icon: "roller",
            title: "6-Inch Foam Roller Sleeve",
            desc: "Ensures even paint distribution for a flawless finish.",
          },
          {
            icon: "home",
            title: "Both Interior & Exterior",
            desc: "Suitable for all surfaces, delivering professional results.",
          },
          {
            icon: "droplet",
            title: "Easy to Clean",
            desc: "Washable and reusable for hassle-free maintenance.",
          },
          {
            icon: "dollar",
            title: "Value for Money",
            desc: "Durable, efficient, and cost-effective for all painting needs.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Sleeve Format", "6-Inch High-Density Foam"],
            ["Surfaces", "Interior & Exterior Walls/Wood"],
            ["Maintenance", "Washable & Reusable"],
            ["Coverage", "Smooth, Streak-Free Coat"],
          ],
        },
      },
    ],
    empty: {
      title: "No matching painting tools found",
      text: "Try clearing your search or switching back to all Berger tools.",
      button: "Show All Tools",
    },
    system: {
      kicker: "Pro Painting Workflow",
      title: "Built for Trade & Home Projects",
      text: "Stock genuine Berger sanding sheets, rollers, and accessories in retail or contractor bulk packs.",
      steps: [
        {
          kicker: "Step 01 · Coarse Prep",
          title: "Level Walls & Wood",
          text: "80 – 220 grit Wet & Dry sheets for fast leveling",
        },
        {
          kicker: "Step 02 · Fine Polish",
          title: "Silky Undercoat Key",
          text: "320 – 1000 grit wet/dry sanding between coats",
        },
        {
          kicker: "Step 03 · Smooth Coat",
          title: "Uniform Roller Finish",
          text: "6-inch Berger foam roller sleeve for even coverage",
        },
      ],
      cta: "Order Bulk Supply",
    },
  },
  {
    slug: "enamel-metal-primer",
    path: "/enamel-metal-primer",
    eyebrow: "Berger Enamel & Metal Primer",
    title: ["Enamel & Metal Primer", "Enamel"],
    subtitle:
      "**Berger Enamel Paint** delivers a glossy, durable finish for metal, wood, and masonry, while **Berger Metal Primer** builds a strong, rust-resistant base for superior adhesion. Together they give lasting protection against stains, moisture, and wear.",
    twoColumn: true,
    searchPlaceholder: "Search enamel, primer, gloss, corrosion...",
    tabs: [
      { id: "all", label: "All Products" },
      { id: "enamel", label: "Enamel" },
      { id: "primer", label: "Metal Primer" },
      { id: "coating", label: "Protective Coating" },
    ],
    tones: {
      enamel: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F7EFFA 66%, #EADBF3 100%)",
        dot: "#762D97",
      },
      primer: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F5E2BC 100%)",
        dot: "#D97706",
        brand: "#9A5812",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
      },
      coating: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F1F5F7 66%, #D9E3E8 100%)",
        dot: "#4B6A7A",
        brand: "#3F5B6A",
        icon: { bg: "#F1F6F8", border: "rgba(75, 106, 122, 0.2)", color: "#3F5B6A" },
      },
    },
    products: [
      {
        category: "enamel",
        image: "/images/products/enamel-metal-primer/Butterfly-GP-Enamel-can.webp",
        alt: "Butterfly GP Enamel",
        badge: "Gloss Enamel",
        brand: "Berger Enamel Range",
        title: "Butterfly GP Enamel",
        chips: ["Gloss Finish", "Doors, Windows & Grills", "Value for Money"],
        features: [
          {
            icon: "sparkle",
            title: "Excellent Gloss Finish",
            desc: "Berger's Butterfly Enamel Paint has excellent gloss properties for doors, windows, grills, etc., making them look good for years.",
          },
          {
            icon: "shieldCheck",
            title: "Durability",
            desc: "The tough solvent based coating of this gloss enamel paint is suitable for Indian weather conditions, providing sustainable cover.",
          },
          {
            icon: "layers",
            title: "Value For Money",
            desc: "It gives a durable and glossy finish at value for money rates.",
          },
        ],
        specs: {
          title: "Product Highlights",
          items: [
            ["Type", "General Purpose Gloss Enamel"],
            ["Base", "Solvent Based"],
            ["Best For", "Doors, Windows, Grills"],
            ["Positioning", "Value for Money"],
          ],
        },
      },
      {
        category: "enamel",
        image: "/images/products/enamel-metal-primer/Luxol-Hi-Gloss-can.webp",
        alt: "Luxol Hi-Gloss Enamel",
        badge: "Hi-Gloss Enamel",
        brand: "Berger Luxol Range",
        title: "Luxol Hi-Gloss Enamel",
        chips: ["Mirror-like Gloss", "Metal & Masonry", "Oil Based"],
        features: [
          {
            icon: "sparkle",
            title: "Mirror-like Finish",
            desc: "Luxol high gloss enamel paint gives a mirror like gloss for doors, windows, grills and masonry surfaces making them look good for years.",
          },
          {
            icon: "shieldCheck",
            title: "Tough Film",
            desc: "This high gloss enamel paint has an oil based protective covering that acts as a shield for your doors, windows, grills, etc.",
          },
          {
            icon: "droplet",
            title: "Durability",
            desc: "The tough solvent based coating of this gloss enamel paint is suitable for Indian weather conditions, providing sustainable cover.",
          },
        ],
        specs: {
          title: "Product Highlights",
          items: [
            ["Type", "High Gloss Enamel"],
            ["Base", "Oil / Solvent Based"],
            ["Surfaces", "Doors, Windows, Grills, Masonry"],
            ["Finish", "Mirror-like Gloss"],
          ],
        },
      },
      {
        category: "enamel",
        image: "/images/products/enamel-metal-primer/Luxol-PU-enamel-can.webp",
        alt: "Luxol PU Enamel",
        badge: "PU Enamel",
        brand: "Berger Luxol Range",
        title: "Luxol PU Enamel",
        chips: ["Super Gloss", "Extra Coverage", "Extra Hiding"],
        features: [
          {
            icon: "sparkle",
            title: "Super Gloss Finish",
            desc: "Experience increased surface aesthetics with a mirror-like gloss finish using Luxol PU Enamel to enhance the vibrancy of your space.",
          },
          {
            icon: "layers",
            title: "Extra Coverage",
            desc: "Berger Luxol PU Enamel offers surplus coverage to reach all the corners of your surfaces.",
          },
          {
            icon: "checkCircle",
            title: "Extra Hiding",
            desc: "Eliminate all kinds of surface irregularities with Luxol PU Enamel.",
          },
        ],
        specs: {
          title: "Product Highlights",
          items: [
            ["Type", "Polyurethane Enamel"],
            ["Finish", "Super Gloss, Mirror-like"],
            ["Coverage", "Surplus / Extra Coverage"],
            ["Hiding", "Conceals Surface Irregularities"],
          ],
        },
      },
      {
        category: "primer",
        image: "/images/products/enamel-metal-primer/Red-Oxide-Primer-can_0.webp",
        alt: "Red Oxide Primer",
        badge: "Metal Primer",
        brand: "Berger Metal Primers",
        title: "Red Oxide Primer",
        chips: ["Metal Surfaces", "High Opacity", "Easy Brushing"],
        features: [
          {
            icon: "checkCircle",
            title: "High Opacity",
            desc: "Berger red oxide primer has excellent opacity, providing good coverage to hide surface imperfections.",
          },
          {
            icon: "shieldCheck",
            title: "Provides Tough Film",
            desc: "Red oxide primer provides a tough film, making it durable and long-lasting.",
          },
          {
            icon: "pencil",
            title: "Easy Brushability",
            desc: "Red oxide primer has Good Brushability.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Type", "Red Oxide Metal Primer"],
            ["Use", "Base Coat on Metal"],
            ["Application", "Brush Friendly"],
            ["Film", "Tough & Long-lasting"],
          ],
        },
      },
      {
        category: "primer",
        image: "/images/products/enamel-metal-primer/BP-Zinc-Yellow-Primer-can.webp",
        alt: "BP Zinc Yellow Primer",
        badge: "Metal Primer",
        brand: "Berger Metal Primers",
        title: "BP Zinc Yellow Primer",
        chips: ["Anti-Corrosive", "Metal Surfaces", "Easy Brushing"],
        features: [
          {
            icon: "shieldCheck",
            title: "Anti-Corrosive",
            desc: "BP Zinc Yellow Primer provide protection against corrosion.",
          },
          {
            icon: "layers",
            title: "Provides Tough Film",
            desc: "Zinc Yellow Primer provides a tough film, making it durable and long-lasting.",
          },
          {
            icon: "pencil",
            title: "Easy Brushability",
            desc: "Berger Paints Yellow Metal Primer has good brushability, supporting even and smooth application.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Type", "Zinc Yellow Metal Primer"],
            ["Protection", "Corrosion Resistant"],
            ["Application", "Smooth, Even Brushing"],
            ["Film", "Tough & Long-lasting"],
          ],
        },
      },
      {
        category: "coating",
        image: "/images/products/enamel-metal-primer/AGCS-11.png",
        alt: "Salvaline ALM Paint",
        badge: "Protective Coating",
        brand: "Berger Protective Coatings",
        title: "Salvaline ALM Paint",
        chips: ["Aluminium Finish", "Dual-Container", "Metal & Wood"],
        features: [
          {
            icon: "sparkle",
            title: "Superior Shiny Finish",
            desc: "Provides a bright, silvery sheen on metal and wooden surfaces, enhancing aesthetics and durability.",
          },
          {
            icon: "layers",
            title: "Dual-Container Formula",
            desc: "Comes with a separate aluminium paste and medium, ensuring better application and long-lasting performance.",
          },
          {
            icon: "shieldCheck",
            title: "Versatile & Protective",
            desc: "Ideal for chimneys, gas holders, oil tanks, steel structures, grills, gates, shutters, and roofs, offering excellent resistance to weather and corrosion.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Type", "Aluminium Paint (Paste + Medium)"],
            ["Surfaces", "Metal & Wooden"],
            ["Used On", "Tanks, Chimneys, Gates, Roofs"],
            ["Resistance", "Weather & Corrosion"],
          ],
        },
      },
    ],
    empty: {
      title: "No matching products found",
      text: "Try clearing your search or switching back to all enamel and primer products.",
      button: "Show All Products",
    },
    system: {
      kicker: "Protect & Finish System",
      title: "From Bare Metal to Brilliant Gloss",
      text: "Stock genuine Berger enamels, metal primers and protective coatings in retail or contractor bulk packs.",
      steps: [
        {
          kicker: "Step 01 · Prime",
          title: "Rust-resistant Base",
          text: "Red Oxide or Zinc Yellow Primer for adhesion and corrosion protection",
        },
        {
          kicker: "Step 02 · Enamel",
          title: "Glossy Durable Coat",
          text: "Butterfly GP, Luxol Hi-Gloss or Luxol PU Enamel for lasting shine",
        },
        {
          kicker: "Step 03 · Protect",
          title: "Weather & Corrosion Shield",
          text: "Salvaline ALM for tanks, roofs, gates and steel structures",
        },
      ],
      cta: "Order Bulk Supply",
    },
  },
  {
    slug: "construction-chemicals",
    path: "/construction-chemicals",
    eyebrow: "Berger HomeShield Range",
    title: ["Construction ", "Chemicals"],
    subtitle:
      "Strengthen and protect your home with **Berger Construction Chemicals**. From waterproofing admixtures to high-bond tile adhesives and grouts, our advanced formulas ensure durability, crack resistance, and long-term structural integrity.",
    searchPlaceholder: "Search tile adhesive, waterproofing, grout...",
    tabs: [
      { id: "all", label: "All Products" },
      { id: "adhesives", label: "Tile & Stone Adhesives" },
      { id: "admixtures", label: "Waterproofing & Admixtures" },
      { id: "grouts", label: "Tile Grouts" },
    ],
    tones: {
      adhesives: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F6E4C2 100%)",
        dot: "#D97706",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
        brand: "#9A5812",
      },
      admixtures: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #EDF7F6 66%, #D4ECE9 100%)",
        dot: "#0D9488",
        icon: { bg: "#EFFAF9", border: "rgba(13, 148, 136, 0.18)", color: "#0F766E" },
        brand: "#0F766E",
      },
      grouts: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F7EFFA 66%, #EADBF3 100%)",
        dot: "#762D97",
        icon: { bg: "#F8F5FA", border: "rgba(118, 45, 151, 0.16)", color: "#762D97" },
        brand: "#762D97",
      },
    },
    products: [
      {
        category: "grouts",
        image: "/images/products/construction-chemicals/33.webp",
        alt: "Epoxy Tile Grout",
        badge: "UV-Stable Epoxy Grout",
        brand: "HomeShield Tile Grouts",
        title: "Epoxy Tile Grout",
        chips: ["UV & Colour Stable", "Abrasion Resistant", "Indoor & Outdoor"],
        features: [
          {
            icon: "sunDim",
            title: "UV Resistance",
            desc: "Offers prolonged durability & colour stability in outdoor environments and harsh weather conditions.",
          },
          {
            icon: "shieldCheck",
            title: "Abrasion Resistance",
            desc: "Features exceptional resistance to abrasion, ensuring durability over time.",
          },
          {
            icon: "layers",
            title: "Easy to Spread",
            desc: "Offers effortless spreading for a smooth and efficient application process.",
          },
        ],
        specs: {
          title: "Technical Highlights",
          items: [
            ["Chemistry", "Epoxy Joint Grout"],
            ["Exposure", "Indoor & Harsh Outdoor"],
            ["Colour Hold", "UV-Stable Finish"],
            ["Wear Rating", "High Abrasion Resistance"],
          ],
        },
      },
      {
        category: "admixtures",
        image: "/images/products/construction-chemicals/35.webp",
        alt: "Advanced Latex Plus",
        badge: "Latex Bonding & Waterproofing",
        brand: "HomeShield Concrete Care",
        title: "Advanced Latex Plus",
        chips: ["Non-Toxic Polymer", "Concrete Hardness", "Multi-Substrate Bond"],
        features: [
          {
            icon: "bolt",
            title: "Easy to Use",
            desc: "HS Latex Plus is an easy to use, non-toxic product that makes application efficient.",
          },
          {
            icon: "shieldCheck",
            title: "Abrasion Resistance",
            desc: "Application of the product improves abrasion resistance by increasing the hardness of the cured concrete.",
          },
          {
            icon: "link",
            title: "Bond Strength",
            desc: "Showcases excellent bonding strength with concrete, brick, plaster and other cured substrates.",
          },
        ],
        specs: {
          title: "Technical Highlights",
          items: [
            ["Type", "Modified Latex Polymer"],
            ["Substrates", "Concrete, Brick & Plaster"],
            ["Safety", "Non-Toxic Formula"],
            ["Cured Concrete", "Higher Surface Hardness"],
          ],
        },
      },
      {
        category: "admixtures",
        image: "/images/products/construction-chemicals/36.webp",
        alt: "Cementmix Plus",
        badge: "Integral Waterproofing",
        brand: "HomeShield Admixtures",
        title: "Cementmix Plus",
        chips: ["Integral Waterproofing", "Prevents Bleeding", "Cohesive Concrete"],
        features: [
          {
            icon: "layers",
            title: "Workability",
            desc: "Improves workability without increasing water content.",
          },
          {
            icon: "checkCircle",
            title: "Prevents Bleeding",
            desc: "Makes the concrete more unified and cohesive.",
          },
          {
            icon: "droplet",
            title: "Water Permeability",
            desc: "Prevents water permeability into reinforced structures.",
          },
        ],
        specs: {
          title: "Technical Highlights",
          items: [
            ["Type", "Integral Liquid Admixture"],
            ["Water Ratio", "Workable Without Extra Water"],
            ["Mix Quality", "Unified, Non-Bleeding Mix"],
            ["Protection", "Reinforced Concrete Shield"],
          ],
        },
      },
      {
        category: "admixtures",
        image: "/images/products/construction-chemicals/37.webp",
        alt: "Power Plasticizer",
        badge: "Chloride-Free Plasticizer",
        brand: "HomeShield Admixtures",
        title: "Power Plasticizer",
        chips: ["Chloride Free", "PPC, PSC & SRC Ready", "Rebar Safe"],
        features: [
          {
            icon: "droplet",
            title: "Waterproofing",
            desc: "Enhances impermeability of water into reinforced structure.",
          },
          {
            icon: "layers",
            title: "Enhanced Scope",
            desc: "Compatible with all types of cement inclusive of PPC, PSC & SRC.",
          },
          {
            icon: "shieldCheck",
            title: "Corrosion Passivator",
            desc: "Chloride Free, does not attack the reinforcement.",
          },
        ],
        specs: {
          title: "Technical Highlights",
          items: [
            ["Type", "Concrete Water Plasticizer"],
            ["Cement Types", "OPC, PPC, PSC & SRC"],
            ["Rebar Safety", "Chloride-Free Passivator"],
            ["Impermeability", "Dense Waterproof Matrix"],
          ],
        },
      },
      {
        category: "adhesives",
        image: "/images/products/construction-chemicals/32.webp",
        alt: "Tile Bond Hi-Flex",
        badge: "Large-Format Cladding Bond",
        brand: "HomeShield Tile Adhesives",
        title: "Tile Bond Hi-Flex",
        chips: ["Large Format Tiles & Stone", "External Cladding", "No Vertical Slip"],
        features: [
          {
            icon: "download",
            title: "No Vertical Slip",
            desc: "Stays in place after application, allowing for precise bonding on vertical or inclined surfaces.",
          },
          {
            icon: "clock",
            title: "Extended Open Time",
            desc: "Extended open time allows more flexibility of time for positioning and adjusting materials before the adhesive sets. Useful for fixing large format of tiles & stones.",
          },
          {
            icon: "link",
            title: "Excellent Adhesion",
            desc: "Outstanding mechanical strength enables the adhesive to hold large format fixing material effectively where external cladding is required.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Best For", "Large Format Tiles & Stone"],
            ["Use Case", "Vertical & External Cladding"],
            ["Open Time", "Extended Adjustment Time"],
            ["Hold", "High Mechanical Strength"],
          ],
        },
      },
      {
        category: "adhesives",
        image: "/images/products/construction-chemicals/31.webp",
        alt: "HomeShield Tile Bond Anti-Slip",
        badge: "Polymer Anti-Slip Bond",
        brand: "HomeShield Tile Adhesives",
        title: "HomeShield Tile Bond Anti-Slip",
        chips: ["Polymer Modified", "Vertical & Inclined", "Extended Open Time"],
        features: [
          {
            icon: "link",
            title: "Polymer Adhesive",
            desc: "Ensures improved adhesion, enhanced bonding strength and durability.",
          },
          {
            icon: "download",
            title: "No Vertical Slip",
            desc: "Stays in place after application, allowing for precise bonding on vertical or inclined surfaces.",
          },
          {
            icon: "clock",
            title: "Extended Open Time",
            desc: "Extended open time allows more flexibility of time for positioning and adjusting materials before the adhesive sets. Useful for fixing large format of tiles & stones.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Formulation", "Polymer-Modified Adhesive"],
            ["Surfaces", "Vertical & Inclined Walls"],
            ["Format Support", "Large Tiles & Natural Stone"],
            ["Slip Control", "Zero Vertical Slip"],
          ],
        },
      },
      {
        category: "adhesives",
        image: "/images/products/construction-chemicals/30.webp",
        alt: "HomeShield Tile Adhesive Plus",
        badge: "Thixotropic Non-Sag Bond",
        brand: "HomeShield Tile Adhesives",
        title: "HomeShield Tile Adhesive Plus",
        chips: ["Just Add Water", "Non-Sagging Paste", "Long-Lasting Bond"],
        features: [
          {
            icon: "bolt",
            title: "Ready To Use",
            desc: "The product just needs water and you can use it conveniently.",
          },
          {
            icon: "link",
            title: "Bond Strength",
            desc: "This leads to longer-lasting bonds and reduces the need for repairs or replacements.",
          },
          {
            icon: "download",
            title: "Good Thixotropic",
            desc: "The non-sagging thixotropic property ensures that the adhesive does not sag after application, allowing for precise placement and strong bonds.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Preparation", "Ready-to-Use (Add Water)"],
            ["Rheology", "Non-Sagging Thixotropic"],
            ["Placement", "Precise Bed Alignment"],
            ["Lifecycle", "Reduced Repair & Debonding"],
          ],
        },
      },
      {
        category: "adhesives",
        image: "/images/products/construction-chemicals/29.webp",
        alt: "HomeShield Tile Adhesive",
        badge: "Self-Curing Waterproof Bond",
        brand: "HomeShield Tile Adhesives",
        title: "HomeShield Tile Adhesive",
        chips: ["Self-Curing", "Waterproof Adhesion", "Just Add Water"],
        features: [
          {
            icon: "bolt",
            title: "Easy to Use",
            desc: "The product is simple to use and just needs water for convenient application.",
          },
          {
            icon: "droplet",
            title: "Superior Adhesion",
            desc: "Provides better waterproofing and adhesion than mortar-based adhesives.",
          },
          {
            icon: "clock",
            title: "Self-Curing",
            desc: "Quick self-curing that speeds up the adhesion process and secures the tiles.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Preparation", "Single-Pack (Add Water)"],
            ["Curing", "Fast Self-Curing Action"],
            ["Waterproofing", "Outperforms Sand-Cement"],
            ["Application", "Interior Floor & Wall Tiles"],
          ],
        },
      },
      {
        category: "grouts",
        image: "/images/products/construction-chemicals/34.webp",
        alt: "Tile Grout",
        badge: "Non-Shrink Joint Grout",
        brand: "HomeShield Tile Grouts",
        title: "Tile Grout",
        chips: ["No Shrinkage", "High-Traffic Areas", "Easy to Clean"],
        features: [
          {
            icon: "layers",
            title: "Easy to Spread",
            desc: "Offers effortless spreading for a smooth and efficient application process.",
          },
          {
            icon: "sparkle",
            title: "Easy to Clean",
            desc: "Designed for easy cleaning, ensuring convenient maintenance and upkeep.",
          },
          {
            icon: "shieldCheck",
            title: "No Shrinkage",
            desc: "Can be used in commercial spaces, high traffic areas and industrial areas.",
          },
        ],
        specs: {
          title: "Application Highlights",
          items: [
            ["Joint Stability", "Crack-Free, Zero Shrinkage"],
            ["Zones", "Commercial, Industrial & Home"],
            ["Traffic Load", "High-Traffic Rated"],
            ["Upkeep", "Easy-Clean Smooth Joints"],
          ],
        },
      },
    ],
    empty: {
      title: "No matching construction chemicals found",
      text: "Try clearing your search or switching back to all Berger HomeShield products.",
      button: "Show All Products",
    },
    system: {
      kicker: "Complete HomeShield System",
      title: "3-Stage Structural & Tile Protection",
      text: "Pair Berger waterproofing admixtures, polymer tile adhesives, and non-shrink grouts for leak-free concrete and lasting tile work.",
      steps: [
        {
          kicker: "Step 01 · Waterproof",
          title: "Impermeable Concrete & Plaster",
          text: "Cementmix Plus, Power Plasticizer & Advanced Latex Plus",
        },
        {
          kicker: "Step 02 · Bond Tiles",
          title: "Zero-Slip Polymer Adhesion",
          text: "Tile Bond Hi-Flex, Anti-Slip & Tile Adhesive Plus",
        },
        {
          kicker: "Step 03 · Seal Joints",
          title: "UV & Traffic-Ready Grout",
          text: "Epoxy Tile Grout & non-shrink Tile Grout",
        },
      ],
      cta: "Request Bulk Quote",
    },
  },
  {
    slug: "interior-emulsion",
    path: "/interior-emulsion",
    eyebrow: "Berger Silk, Easy Clean & Bison Range",
    title: ["Interior ", "Emulsions"],
    subtitle:
      "Transform your living spaces with **Berger Interior Emulsion Paints** — spanning ultra-luxurious **Silk Glamor**, air-purifying **Silk Breathe Easy**, stain-resistant **Easy Clean**, and high-coverage **Bison** emulsions for smooth, vibrant, long-lasting indoor walls.",
    searchPlaceholder: "Search Silk, Easy Clean, Bison, sheen, matt...",
    tabs: [
      { id: "all", label: "All Emulsions" },
      { id: "luxury", label: "Luxury Emulsions" },
      { id: "premium", label: "Premium Emulsions" },
      { id: "economy", label: "Economy Emulsions" },
    ],
    tones: {
      premium: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F6E4C2 100%)",
        dot: "#D97706",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
        brand: "#9A5812",
      },
      economy: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #EDF7F6 66%, #D4ECE9 100%)",
        dot: "#0D9488",
        icon: { bg: "#EFFAF9", border: "rgba(13, 148, 136, 0.18)", color: "#0F766E" },
        brand: "#0F766E",
      },
      luxury: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F7EFFA 66%, #EADBF3 100%)",
        dot: "#762D97",
        icon: { bg: "#F8F5FA", border: "rgba(118, 45, 151, 0.16)", color: "#762D97" },
        brand: "#762D97",
      },
    },
    products: [
      {
        category: "luxury",
        image: "/images/products/interior-emulsion/silk-glamour-hiigh.webp",
        alt: "Silk Glamor High Sheen",
        badge: "Luxury · High Sheen",
        brand: "Berger Silk Luxury Range",
        title: "Silk Glamor High Sheen",
        chips: ["Crystal Reflective Tech", "Elastomeric Crack-Fill", "Low Smell"],
        features: [
          {
            icon: "sparkle",
            title: "Ultra Smooth Finish",
            desc: "Berger Glamor High Sheen luxury wall paint makes your walls look like a million bucks! The high emulsion content with Crystal Reflective technology offers an excellent adhesion to the wall.",
          },
          {
            icon: "layers",
            title: "Elastomeric Film",
            desc: "The Elastomeric Film of the Berger Glamor paint fills up hairline cracks ensuring the walls look flawless!",
          },
          {
            icon: "wind",
            title: "Low Smell",
            desc: "Specially formulated design to minimize the strong and unpleasant odours associated with traditional paints.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Luxury · Ultra High Sheen"],
            ["Technology", "Crystal Reflective Emulsion"],
            ["Crack Control", "Elastomeric Hairline Fill"],
            ["Indoor Comfort", "Low-Odour Formulation"],
          ],
        },
      },
      {
        category: "luxury",
        image: "/images/products/interior-emulsion/silk-glamour-soft.webp",
        alt: "Silk Glamor Soft Sheen",
        badge: "Luxury · Soft Sheen",
        brand: "Berger Silk Luxury Range",
        title: "Silk Glamor Soft Sheen",
        chips: ["Velvety Soft Sheen", "High Scrub Resistance", "Anti-Bacteria"],
        features: [
          {
            icon: "droplet",
            title: "High Scrub Resistance",
            desc: "Easy maintenance and scrub resistance to keep your walls free from stains and damage.",
          },
          {
            icon: "sparkle",
            title: "Rich Appearance",
            desc: "A special effect paint, specifically formulated for smooth application and rich appearance on interior walls.",
          },
          {
            icon: "shieldCheck",
            title: "Anti-Bacteria & Pollution",
            desc: "Highly breathable paint that fights bacteria and pollution, keeping your walls safe and healthy.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Luxury · Rich Soft Sheen"],
            ["Cleanability", "High Scrub & Stain Guard"],
            ["Wall Hygiene", "Anti-Bacteria & Pollution"],
            ["Ideal Spaces", "Living Rooms, Suites & Hotels"],
          ],
        },
      },
      {
        category: "premium",
        image: "/images/products/interior-emulsion/silk-breathe-easy.webp",
        alt: "Silk Breathe Easy",
        badge: "Premium · Healthy Air",
        brand: "Berger Silk Premium Range",
        title: "Silk Breathe Easy",
        chips: ["Anti-Bacteria & Pollution", "Breathable Film", "Scrub Resistant"],
        features: [
          {
            icon: "droplet",
            title: "High Scrub Resistance",
            desc: "Easy maintenance and scrub resistance to keep your walls free from stains and damage.",
          },
          {
            icon: "sparkle",
            title: "Rich Appearance",
            desc: "A special effect paint, specifically formulated for smooth application and rich appearance on interior walls.",
          },
          {
            icon: "wind",
            title: "Anti-Bacteria & Pollution",
            desc: "Highly breathable paint that fights bacteria and pollution, keeping your walls safe and healthy.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Premium · Silky Smooth"],
            ["Air Care", "Breathable Anti-Pollution"],
            ["Maintenance", "High Scrub Washability"],
            ["Ideal Spaces", "Bedrooms, Nurseries & Homes"],
          ],
        },
      },
      {
        category: "premium",
        image: "/images/products/interior-emulsion/easy-clean.webp",
        alt: "Easy Clean",
        badge: "Premium · High Washability",
        brand: "Berger Easy Clean Range",
        title: "Easy Clean",
        chips: ["Cross-Linking Polymers", "Stain Wipe-Off", "Anti-Fading"],
        features: [
          {
            icon: "link",
            title: "Cross-Linking Polymers",
            desc: "It contains cross-linking polymers that work as a non-porous paint for walls.",
          },
          {
            icon: "sunDim",
            title: "Anti Fading",
            desc: "Easy Clean paint offers ultimate protection to walls, keeping them freshly painted for years.",
          },
          {
            icon: "droplet",
            title: "High Washability",
            desc: "Wall stains are removed easily as this extremely durable washable paint ensures a polished look always.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Premium · Polished Finish"],
            ["Polymer Tech", "Non-Porous Cross-Linking"],
            ["Cleanability", "Easy Household Stain Wipe"],
            ["Longevity", "Fade-Resistant Fresh Look"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/interior-emulsion/bison-glow.webp",
        alt: "Bison Glow",
        badge: "Economy · Soft Sheen",
        brand: "Berger Bison Range",
        title: "Bison Glow",
        chips: ["Soft Sheen Finish", "Superior Coverage", "Acrylic Binder"],
        features: [
          {
            icon: "layers",
            title: "Better Coverage",
            desc: "Bison Glow Acrylic Interior Emulsion offers superior coverage compared to standard emulsions.",
          },
          {
            icon: "link",
            title: "Acrylic Emulsion",
            desc: "Water-based polymer serves as a strong binder contributing to the paint’s durability and adhesion.",
          },
          {
            icon: "sparkle",
            title: "Soft Sheen Finish",
            desc: "Bison Glow interior emulsion paint imparts a sheen finish to the interior walls.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Economy · Soft Sheen"],
            ["Binder", "Water-Based Acrylic Polymer"],
            ["Spread Rate", "Superior Wall Coverage"],
            ["Positioning", "Value Sheen Interior Paint"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/interior-emulsion/bison.webp",
        alt: "Bison Emulsion",
        badge: "Economy · Smooth Matt",
        brand: "Berger Bison Range",
        title: "Bison Emulsion",
        chips: ["2x Distemper Coverage", "Full ColorBank Shades", "Stylish Matt"],
        features: [
          {
            icon: "palette",
            title: "Wide Shade Range",
            desc: "Bison Emulsion offers you the entire colorbank range of shades to choose from, as opposed to limited shades of distemper.",
          },
          {
            icon: "checkCircle",
            title: "Matt Finish",
            desc: "Bison Emulsion gives a smooth and stylish matt finish to your interior walls.",
          },
          {
            icon: "layers",
            title: "Better Coverage",
            desc: "Bison Acrylic Emulsion spreads twice as much as distemper, thereby covering twice your wall space compared to that of distemper.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Economy · Smooth Matt"],
            ["Coverage", "2x Wall Area vs. Distemper"],
            ["Shade Access", "Full Berger ColorBank"],
            ["Best For", "Smart Upgrade from Distemper"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/interior-emulsion/bison-lit.webp",
        alt: "Bison Lite",
        badge: "Economy · Vivid Matt",
        brand: "Berger Bison Range",
        title: "Bison Lite",
        chips: ["Vivid Shades", "Scratch-Resistant Matt", "Smooth Topcoat"],
        features: [
          {
            icon: "palette",
            title: "Wide Shade Range",
            desc: "Available in vivid shades to match different aesthetics.",
          },
          {
            icon: "shieldCheck",
            title: "Matt Finish",
            desc: "Distinctive matt finish for consistent shades and resistance to scratches.",
          },
          {
            icon: "layers",
            title: "Smooth Finish",
            desc: "Reduces friction of surface for easy topcoat application.",
          },
        ],
        specs: {
          title: "Finish & Performance",
          items: [
            ["Tier & Sheen", "Economy · Consistent Matt"],
            ["Surface Guard", "Scratch-Resistant Film"],
            ["Application", "Low-Friction Smooth Coat"],
            ["Shade Style", "Vivid Contemporary Palette"],
          ],
        },
      },
    ],
    empty: {
      title: "No matching interior emulsions found",
      text: "Try clearing your search or switching back to all Luxury, Premium, and Economy emulsions.",
      button: "Show All Emulsions",
    },
    system: {
      kicker: "Berger ColorBank Tinting",
      title: "Choose the Right Tier for Every Room",
      text: "Custom computer-tinted in thousands of Berger shades at our Arumbakkam showroom for homes, offices & hospitality spaces.",
      steps: [
        {
          kicker: "Tier 01 · Luxury",
          title: "Silk Glamor High & Soft Sheen",
          text: "Crystal-reflective sheen, hairline crack bridging & low smell for signature rooms",
        },
        {
          kicker: "Tier 02 · Premium",
          title: "Silk Breathe Easy & Easy Clean",
          text: "Anti-bacteria breathable walls & cross-linking washable stain defence",
        },
        {
          kicker: "Tier 03 · Economy",
          title: "Bison Glow, Emulsion & Lite",
          text: "2x distemper coverage with full ColorBank shades in soft sheen or matt",
        },
      ],
      cta: "Explore Shades & Quote",
    },
  },
  {
    slug: "exterior-emulsion",
    path: "/exterior-emulsion",
    eyebrow: "Berger WeatherCoat & Walmasta Range",
    title: ["Exterior ", "Emulsions"],
    subtitle:
      "Give your home long-lasting beauty and protection with our range of **Berger Exterior Emulsion Paints**. Engineered to withstand harsh sun, monsoon rain, dust, and algal growth with vibrant colour retention and up to 10-year warranty protection.",
    searchPlaceholder: "Search WeatherCoat, Walmasta, warranty, dust...",
    tabs: [
      { id: "all", label: "All Emulsions" },
      { id: "luxury", label: "Luxury (8–10 Yr)" },
      { id: "premium", label: "Premium (6 Yr)" },
      { id: "economy", label: "Economy Range" },
    ],
    tones: {
      premium: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #FDF4E3 66%, #F6E4C2 100%)",
        dot: "#D97706",
        icon: { bg: "#FEF9EE", border: "rgba(217, 119, 6, 0.18)", color: "#B45309" },
        brand: "#9A5812",
      },
      economy: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #EDF7F6 66%, #D4ECE9 100%)",
        dot: "#0D9488",
        icon: { bg: "#EFFAF9", border: "rgba(13, 148, 136, 0.18)", color: "#0F766E" },
        brand: "#0F766E",
      },
      luxury: {
        stage: "radial-gradient(circle at 50% 38%, #FFFFFF 0%, #F7EFFA 66%, #EADBF3 100%)",
        dot: "#762D97",
        icon: { bg: "#F8F5FA", border: "rgba(118, 45, 151, 0.16)", color: "#762D97" },
        brand: "#762D97",
      },
    },
    products: [
      {
        category: "luxury",
        image: "/images/products/exterior-emulsion/Weathercoat-Long-Life-Flexo.webp",
        alt: "Weathercoat Long Life Flexo",
        badge: "Luxury · 8-Year Warranty",
        brand: "Berger WeatherCoat Luxury",
        title: "Weathercoat Long Life Flexo",
        chips: ["8-Year Warranty", "Silicon Rain Shield", "Hairline Crack Cover"],
        features: [
          {
            icon: "shieldCheck",
            title: "8 Years Warranty",
            desc: "Excellent protection against rain, heat and dust.",
          },
          {
            icon: "droplet",
            title: "Silicon Protection",
            desc: "Silicon additives help protect house exteriors from the impact of rain for life.",
          },
          {
            icon: "layers",
            title: "Cover Hairline Cracks",
            desc: "Conceals hairline cracks, ensuring a smooth, durable, and flawless finish for enhanced surface appearance and longevity.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Luxury · 8 Years"],
            ["Rain Defence", "Silicon Additive Shield"],
            ["Crack Bridging", "Conceals Hairline Cracks"],
            ["Climate Guard", "Heavy Rain, Heat & Dust"],
          ],
        },
      },
      {
        category: "luxury",
        image: "/images/products/exterior-emulsion/Untitled-design-3.png",
        alt: "Weathercoat Long Life 10",
        badge: "Luxury · 10-Year Warranty",
        brand: "Berger WeatherCoat Luxury",
        title: "Weathercoat Long Life 10",
        chips: ["10-Year Warranty", "PU Silicon Tech", "High Dust Repellence"],
        features: [
          {
            icon: "shieldCheck",
            title: "10 Years Warranty",
            desc: "Excellent protection against rain, heat and dust.",
          },
          {
            icon: "wind",
            title: "Dust Repellence",
            desc: "High Dust Pick up resistance.",
          },
          {
            icon: "droplet",
            title: "Water Repellence",
            desc: "PU silicon protection against extreme rainfall.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Luxury · 10 Years"],
            ["Polymer Tech", "PU Silicon Formulation"],
            ["Dust Control", "High Dust-Pickup Resistance"],
            ["Monsoon Guard", "Extreme Rainfall Repellence"],
          ],
        },
      },
      {
        category: "premium",
        image:
          "/images/products/exterior-emulsion/weathercoat-anti-dustt-can__1_-removebg-preview.webp",
        alt: "Weathercoat Anti Dustt",
        badge: "Premium · 6-Year Warranty",
        brand: "Berger WeatherCoat Premium",
        title: "Weathercoat Anti Dustt",
        chips: ["6-Year Warranty", "Dust Guard Tech", "High Sheen Finish"],
        features: [
          {
            icon: "shieldCheck",
            title: "6 Years Warranty",
            desc: "Protects the exterior walls from weather extremities.",
          },
          {
            icon: "wind",
            title: "Dust Guard Technology",
            desc: "Dust Guard technology ensures superior protection against environmental dust.",
          },
          {
            icon: "sparkle",
            title: "High Sheen Finish",
            desc: "High sheen finish that enhances the beauty of your home.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Premium · 6 Years"],
            ["Surface Shield", "Dust Guard Technology"],
            ["Finish", "Radiant High Sheen"],
            ["Ideal For", "Urban & Roadside Facades"],
          ],
        },
      },
      {
        category: "premium",
        image:
          "/images/products/exterior-emulsion/weathercoat_glow_paint_can-02__1_-removebg-preview_enhanced.webp",
        alt: "Weathercoat Glow",
        badge: "Premium · 6-Year Warranty",
        brand: "Berger WeatherCoat Premium",
        title: "Weathercoat Glow",
        chips: ["6-Year Warranty", "Stay-Clean Rain Wash", "Rich Sheen Finish"],
        features: [
          {
            icon: "shieldCheck",
            title: "6 Years Warranty",
            desc: "Protects the exterior walls from weather extremities.",
          },
          {
            icon: "droplet",
            title: "Stay Clean Formula",
            desc: "Auto cleaning of exterior surface with oncoming rain.",
          },
          {
            icon: "sparkle",
            title: "Rich Sheen Finish",
            desc: "High sheen finish that enhances the beauty of your home.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Premium · 6 Years"],
            ["Self-Cleaning", "Rain-Activated Stay Clean"],
            ["Finish", "Rich Exterior Sheen"],
            ["Climate Guard", "Sun, Rain & Fungal Defence"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/exterior-emulsion/Walmasta-Glow-paint-can-02_enhanced.webp",
        alt: "Walmasta Glow",
        badge: "Economy · 4-Year Warranty",
        brand: "Berger Walmasta Range",
        title: "Walmasta Glow",
        chips: ["4-Year Warranty", "Anti-Algal & Fungal", "Acrylic Binder"],
        features: [
          {
            icon: "sunDim",
            title: "4 Years Warranty",
            desc: "Excellent protection against dry climatic condition.",
          },
          {
            icon: "link",
            title: "Acrylic Emulsion",
            desc: "Water based polymer serving as a strong binder contributing to the paint’s durability and adhesion.",
          },
          {
            icon: "leaf",
            title: "Anti Algal/Fungal",
            desc: "Protection against algal fungal growth.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Economy · 4 Years"],
            ["Binder", "Water-Based Acrylic Polymer"],
            ["Bio-Protection", "Anti-Algal & Anti-Fungal"],
            ["Climate Fit", "Dry & Warm Climates"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/exterior-emulsion/walmasta-lite-can-1.webp",
        alt: "Walmasta Lite",
        badge: "Economy · 2-Year Warranty",
        brand: "Berger Walmasta Range",
        title: "Walmasta Lite",
        chips: ["2-Year Warranty", "Anti-Algal & Fungal", "Smooth Matt"],
        features: [
          {
            icon: "shieldCheck",
            title: "2 Years Warranty",
            desc: "Walmasta Paint has a 2 year performance warranty.",
          },
          {
            icon: "leaf",
            title: "Anti Algal/Fungal",
            desc: "Excellent protection against algal/fungal growth.",
          },
          {
            icon: "checkCircle",
            title: "Matt Finish",
            desc: "Economy Emulsion with smooth matt finish.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Economy · 2 Years"],
            ["Finish", "Smooth Exterior Matt"],
            ["Bio-Protection", "Algal & Fungal Resistant"],
            ["Positioning", "Value Exterior Refresh"],
          ],
        },
      },
      {
        category: "economy",
        image: "/images/products/exterior-emulsion/Walmasta-can.webp",
        alt: "Walmasta",
        badge: "Economy · 6-Year Warranty",
        brand: "Berger Walmasta Range",
        title: "Walmasta",
        chips: ["6-Year Warranty", "Stay-Clean Formula", "Rich Sheen"],
        features: [
          {
            icon: "shieldCheck",
            title: "6 Years Warranty",
            desc: "Protects the exterior walls from weather extremities.",
          },
          {
            icon: "droplet",
            title: "Stay Clean Formula",
            desc: "Auto cleaning of exterior surface with oncoming rain.",
          },
          {
            icon: "sparkle",
            title: "Rich Sheen Finish",
            desc: "High sheen finish that enhances the beauty of your home.",
          },
        ],
        specs: {
          title: "Weather & Durability Specs",
          items: [
            ["Tier & Warranty", "Economy · 6 Years"],
            ["Self-Cleaning", "Rain-Activated Stay Clean"],
            ["Finish", "Rich Exterior Sheen"],
            ["Weather Guard", "All-Season Facade Care"],
          ],
        },
      },
    ],
    empty: {
      title: "No matching exterior emulsions found",
      text: "Try clearing your search or switching back to all WeatherCoat and Walmasta products.",
      button: "Show All Emulsions",
    },
    system: {
      kicker: "Chennai Sun, Rain & Dust Defence",
      title: "Warranty-Backed Exterior Protection",
      text: "Computer-tinted in UV-stable Berger exterior shades at our Arumbakkam showroom for villas, apartments & commercial facades.",
      steps: [
        {
          kicker: "Tier 01 · 8–10 Yr Luxury",
          title: "WeatherCoat Long Life 10 & Flexo",
          text: "PU-silicon monsoon shield, dust repellence & hairline crack bridging",
        },
        {
          kicker: "Tier 02 · 6 Yr Premium",
          title: "WeatherCoat Anti Dustt & Glow",
          text: "Dust Guard roadside facade protection & rain-activated Stay-Clean sheen",
        },
        {
          kicker: "Tier 03 · Economy Value",
          title: "Walmasta, Walmasta Glow & Lite",
          text: "Dependable acrylic weather & anti-algal protection for smart budgets",
        },
      ],
      cta: "Explore Exterior Shades",
    },
  },
];

export const getCategoryPage = (slug: string) => CATEGORY_PAGES.find((p) => p.slug === slug);
