import PageHero, { type HeroConfig } from "@/components/PageHero";
import ProductShowcase from "@/components/ProductShowcase";
import { getCategoryPage } from "@/data/catalog";

const HEROES: Record<string, Omit<HeroConfig, "cta">> = {
  "wood-coating": {
    image: "/images/heroes/wood-coating.webp",
    title: "Premium Wood Coatings for Lasting Beauty & Protection",
    subtitle: "Elevate Your Wood Surfaces with Superior Durability & Elegance",
    position: "left bottom",
  },
  tools: {
    image: "/images/heroes/tools.webp",
    title: "High-Quality Painting Tools for Smooth Application & Professional Finish",
    subtitle: "Paint Like a Pro with Berger Tools!",
    align: "center",
    position: "right center",
  },
  "enamel-metal-primer": {
    image: "/images/photos/wood-sculptures.webp",
    title: "High-Performance Enamel & Metal Primer for Superior Protection & Finish",
    subtitle: "Luxurious Shine, Lasting Protection",
    align: "center",
    position: "left bottom",
  },
  "construction-chemicals": {
    image: "/images/heroes/construction-chemicals.webp",
    title: "Premium Construction Chemicals for Stronger, More Resilient Buildings",
    subtitle: "Strength, Protection, and Durability for Every Build!",
    align: "center",
    position: "center bottom",
  },
  "interior-emulsion": {
    image: "/images/heroes/interior-emulsion.webp",
    title: "Premium Interior Emulsion Paints for Elegant & Lasting Beauty",
    subtitle: "Explore our range of Luxury, Premium & Economy Emulsions",
    align: "center",
    position: "left bottom",
  },
  "exterior-emulsion": {
    image: "/images/heroes/exterior-emulsion.webp",
    title: "Premium Exterior Emulsion Paints for Lasting Beauty & Protection",
    subtitle: "Explore our range of Luxury, Premium & Economy Emulsions",
    position: "left bottom",
  },
};

/** Hero banner + product showcase for one product category. */
export default function CategoryPage({ slug }: { slug: string }) {
  const page = getCategoryPage(slug);
  const hero = HEROES[slug];
  if (!page || !hero) return null;
  return (
    <>
      <PageHero {...hero} cta={{ label: "Explore Products", to: `${page.path}#catalog` }} />
      <ProductShowcase page={page} />
    </>
  );
}
