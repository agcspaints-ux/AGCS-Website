import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export interface RouteDef {
  path: string;
  title: string;
  description: string;
  load: Loader;
  Component: LazyExoticComponent<ComponentType>;
}

const route = (path: string, title: string, description: string, load: Loader): RouteDef => ({
  path,
  title,
  description,
  load,
  Component: lazy(load),
});

/** One entry per page. Pages are code-split and fetched on hover / when the browser is idle. */
const category = (path: string, slug: string, title: string, description: string) =>
  route(path, title, description, async () => {
    const { default: CategoryPage } = await import("@/pages/CategoryPage");
    return { default: () => <CategoryPage slug={slug} /> };
  });

export const ROUTES: RouteDef[] = [
  route(
    "/",
    "Berger Paints Distributor in Chennai | Wholesale & Bulk Supply",
    "Trusted Berger Paints distributor in Chennai for high-quality paints at wholesale prices. Get bulk supply options and the best deals for your needs!",
    () => import("@/pages/Home"),
  ),
  route(
    "/contact-us",
    "Contact Us | AGCS – Berger Paints Showroom Arumbakkam, Chennai",
    "Visit our Arumbakkam showroom, call or message AGCS for Berger Paints pricing, colour advice and bulk supply in Chennai.",
    () => import("@/pages/Contact"),
  ),
  route(
    "/about-us",
    "About Us | AGCS – Berger Paints Distributor Chennai",
    "Premium Berger Paints at AGCS Abundancia Global Colors. We offer high-quality interior, exterior, and wood coatings with expert guidance and competitive prices.",
    () => import("@/pages/About"),
  ),
  category(
    "/interior-emulsion",
    "interior-emulsion",
    "Interior Emulsion Paints | Luxury, Premium & Economy | AGCS",
    "Premium interior emulsion paints for a smooth, elegant finish. Long-lasting colors, stain resistance, and superior coverage for beautiful interiors.",
  ),
  category(
    "/exterior-emulsion",
    "exterior-emulsion",
    "Exterior Emulsion Paints | WeatherCoat & Walmasta | AGCS",
    "High-quality exterior emulsion paints designed for superior weather resistance, long-lasting color, and a flawless finish for any surface.",
  ),
  category(
    "/wood-coating",
    "wood-coating",
    "Wood Coating | Protect & Enhance Wooden Surfaces | AGCS",
    "Premium wood coating solutions for long-lasting protection and a flawless finish. Choose from a range of high-quality coatings for furniture, floors, and more!",
  ),
  category(
    "/enamel-metal-primer",
    "enamel-metal-primer",
    "Enamel & Metal Primer | Superior Surface Protection | AGCS",
    "Superior enamel and metal primer for long-lasting protection and a smooth finish, ideal for metal surfaces with durability and rust resistance.",
  ),
  category(
    "/construction-chemicals",
    "construction-chemicals",
    "Construction Chemicals | HomeShield Waterproofing & Tile Adhesives | AGCS",
    "Construction chemicals including tile adhesives, grouts, primers and waterproofing solutions for superior bonding and long-lasting protection.",
  ),
  category(
    "/tools",
    "tools",
    "Painting Tools, Rollers & Sanding Sheets | AGCS Chennai",
    "A range of painting tools, rollers and sanding sheets for a flawless finish. Get quality tools for professional and DIY projects.",
  ),
  route(
    "/faqs",
    "FAQs | Berger Paints Questions Answered | AGCS Chennai",
    "Answers about Berger paints, ordering, delivery in Chennai, colour consultation, warranty and surface preparation from AGCS, Arumbakkam.",
    () => import("@/pages/Faqs"),
  ),
  route(
    "/privacy-policy",
    "Privacy Policy | AGCS – Abundancia Global ColorS",
    "How AGCS collects, uses and protects your personal information when you visit our website or buy Berger paints from our Chennai showroom.",
    () => import("@/pages/PrivacyPolicy"),
  ),
  route(
    "/terms-and-conditions",
    "Terms & Conditions | AGCS – Abundancia Global ColorS",
    "Terms & Conditions for using the AGCS website and buying Berger paints, covering orders, delivery, returns, warranty and liability.",
    () => import("@/pages/Terms"),
  ),
];

export const NOT_FOUND = {
  title: "Page not found | AGCS – Abundancia Global ColorS",
  Component: lazy(() => import("@/pages/NotFound")),
};

export const findRoute = (path: string) => ROUTES.find((r) => r.path === path);
