import { useState } from "react";
import LiveTranslationDisplay from "./LiveTranslationDisplay";
import { sermonLines } from "./sermonLines";
import { useRevealLine } from "./useRevealLine";
import { useLanguage } from "../../shared/lib/LanguageContext";

export default function LiveTranslationSource({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);
  const activeLines = sermonLines[language];

  // press e to add line
  useRevealLine(setCount, activeLines);

  return (
    <div className="live-translation-source">
      <LiveTranslationDisplay
        lines={activeLines.slice(0, count)}
        originalLines={sermonLines.English.slice(0, count + 1)}
      >
        {children}
      </LiveTranslationDisplay>
    </div>
  );
}
