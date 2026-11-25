import type { ReactElement } from "react";

export type FeatureIconName =
  | "dollar"
  | "bolt"
  | "checkCircle"
  | "home"
  | "thumbsUp"
  | "box"
  | "star"
  | "command"
  | "book"
  | "droplet"
  | "eye"
  | "layers"
  | "sun"
  | "shield"
  | "wind"
  | "sparkles"
  | "shieldCheck"
  | "wrench"
  | "leaf"
  | "roller"
  | "sparkle"
  | "pencil"
  | "sunDim"
  | "link"
  | "download"
  | "clock"
  | "palette";

const paths: Record<FeatureIconName, ReactElement> = {
  dollar: (
    <>
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  checkCircle: (
    <>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  home: (
    <>
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  thumbsUp: (
    <>
      <path
        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  box: (
    <>
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="3.27 6.96 12 12.01 20.73 6.96"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  star: (
    <>
      <path
        d="M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6l-5 3.6 1.9-5.8L4 8.8h6.1L12 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  command: (
    <>
      <path
        d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  droplet: (
    <>
      <path
        d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  eye: (
    <>
      <path
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2 17 12 22 22 17" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2 12 12 17 22 12" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        strokeLinecap="round"
      />
    </>
  ),
  shield: (
    <>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  wind: (
    <>
      <path
        d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  sparkles: (
    <>
      <path
        d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9-4.03-9-9 0 4.97-4.03 9-9 9 0 4.97 4.03 9 9 9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  shieldCheck: (
    <>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  wrench: (
    <>
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  leaf: (
    <>
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="4" width="14" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 7h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  sparkle: (
    <>
      <path
        d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  pencil: (
    <>
      <path d="M3 21l4-1 11-11-3-3L4 17z M14 6l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  sunDim: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        strokeLinecap="round"
      />
    </>
  ),
  link: (
    <>
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  download: (
    <>
      <path d="M12 2v14M7 11l5 5 5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.43-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h1.99c3.05 0 5.55-2.5 5.55-5.55C21.97 5.81 17.46 2 12 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

/** Small outline icons used on product feature rows (24px grid, stroke based). */
export function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
