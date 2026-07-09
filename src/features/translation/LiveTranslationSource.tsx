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
  const [originalLines, setLines] = useState<string[]>([]);
  const [activeLines, setActiveLines] = useState<string[]>([]);

  // press a to add line
  useRevealLine("English", setLines, 0);
  useRevealLine(language, setActiveLines, 1);

  return (
    <div className="live-translation-source">
      <LiveTranslationDisplay
        lines={activeLines}
        originalLines={originalLines}
        verseReferences={verseReferences}
      >
        {children}
      </LiveTranslationDisplay>
    </div>
  );
}
