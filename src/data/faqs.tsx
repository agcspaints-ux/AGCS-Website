import type { ReactNode } from "react";
import { Link } from "@/lib/router";

export interface Faq {
  category: string;
  question: string;
  categoryLabel: string;
  answer: ReactNode;
  /** plain text used for search */
  text: string;
}

export const FAQ_TABS = [
  { id: "all", label: "All Questions" },
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders & Delivery" },
  { id: "colour", label: "Colour & Application" },
  { id: "warranty", label: "Warranty & Care" },
];

export const FAQ_SEARCH_PLACEHOLDER = "Search delivery, warranty, primer...";

export const FAQS: Faq[] = [
  {
    category: "products",
    question: "What types of paints do you offer?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          We supply the Berger Paints range: <strong>interior and exterior emulsions</strong>,{" "}
          <strong>enamels and metal primers</strong>, <strong>wood coatings</strong>,{" "}
          <strong>construction chemicals</strong> (tile adhesives, grouts and waterproofing
          admixtures) and <strong>painting tools</strong>. Browse them from the Products menu.
        </p>
      </>
    ),
    text: "We supply the Berger Paints range: interior and exterior emulsions, enamels and metal primers, wood coatings, construction chemicals (tile adhesives, grouts and waterproofing admixtures) and painting tools. Browse them from the Products menu.",
  },
  {
    category: "products",
    question: "Are you an authorised Berger Paints distributor?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          Yes. AGCS (Abundancia Global ColorS) is an authorised Berger Paints distributor in
          Chennai, so you get genuine Berger products with expert guidance.
        </p>
      </>
    ),
    text: "Yes. AGCS (Abundancia Global ColorS) is an authorised Berger Paints distributor in Chennai, so you get genuine Berger products with expert guidance.",
  },
  {
    category: "products",
    question: "What is the difference between Luxury, Premium and Economy emulsions?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          <strong>Luxury</strong> emulsions offer the richest finish and the longest protection, for
          example Silk Glamor indoors or Weathercoat Long Life outdoors. <strong>Premium</strong>{" "}
          emulsions give a refined finish with good washability and durability.{" "}
          <strong>Economy</strong> emulsions are cost-effective options with good coverage, such as
          Bison indoors and Walmasta outdoors.
        </p>
      </>
    ),
    text: "Luxury emulsions offer the richest finish and the longest protection, for example Silk Glamor indoors or Weathercoat Long Life outdoors. Premium emulsions give a refined finish with good washability and durability. Economy emulsions are cost-effective options with good coverage, such as Bison indoors and Walmasta outdoors.",
  },
  {
    category: "products",
    question: "Which exterior paint suits Chennai’s sun and monsoon rain?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          For the longest protection, Weathercoat Long Life 10 offers a 10-year warranty with
          PU-silicon rain repellence, while Weathercoat Long Life Flexo (8-year warranty) also
          conceals hairline cracks. Weathercoat Anti Dustt and Glow suit dusty or high-rain
          locations, and Walmasta is the budget option. See the{" "}
          <Link to="/exterior-emulsion">Exterior Emulsion</Link> page or ask our team.
        </p>
      </>
    ),
    text: "For the longest protection, Weathercoat Long Life 10 offers a 10-year warranty with PU-silicon rain repellence, while Weathercoat Long Life Flexo (8-year warranty) also conceals hairline cracks. Weathercoat Anti Dustt and Glow suit dusty or high-rain locations, and Walmasta is the budget option. See the Exterior Emulsion page or ask our team.",
  },
  {
    category: "products",
    question: "Which interior paint is best for easy cleaning?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          Berger Easy Clean uses cross-linking polymers for high washability, and Silk Glamor and
          Silk Breathe Easy offer high scrub resistance. Browse them on the{" "}
          <Link to="/interior-emulsion">Interior Emulsion</Link> page.
        </p>
      </>
    ),
    text: "Berger Easy Clean uses cross-linking polymers for high washability, and Silk Glamor and Silk Breathe Easy offer high scrub resistance. Browse them on the Interior Emulsion page.",
  },
  {
    category: "products",
    question: "What should I use on metal grills, gates and doors?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          Start with a metal primer, either Red Oxide Primer or BP Zinc Yellow Primer, then finish
          with an enamel such as Butterfly GP, Luxol Hi-Gloss or Luxol PU. For steel structures,
          tanks and roofs, Salvaline ALM aluminium paint adds a weather-resistant silver finish. See{" "}
          <Link to="/enamel-metal-primer">Enamel & Metal Primer</Link>.
        </p>
      </>
    ),
    text: "Start with a metal primer, either Red Oxide Primer or BP Zinc Yellow Primer, then finish with an enamel such as Butterfly GP, Luxol Hi-Gloss or Luxol PU. For steel structures, tanks and roofs, Salvaline ALM aluminium paint adds a weather-resistant silver finish. See Enamel & Metal Primer.",
  },
  {
    category: "products",
    question: "Do you stock wood polishes, stains and anti-termite products?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          Yes. Our <Link to="/wood-coating">Wood Coating</Link> range covers sanding sealers, PU
          topcoats, stains, varnish, hand polish, epoxy block primer and Wood Protektor anti-termite
          treatments.
        </p>
      </>
    ),
    text: "Yes. Our Wood Coating range covers sanding sealers, PU topcoats, stains, varnish, hand polish, epoxy block primer and Wood Protektor anti-termite treatments.",
  },
  {
    category: "products",
    question: "What construction chemicals do you supply?",
    categoryLabel: "Products",
    answer: (
      <>
        <p>
          Tile adhesives (Tile Bond Hi-Flex, Anti-Slip, Adhesive and Adhesive Plus), waterproofing
          admixtures (Cementmix Plus, Power Plasticizer, Advanced Latex Plus) and epoxy and
          cementitious tile grouts. See{" "}
          <Link to="/construction-chemicals">Construction Chemicals</Link>.
        </p>
      </>
    ),
    text: "Tile adhesives (Tile Bond Hi-Flex, Anti-Slip, Adhesive and Adhesive Plus), waterproofing admixtures (Cementmix Plus, Power Plasticizer, Advanced Latex Plus) and epoxy and cementitious tile grouts. See Construction Chemicals.",
  },
  {
    category: "orders",
    question: "Where are you located and what are your hours?",
    categoryLabel: "Orders & Delivery",
    answer: (
      <>
        <p>
          Our showroom is at 2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai, Tamil
          Nadu - 600106. We are open from 7:00 AM to 7:00 PM.{" "}
          <a
            href="https://maps.app.goo.gl/4ziyKjsCd7sEqKvQ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
          .
        </p>
      </>
    ),
    text: "Our showroom is at 2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai, Tamil Nadu - 600106. We are open from 7:00 AM to 7:00 PM. Get directions.",
  },
  {
    category: "orders",
    question: "How can I place an order?",
    categoryLabel: "Orders & Delivery",
    answer: (
      <>
        <p>
          Visit our showroom in Arumbakkam, call us on{" "}
          <a href="tel:+918124936369">+91 81249 36369</a>, or send an enquiry through our{" "}
          <Link to="/contact-us">Contact page</Link>. We will confirm product availability, quantity
          and pricing before you order.
        </p>
      </>
    ),
    text: "Visit our showroom in Arumbakkam, call us on +91 81249 36369, or send an enquiry through our Contact page. We will confirm product availability, quantity and pricing before you order.",
  },
  {
    category: "orders",
    question: "Do you offer bulk pricing for contractors and builders?",
    categoryLabel: "Orders & Delivery",
    answer: (
      <>
        <p>
          Yes. We offer special pricing and bulk supply for contractors, painters, builders and
          businesses. Share your requirement through the <Link to="/contact-us">Contact page</Link>{" "}
          or call us for a quote.
        </p>
      </>
    ),
    text: "Yes. We offer special pricing and bulk supply for contractors, painters, builders and businesses. Share your requirement through the Contact page or call us for a quote.",
  },
  {
    category: "orders",
    question: "Do you deliver to my location?",
    categoryLabel: "Orders & Delivery",
    answer: (
      <>
        <p>
          We deliver within Chennai for both bulk and retail orders. Availability and delivery
          charges depend on your location and order size, so please contact us for details.
        </p>
      </>
    ),
    text: "We deliver within Chennai for both bulk and retail orders. Availability and delivery charges depend on your location and order size, so please contact us for details.",
  },
  {
    category: "colour",
    question: "Do you provide colour consultation?",
    categoryLabel: "Colour & Application",
    answer: (
      <>
        <p>
          Yes. Our experts help you choose colours and finishes to match your space, light and
          style. Visit the showroom to compare shade cards and finishes in person.
        </p>
      </>
    ),
    text: "Yes. Our experts help you choose colours and finishes to match your space, light and style. Visit the showroom to compare shade cards and finishes in person.",
  },
  {
    category: "colour",
    question: "Do you provide painting services?",
    categoryLabel: "Colour & Application",
    answer: (
      <>
        <p>
          We specialise in paint distribution. We can connect you with trusted professional painters
          for your project, so please ask when you enquire.
        </p>
      </>
    ),
    text: "We specialise in paint distribution. We can connect you with trusted professional painters for your project, so please ask when you enquire.",
  },
  {
    category: "colour",
    question: "How much paint will I need?",
    categoryLabel: "Colour & Application",
    answer: (
      <>
        <p>
          It depends on the wall area, surface condition, the product’s coverage and the number of
          coats. Share your measurements and surface details with us and we will help you estimate
          quantities so you buy the right amount.
        </p>
      </>
    ),
    text: "It depends on the wall area, surface condition, the product’s coverage and the number of coats. Share your measurements and surface details with us and we will help you estimate quantities so you buy the right amount.",
  },
  {
    category: "colour",
    question: "Are Berger paints eco-friendly?",
    categoryLabel: "Colour & Application",
    answer: (
      <>
        <p>
          Berger offers low-VOC and low-odour options that are kinder to your home and the
          environment, for example Silk Glamor, which is formulated to minimise strong paint odours.
          Ask us for the right option for bedrooms and nurseries.
        </p>
      </>
    ),
    text: "Berger offers low-VOC and low-odour options that are kinder to your home and the environment, for example Silk Glamor, which is formulated to minimise strong paint odours. Ask us for the right option for bedrooms and nurseries.",
  },
  {
    category: "warranty",
    question: "Do the paints come with a warranty?",
    categoryLabel: "Warranty & Care",
    answer: (
      <>
        <p>
          Selected Berger exterior emulsions carry performance warranties of 2 to 10 years depending
          on the product (for example Weathercoat Long Life 10 carries 10 years). Warranty terms are
          set by the manufacturer and depend on correct surface preparation and application, so
          please ask us for the specific conditions.
        </p>
      </>
    ),
    text: "Selected Berger exterior emulsions carry performance warranties of 2 to 10 years depending on the product (for example Weathercoat Long Life 10 carries 10 years). Warranty terms are set by the manufacturer and depend on correct surface preparation and application, so please ask us for the specific conditions.",
  },
  {
    category: "warranty",
    question: "How should I prepare surfaces before painting?",
    categoryLabel: "Warranty & Care",
    answer: (
      <>
        <p>
          Surfaces should be clean, dry and free from dust, oil, loose paint and fungal growth. Use
          the right primer or sealer for the surface: a metal primer on metal, a wood sealer on wood
          and a wall primer on plaster. Our team can advise you on a complete system. The 3-step
          guides on each product page are a good starting point.
        </p>
      </>
    ),
    text: "Surfaces should be clean, dry and free from dust, oil, loose paint and fungal growth. Use the right primer or sealer for the surface: a metal primer on metal, a wood sealer on wood and a wall primer on plaster. Our team can advise you on a complete system. The 3-step guides on each product page are a good starting point.",
  },
  {
    category: "warranty",
    question: "Who can I contact for product advice after purchase?",
    categoryLabel: "Warranty & Care",
    answer: (
      <>
        <p>
          Call <a href="tel:+918124936369">+91 81249 36369</a>, email{" "}
          <a href="mailto:agcs.paints@gmail.com">agcs.paints@gmail.com</a>, or visit our showroom.
          We are happy to help with application and product questions.
        </p>
      </>
    ),
    text: "Call +91 81249 36369, email agcs.paints@gmail.com, or visit our showroom. We are happy to help with application and product questions.",
  },
];
