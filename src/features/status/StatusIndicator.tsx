import { CONFIG } from "./statuses";
import { useStatusCycle } from "./status-cycle";
import { Glyph } from "./Glyph";
import "./Status.css";

export function StatusIndicator() {
  const { active, next, setActive } = useStatusCycle("live");
  const { label, color } = CONFIG[active];

  return (
    <span
      className={"sti"}
      style={{ ["--sti-color" as string]: color }}
      onClick={next}
    >
      <span className="sti__label">{label}</span>
      <Glyph status={active} />
    </span>
  );
}
