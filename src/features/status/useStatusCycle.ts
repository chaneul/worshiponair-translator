import { useCallback, useEffect, useState } from "react";
import type { IndicatorStatus } from "./types";
import { ORDER } from "./statuses";

export function useStatusCycle(initial: IndicatorStatus = "live") {
  const [active, setActive] = useState<IndicatorStatus>(initial);

  const next = useCallback(() => {
    setActive((s) => ORDER[(ORDER.indexOf(s) + 1) % ORDER.length]);
  }, []);

  // TEMP: manual cycling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "a") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next]);
  return { active, next, setActive };
}
