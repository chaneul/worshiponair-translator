import { useCallback, useState } from "react";
import type { IndicatorStatus } from "./types";
import { ORDER } from "./statuses";

export function useStatusCycle(initial: IndicatorStatus = "live") {
  const [active, setActive] = useState<IndicatorStatus>(initial);

  const next = useCallback(() => {
    setActive((s) => ORDER[(ORDER.indexOf(s) + 1) % ORDER.length]);
  }, []);

  return { active, next, setActive };
}
