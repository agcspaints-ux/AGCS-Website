import { Link } from "@/lib/router";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 pb-24 pt-40 text-center">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 text-[clamp(34px,5vw,56px)] font-semibold tracking-[-.02em]">
          This page has <span className="text-gradient">wandered off</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.8] text-[#7a7a7a]">
          The page you are looking for does not exist or has moved. Let’s get you back to the
          colours.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-black px-8 py-[15px] text-sm font-medium text-white transition hover:bg-gradient-to-br hover:from-brand hover:to-pink"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
