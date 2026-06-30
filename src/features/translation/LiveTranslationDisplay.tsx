import { useAutoScroll } from "./useAutoScroll";
import { StatusIndicator } from "../../features/status/StatusIndicator";
import { useTextSize } from "../../shared/lib/TextSizeContext";
import "./liveTranslation.css";

interface LiveTranslationProps {
  lines?: string[];
}

export default function LiveTranslationDisplay({
  lines = [],
}: LiveTranslationProps) {
  const containerRef = useAutoScroll(lines);
  const { size } = useTextSize();

  return (
    <div className={`text-display -${size}`} ref={containerRef}>
      {lines.map((line, index) => (
        <p key={index} className="divider">
          {line}
        </p>
      ))}
      <StatusIndicator />
    </div>
  );
}
