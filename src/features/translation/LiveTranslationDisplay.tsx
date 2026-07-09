import { useAutoScroll } from "./useAutoScroll";
import { useTextSize } from "../../shared/lib/TextSizeContext";
import { useShowOriginal } from "../../shared/lib/ShowOriginalContext";
import VerseBadge from "../../entities/verse/VerseBadge";
import "./liveTranslation.css";

interface LiveTranslationProps {
  lines?: string[];
  originalLines?: string[];
  verseReferences?: Record<number, string>;
  children: React.ReactNode;
}

export default function LiveTranslationDisplay({
  lines = [],
  originalLines = [],
  verseReferences = {},
  children,
}: LiveTranslationProps) {
  const containerRef = useAutoScroll(lines);
  const containerRef2 = useAutoScroll(originalLines);
  const { size } = useTextSize();
  const { showOriginal } = useShowOriginal();

  const lastIndex = originalLines.length - 1;

  return (
    <div
      className={`text-display -${size}`}
      ref={(node) => {
        containerRef.current = node;
        containerRef2.current = node;
      }}
    >
      {originalLines.map((originalLine, index) => (
        <p
          key={index}
          className="divider"
          style={index === lastIndex ? { order: 1 } : undefined}
        >
          {verseReferences[index] && (
            <span className="verse-badge-container">
              <VerseBadge reference={verseReferences[index]} />
            </span>
          )}
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
