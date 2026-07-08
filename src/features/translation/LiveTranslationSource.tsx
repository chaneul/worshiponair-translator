import { useState } from "react";
import LiveTranslationDisplay from "./LiveTranslationDisplay";
import { sermonLines, verseReferences } from "./sermonLines";
import { useRevealLine } from "./useRevealLine";
import { useLanguage } from "../../shared/lib/LanguageContext";

export default function LiveTranslationSource({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [translatedLineCount, setTranslatedLineCount] = useState(0);
  const [originalLineCount, setOriginalLineCount] = useState(0);
  const activeLines = sermonLines[language];

  // press e to add line
  useRevealLine(setOriginalLineCount, sermonLines.English, 0);
  useRevealLine(setTranslatedLineCount, activeLines, 1);

  return (
    <div className="live-translation-source">
      <LiveTranslationDisplay
        lines={activeLines.slice(0, translatedLineCount)}
        originalLines={sermonLines.English.slice(0, originalLineCount)}
        verseReferences={verseReferences}
      >
        {children}
      </LiveTranslationDisplay>
    </div>
  );
}
