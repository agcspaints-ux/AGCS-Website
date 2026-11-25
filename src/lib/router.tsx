import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

/**
 * A very small History API router: the site only needs path matching, query strings,
 * hashes and scroll handling. Navigation runs in a transition so the current page stays
 * on screen while the next (lazy) page loads.
 */

export interface Location {
  pathname: string;
  search: string;
  hash: string;
}

interface RouterValue {
  location: Location;
  /** true while the next page is still loading */
  pending: boolean;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterValue | null>(null);

const readLocation = (): Location => ({
  pathname: normalisePath(window.location.pathname),
  search: window.location.search,
  hash: window.location.hash,
});

export function normalisePath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path || "/";
}

export function splitUrl(to: string): Location {
  const url = new URL(to, window.location.origin);
  return { pathname: normalisePath(url.pathname), search: url.search, hash: url.hash };
}

/** Scroll to the hash target, or to the top of the page when there is none. */
function scrollForLocation(loc: Location, smooth: boolean) {
  const id = decodeURIComponent(loc.hash.replace(/^#/, ""));
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  else window.scrollTo({ top: 0, behavior: "auto" });
}

export function RouterProvider({
  children,
  onNavigate,
}: {
  children: ReactNode;
  onNavigate?: (loc: Location) => void;
}) {
  const [location, setLocation] = useState<Location>(readLocation);
  const [pending, setPending] = useState(false);

  const apply = useCallback(
    (loc: Location, scroll: boolean) => {
      setPending(true);
      startTransition(() => {
        setLocation(loc);
        setPending(false);
      });
      if (scroll) {
        // wait for the new page to commit before scrolling
        window.setTimeout(() => scrollForLocation(loc, true), 60);
        window.setTimeout(() => scrollForLocation(loc, true), 400);
      }
      onNavigate?.(loc);
    },
    [onNavigate],
  );

  const navigate = useCallback(
    (to: string) => {
      const loc = splitUrl(to);
      const same = loc.pathname === location.pathname && loc.search === location.search;
      window.history.pushState({}, "", `${loc.pathname}${loc.search}${loc.hash}`);
      if (same) {
        // only the hash changed: no page swap needed
        setLocation(loc);
        scrollForLocation(loc, true);
        return;
      }
      apply(loc, true);
    },
    [apply, location.pathname, location.search],
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const onPop = () => apply(readLocation(), true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [apply]);

  // honour a hash in the first URL (e.g. /contact-us#form)
  useEffect(() => {
    if (window.location.hash)
      window.setTimeout(() => scrollForLocation(readLocation(), false), 350);
  }, []);

  const value = useMemo(() => ({ location, pending, navigate }), [location, pending, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("Router hooks must be used inside <RouterProvider>");
  return ctx;
}

export const useLocation = () => useRouter().location;
export const useNavigate = () => useRouter().navigate;
export const useNavigationPending = () => useRouter().pending;

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  /** called on pointer hover / focus so the next page can be fetched early */
  onPrefetch?: (to: string) => void;
}

/** Internal links navigate client-side; external, mailto, tel and modified clicks use the browser. */
export function Link({ to, onClick, onPrefetch, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const internal = to.startsWith("/") && !to.startsWith("//");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !internal) return;
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target === "_blank"
    )
      return;
    e.preventDefault();
    navigate(to);
  };
  const prefetch = () => {
    if (internal) prefetchRoute(to);
    onPrefetch?.(to);
  };
  const external = /^https?:\/\//.test(to);
  return (
    <a
      href={to}
      onClick={handleClick}
      onPointerEnter={prefetch}
      onFocus={prefetch}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

// ----- route prefetching ---------------------------------------------------
type Prefetcher = (path: string) => void;
let prefetcher: Prefetcher = () => {};
export const setRoutePrefetcher = (fn: Prefetcher) => {
  prefetcher = fn;
};
export const prefetchRoute = (to: string) => prefetcher(splitUrl(to).pathname);
