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
  const activeLines = sermonLines[language];

  // press a to add line
  useRevealLine("English", sermonLines.English, 0);
  useRevealLine(language, activeLines, 1);

  return (
    <div className="live-translation-source">
      <LiveTranslationDisplay
        lines={activeLines}
        originalLines={sermonLines.English}
        verseReferences={verseReferences}
      >
        {children}
      </LiveTranslationDisplay>
    </div>
  );
}
