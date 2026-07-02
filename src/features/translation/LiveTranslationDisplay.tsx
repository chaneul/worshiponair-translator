import { useAutoScroll } from "./useAutoScroll";
import { StatusIndicator } from "../../features/status/StatusIndicator";
import { useTextSize } from "../../shared/lib/TextSizeContext";
import { useShowOriginal } from "../../shared/lib/ShowOriginalContext";
import "./liveTranslation.css";

interface LiveTranslationProps {
  lines?: string[];
  originalLines?: string[];
}

export default function LiveTranslationDisplay({
  lines = [],
  originalLines = [],
}: LiveTranslationProps) {
  const containerRef = useAutoScroll(lines);
  const { size } = useTextSize();
  const { showOriginal } = useShowOriginal();

  return (
    <div className={`text-display -${size}`} ref={containerRef}>
      {lines.map((line, index) => (
        <p key={index} className="divider">
          {showOriginal && (
            <span className="original-container">
              <span className="original-badge">EN</span>
              <span className="original-text"> {originalLines[index]}</span>
            </span>
          )}
          {line}
        </p>
      ))}
      <StatusIndicator />
      {showOriginal && originalLines.length > lines.length && (
        <>
          {originalLines.slice(lines.length).map((original, index) => (
            <p key={`extra-${lines.length + index}`} className="divider">
              <span className="original-container">
                <span className="original-badge">EN</span>
                <span className="original-text"> {original}</span>
              </span>
            </p>
          ))}
        </>
      )}
    </div>
  );
}
