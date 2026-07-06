import { Fragment } from "react";
import { useAutoScroll } from "./useAutoScroll";
import { useTextSize } from "../../shared/lib/TextSizeContext";
import { useShowOriginal } from "../../shared/lib/ShowOriginalContext";
import "./liveTranslation.css";

interface LiveTranslationProps {
  lines?: string[];
  originalLines?: string[];
  children: React.ReactNode;
}

export default function LiveTranslationDisplay({
  lines = [],
  originalLines = [],
  children,
}: LiveTranslationProps) {
  const containerRef = useAutoScroll(lines);
  const { size } = useTextSize();
  const { showOriginal } = useShowOriginal();

  const lastIndex = originalLines.length - 1;

  return (
    <div className={`text-display -${size}`} ref={containerRef}>
      {originalLines.map((originalLine, index) => (
        <p
          key={index}
          className="divider"
          style={index === lastIndex ? { order: 1 } : undefined}
        >
          {showOriginal && originalLines[index] && (
            <span className="original-container">
              <span className="original-badge">EN</span>
              <span className="original-text"> {originalLine}</span>
            </span>
          )}
          {!showOriginal && !lines[index] && (
            <span className="original-container">
              <span className="original-text"> Receiving translation… </span>
            </span>
          )}
          {lines[index]}
        </p>
      ))}
      {children}
    </div>
  );
}
