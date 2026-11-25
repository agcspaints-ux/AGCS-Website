import { useEffect, useId, useState, type FormEvent } from "react";
import { useLocation } from "@/lib/router";
import { SITE } from "@/data/site";

/** Formspree form endpoint — replace YOUR_FORM_ID with your real Formspree form ID.
 *  Sign up free at https://formspree.io, create a form pointed at agcs.paints@gmail.com,
 *  and paste the 8-character ID here (e.g. "xyzabcde").
 */
const FORMSPREE_ID = "xljbayva";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "h-[46px] w-full rounded-full border border-neutral-300 bg-white px-[30px] text-sm text-ink outline-none transition placeholder:text-neutral-500 focus:border-brand focus:ring-4 focus:ring-brand/12";

/**
 * Enquiry form used on the Contact and About pages.
 * Submits directly to Formspree which emails the data to agcs.paints@gmail.com,
 * and also offers WhatsApp as an alternative channel.
 */
export default function EnquiryForm({
  submitLabel = "Send Message",
  className = "",
}: {
  submitLabel?: string;
  className?: string;
}) {
  const { search } = useLocation();
  const product = (new URLSearchParams(search).get("product") ?? "").trim();
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const prefilled = product
    ? `Hi AGCS Team, I would like pricing and availability details for Berger ${product}.`
    : "";
  const [message, setMessage] = useState(prefilled);
  useEffect(() => setMessage(prefilled), [prefilled]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("message") ?? "").trim();

    // Build WhatsApp fallback URL
    const lines = [
      "Hello AGCS Team,",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
    ];
    if (product) lines.push(`Product: ${product}`);
    if (note) lines.push(`Message: ${note}`);
    setWhatsappUrl(`https://wa.me/918124936369?text=${encodeURIComponent(lines.join("\n"))}`);

    // Send via Formspree → email delivered to agcs.paints@gmail.com
    setStatus("sending");
    try {
      const payload: Record<string, string> = { name, phone, email, message: note };
      if (product) payload["product"] = product;

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={className}>
      {product && (
        <p className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-[7px] text-[12.5px] font-semibold text-brand">
          Enquiring about: {product}
        </p>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1.5 block text-sm font-medium text-ink">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Mobile Number"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="mb-1.5 block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y rounded-[28px] border border-neutral-300 bg-white px-[30px] py-3.5 text-sm text-ink outline-none transition placeholder:text-neutral-500 focus:border-brand focus:ring-4 focus:ring-brand/12"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-gradient-to-br hover:from-brand hover:to-pink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            submitLabel
          )}
        </button>
      </form>

      {/* Success banner */}
      {status === "sent" && (
        <div
          role="status"
          className="mt-4 rounded-[18px] border border-green-200 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-5 shadow-[0_12px_30px_-14px_rgba(22,163,74,.15)]"
        >
          <h4 className="mb-1 text-[16.5px] font-bold text-green-800">
            ✅ Message sent! We'll be in touch soon.
          </h4>
          <p className="mb-3.5 text-[13.5px] leading-relaxed text-green-700">
            Your enquiry has been delivered to <strong>agcs.paints@gmail.com</strong>.
            You can also reach us instantly on WhatsApp or call {SITE.phone}.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#16a34a] px-4 py-2.5 text-[12.5px] font-bold text-white transition hover:-translate-y-px"
            >
              Chat on WhatsApp →
            </a>
            <button
              onClick={() => setStatus("idle")}
              className="rounded-full border border-green-700 px-4 py-2.5 text-[12.5px] font-bold text-green-700 transition hover:-translate-y-px hover:bg-green-700 hover:text-white"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {/* Error banner */}
      {status === "error" && (
        <div
          role="alert"
          className="mt-4 rounded-[18px] border border-red-200 bg-red-50 p-5"
        >
          <h4 className="mb-1 text-[15px] font-bold text-red-700">
            ⚠️ Couldn't send your message.
          </h4>
          <p className="mb-3 text-[13px] leading-relaxed text-red-600">
            Please try WhatsApp or email us directly at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#16a34a] px-4 py-2.5 text-[12.5px] font-bold text-white transition hover:-translate-y-px"
            >
              Chat on WhatsApp →
            </a>
            <button
              onClick={() => setStatus("idle")}
              className="rounded-full border border-red-400 px-4 py-2.5 text-[12.5px] font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
