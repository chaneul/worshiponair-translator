import { useAutoScroll } from "./useAutoScroll";
import { StatusIndicator } from "../../features/status/StatusIndicator";
import "./liveTranslation.css";

interface LiveTranslationProps {
  lines?: string[];
}

export default function LiveTranslationDisplay({
  lines = [],
}: LiveTranslationProps) {
  const containerRef = useAutoScroll(lines);

  return (
    <div className="text-display" ref={containerRef}>
      {lines.map((line, index) => (
        <>
          <p key={index} className="divider">
            {line}
          </p>
        </>
      ))}
      <StatusIndicator />
    </div>
  );
}
