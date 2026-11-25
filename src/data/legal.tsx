import type { ReactNode } from "react";
import { Link } from "@/lib/router";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  body: ReactNode;
}

export interface LegalDoc {
  path: string;
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  updated: string;
  appliesTo: string;
  sections: LegalSection[];
}

export const PRIVACY: LegalDoc = {
  path: "/privacy-policy",
  eyebrow: "Privacy Policy",
  title: ["Privacy ", "Policy"],
  subtitle:
    "What we collect, why we collect it, and the choices you have, explained in plain language.",
  updated: "November 2026",
  appliesTo: "agcs.in & AGCS showroom, Arumbakkam, Chennai",
  sections: [
    {
      id: "sec-1",
      number: "01",
      title: "Introduction",
      body: (
        <>
          <p>
            AGCS (Abundancia Global ColorS) (“AGCS”, “we”, “us”) is an authorised Berger Paints
            distributor based in Arumbakkam, Chennai. This Privacy Policy explains what personal
            information we collect when you visit our website, contact us or buy from our showroom,
            how we use it, and the choices you have.
          </p>
          <p>
            By using this website or sharing your details with us, you agree to the practices
            described here.
          </p>
        </>
      ),
    },
    {
      id: "sec-2",
      number: "02",
      title: "Information We Collect",
      body: (
        <>
          <ul>
            <li>
              <strong>Details you give us:</strong> your name, phone number, email address, location
              and the message or product requirement you send through our contact form, email, phone
              or WhatsApp.
            </li>
            <li>
              <strong>Order and enquiry details:</strong> products, quantities, delivery address and
              billing information needed to quote, supply and invoice your order.
            </li>
            <li>
              <strong>Technical data:</strong> browser type, device, pages viewed, approximate
              location and referral source, collected through cookies and similar technologies.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-3",
      number: "03",
      title: "How We Use Your Information",
      body: (
        <>
          <ul>
            <li>To respond to enquiries and provide quotes, colour and product advice.</li>
            <li>To process, deliver and invoice orders, and to provide after-sales support.</li>
            <li>To connect you with trusted painters when you ask for it.</li>
            <li>To improve our website, products and services, and to keep it secure.</li>
            <li>To send updates or offers, only where you have agreed to receive them.</li>
            <li>To meet legal, tax and accounting obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-4",
      number: "04",
      title: "Sharing of Information",
      body: (
        <>
          <p>
            We <strong>do not sell</strong> your personal information. We share it only when needed,
            with:
          </p>
          <ul>
            <li>
              Service providers who help us run the website, communications, delivery and payments,
              under confidentiality obligations.
            </li>
            <li>
              Berger Paints or its channel partners, where needed to fulfil an order, tinting
              request or warranty claim.
            </li>
            <li>Painters or applicators you have asked us to connect you with.</li>
            <li>Authorities or advisers, where required by law or to protect our legal rights.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-5",
      number: "05",
      title: "Cookies & Analytics",
      body: (
        <>
          <p>
            Our website uses cookies and similar technologies to make pages work, remember
            preferences and understand how visitors use the site (for example through analytics
            tools). You can block or delete cookies in your browser settings, though some features
            may not work as intended.
          </p>
        </>
      ),
    },
    {
      id: "sec-6",
      number: "06",
      title: "Data Retention",
      body: (
        <>
          <p>
            We keep personal information only as long as needed for the purposes above, including to
            meet accounting, tax and legal requirements, and then delete or anonymise it.
          </p>
        </>
      ),
    },
    {
      id: "sec-7",
      number: "07",
      title: "Data Security",
      body: (
        <>
          <p>
            We use reasonable technical and organisational safeguards to protect your information
            against loss, misuse and unauthorised access. No method of transmission over the
            internet is completely secure, so we cannot guarantee absolute security.
          </p>
        </>
      ),
    },
    {
      id: "sec-8",
      number: "08",
      title: "Your Rights & Choices",
      body: (
        <>
          <p>
            Subject to applicable law (including India’s Digital Personal Data Protection Act,
            2023), you may:
          </p>
          <ul>
            <li>Ask to access or correct the personal information we hold about you.</li>
            <li>Ask us to delete your information, or withdraw consent you previously gave.</li>
            <li>
              Opt out of marketing messages at any time by telling us or using the unsubscribe
              option.
            </li>
          </ul>
          <p>To exercise these rights, contact us using the details in section 12.</p>
        </>
      ),
    },
    {
      id: "sec-9",
      number: "09",
      title: "Third-Party Links",
      body: (
        <>
          <p>
            Our website links to third-party services such as Google Maps, Facebook and Instagram.
            We do not control their content or privacy practices, so please read their policies
            before sharing information with them.
          </p>
        </>
      ),
    },
    {
      id: "sec-10",
      number: "10",
      title: "Children’s Privacy",
      body: (
        <>
          <p>
            Our website and services are intended for adults. We do not knowingly collect personal
            information from children. If you believe a child has given us information, please
            contact us and we will remove it.
          </p>
        </>
      ),
    },
    {
      id: "sec-11",
      number: "11",
      title: "Changes to This Policy",
      body: (
        <>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date above shows
            when it last changed. Continued use of the website after an update means you accept the
            revised policy.
          </p>
        </>
      ),
    },
    {
      id: "sec-12",
      number: "12",
      title: "Contact Us",
      body: (
        <>
          <p>For questions about this policy or your personal information, contact:</p>
          <div className="agcs-doc-contact">
            {" "}
            <div>
              <span>Email</span>
              <strong>
                <a href="mailto:agcs.paints@gmail.com">agcs.paints@gmail.com</a>
              </strong>
            </div>{" "}
            <div>
              <span>Phone</span>
              <strong>
                <a href="tel:+918124936369">+91 81249 36369</a>
              </strong>
            </div>{" "}
            <div>
              <span>Showroom</span>
              <strong>
                2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai, Tamil Nadu - 600106
              </strong>
            </div>{" "}
          </div>
        </>
      ),
    },
  ],
};

export const TERMS: LegalDoc = {
  path: "/terms-and-conditions",
  eyebrow: "Terms & Conditions",
  title: ["Terms & ", "Conditions"],
  subtitle:
    "The ground rules for using our website and purchasing Berger paints and products from AGCS.",
  updated: "November 2026",
  appliesTo: "agcs.in & AGCS showroom, Arumbakkam, Chennai",
  sections: [
    {
      id: "sec-1",
      number: "01",
      title: "Acceptance of Terms",
      body: (
        <>
          <p>
            These Terms & Conditions govern your use of the AGCS website and your purchases from
            AGCS (Abundancia Global ColorS). By accessing the website or placing an order, you agree
            to these terms. If you do not agree, please do not use the website.
          </p>
        </>
      ),
    },
    {
      id: "sec-2",
      number: "02",
      title: "About AGCS",
      body: (
        <>
          <p>
            AGCS is an authorised Berger Paints distributor based in Arumbakkam, Chennai. Berger®,
            product names and logos belong to their respective owners and are used here to identify
            genuine products we supply. This website is for information and enquiries and does not
            itself constitute an offer to sell.
          </p>
        </>
      ),
    },
    {
      id: "sec-3",
      number: "03",
      title: "Product Information & Colours",
      body: (
        <>
          <ul>
            <li>
              We aim to keep product descriptions, features and warranty details accurate, based on
              information from the manufacturer. Technical data sheets issued by Berger prevail if
              there is a difference.
            </li>
            <li>
              Colours shown on screens and printed shade cards can differ from the final painted
              finish because of lighting, surface and application. We recommend a test patch before
              committing to a shade.
            </li>
            <li>
              Coverage and drying times are indicative and depend on surface condition, temperature
              and application method.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-4",
      number: "04",
      title: "Pricing & Availability",
      body: (
        <>
          <p>
            Prices and stock are provided on enquiry and may change without notice, including with
            manufacturer price revisions. A price is confirmed only when we issue a quotation or
            invoice. We may decline or cancel an order if a product is unavailable or a pricing
            error has occurred, and we will refund any amount paid for it.
          </p>
        </>
      ),
    },
    {
      id: "sec-5",
      number: "05",
      title: "Orders & Payment",
      body: (
        <>
          <p>
            An order is accepted when we confirm it. Payment terms, accepted payment methods and any
            advance required will be confirmed at the time of the order or quotation. Bulk and
            contractor supply may be subject to separate commercial terms agreed in writing.
          </p>
        </>
      ),
    },
    {
      id: "sec-6",
      number: "06",
      title: "Delivery",
      body: (
        <>
          <ul>
            <li>
              We deliver within Chennai for bulk and retail orders. Delivery charges and
              availability depend on location and order size and are confirmed before dispatch.
            </li>
            <li>
              Delivery timelines are estimates, and delays caused by traffic, weather, supply or
              other events outside our control are not a breach by AGCS.
            </li>
            <li>
              Please inspect goods on delivery and tell us promptly about any damaged, leaking or
              incorrect items.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-7",
      number: "07",
      title: "Returns & Cancellations",
      body: (
        <>
          <ul>
            <li>
              Products that have been tinted or custom-mixed to a chosen shade cannot normally be
              returned or exchanged, except where there is a manufacturing defect.
            </li>
            <li>
              Unopened, untinted products in original condition may be considered for return or
              exchange at our discretion, subject to inspection. Please contact us as soon as
              possible.
            </li>
            <li>
              Orders can be cancelled before dispatch or tinting. Charges may apply for work already
              carried out.
            </li>
          </ul>
          <div className="agcs-doc-note">
            Please confirm return and cancellation conditions with our team when placing your order,
            as terms for specific products or bulk orders may differ.
          </div>
        </>
      ),
    },
    {
      id: "sec-8",
      number: "08",
      title: "Warranty & Application",
      body: (
        <>
          <p>
            Product warranties are provided by the manufacturer, Berger Paints, and vary by product.
            They depend on correct surface preparation, the recommended primer and coats, and proper
            application. They do not cover damage from structural issues, seepage, misuse, accidents
            or natural events. AGCS does not apply paint and is not responsible for the workmanship
            of third-party painters, though we can recommend professionals on request.
          </p>
        </>
      ),
    },
    {
      id: "sec-9",
      number: "09",
      title: "Use of This Website",
      body: (
        <>
          <ul>
            <li>
              You agree to use the website lawfully and not to attempt to disrupt, copy, scrape or
              gain unauthorised access to it.
            </li>
            <li>
              The content, design and images on this site belong to AGCS or its licensors and may
              not be reproduced for commercial use without our written permission.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "sec-10",
      number: "10",
      title: "Limitation of Liability",
      body: (
        <>
          <p>
            To the fullest extent permitted by law, AGCS is not liable for indirect or consequential
            losses, or for losses arising from use of or inability to use the website. Our liability
            for any product is limited to the price you paid for it. Nothing in these terms limits
            liability that cannot be excluded under applicable law, including consumer protection
            law.
          </p>
        </>
      ),
    },
    {
      id: "sec-11",
      number: "11",
      title: "Third-Party Links",
      body: (
        <>
          <p>
            The website may link to third-party websites and services. We are not responsible for
            their content, availability or practices, and a link is not an endorsement.
          </p>
        </>
      ),
    },
    {
      id: "sec-12",
      number: "12",
      title: "Governing Law & Disputes",
      body: (
        <>
          <p>
            These terms are governed by the laws of India. Subject to applicable law, the courts at
            Chennai, Tamil Nadu have exclusive jurisdiction over any dispute arising from them. We
            encourage you to contact us first so we can try to resolve any concern amicably.
          </p>
        </>
      ),
    },
    {
      id: "sec-13",
      number: "13",
      title: "Changes to These Terms",
      body: (
        <>
          <p>
            We may revise these Terms & Conditions from time to time. The “Last updated” date above
            shows the latest version, and continued use of the website means you accept the updated
            terms.
          </p>
        </>
      ),
    },
    {
      id: "sec-14",
      number: "14",
      title: "Contact Us",
      body: (
        <>
          <p>Questions about these terms? Reach us at:</p>
          <div className="agcs-doc-contact">
            {" "}
            <div>
              <span>Email</span>
              <strong>
                <a href="mailto:agcs.paints@gmail.com">agcs.paints@gmail.com</a>
              </strong>
            </div>{" "}
            <div>
              <span>Phone</span>
              <strong>
                <a href="tel:+918124936369">+91 81249 36369</a>
              </strong>
            </div>{" "}
            <div>
              <span>Showroom</span>
              <strong>
                2/9, Murugesan Street, Balavinayagar Nagar, Arumbakkam, Chennai, Tamil Nadu - 600106
              </strong>
            </div>{" "}
          </div>
        </>
      ),
    },
  ],
};
