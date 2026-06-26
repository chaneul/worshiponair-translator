import { useEffect, useRef } from "react";

export function useAutoScroll<T>(dep: T, threshold = 100) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stick = useRef(true);

  // track if the user is scrolled near the bottom
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      stick.current =
        el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // auto-scroll to the bottom
  useEffect(() => {
    const el = containerRef.current;
    if (el && stick.current) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [dep]);

  return containerRef;
}
