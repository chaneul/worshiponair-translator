import type { IndicatorStatus } from "./types";

export const ORDER: IndicatorStatus[] = ["live", "listening", "translating"];

export const CONFIG: Record<IndicatorStatus, { label: string; color: string }> =
  {
    live: { label: "Live", color: "#FF5C5C" },
    listening: { label: "Listening", color: "#7C7CFF" },
    translating: { label: "Translating", color: "#34E5C4" },
  };
