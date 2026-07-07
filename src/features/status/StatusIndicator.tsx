import { CONFIG } from "./statuses";
import { useStatusCycle } from "./useStatusCycle";
import { Glyph } from "./Glyph";
import "./Status.css";

export function StatusIndicator() {
  const { active } = useStatusCycle("live");
  const { label, color } = CONFIG[active];

  return (
    <span className={"sti"} style={{ ["--sti-color" as string]: color }}>
      <span className="sti-label">{label}</span>
      <Glyph status={active} />
    </span>
  );
}
