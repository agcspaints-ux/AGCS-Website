import { Suspense, useEffect } from "react";
import {
  RouterProvider,
  setRoutePrefetcher,
  useLocation,
  useNavigationPending,
} from "@/lib/router";
import { NOT_FOUND, ROUTES, findRoute } from "@/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Thin gradient bar shown while the next page is loading. */
function ProgressBar() {
  const pending = useNavigationPending();
  if (!pending) return null;
  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[200] h-[3px] w-0 animate-[progress_5s_cubic-bezier(.22,.61,.36,1)_forwards] bg-gradient-to-r from-brand via-pink to-[#e67e22] shadow-[0_0_10px_rgba(217,70,143,.6)]"
    />
  );
}

function Page() {
  const { pathname } = useLocation();
  const route = findRoute(pathname);
  const Component = route ? route.Component : NOT_FOUND.Component;

  useEffect(() => {
    document.title = route ? route.title : NOT_FOUND.title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = route?.description ?? "";
  }, [route]);

  return <Component />;
}

function Shell() {
  // fetch the other pages quietly once the first one is on screen
  useEffect(() => {
    setRoutePrefetcher((path) => void findRoute(path)?.load());
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    if (conn && (conn.saveData || /2g$/.test(conn.effectiveType ?? ""))) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const handle = idle(() =>
      ROUTES.forEach((r, i) => window.setTimeout(() => void r.load(), i * 250)),
    );
    return () =>
      window.cancelIdleCallback
        ? window.cancelIdleCallback(handle as number)
        : window.clearTimeout(handle as number);
  }, []);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[300] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ProgressBar />
      <Header />
      <main id="content">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Page />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
