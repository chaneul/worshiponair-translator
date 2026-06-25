import type { IndicatorStatus } from "./types";
import { SoundBars } from "../../shared/icons/soundBars/SoundBars";

export function Glyph({ status }: { status: IndicatorStatus }) {
  if (status == "listening") {
    return <SoundBars />;
  }
  return null;
}
