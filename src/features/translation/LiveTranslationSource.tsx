import { useState } from "react";
import LiveTranslationDisplay from "./LiveTranslationDisplay";
import { sermonLines, verseReferences } from "./sermonLines";
import { useRevealLine } from "./useRevealLine";
import { useLanguage } from "../../shared/lib/LanguageContext";
import { Language } from "../../shared/lib/languages";
import { useSyncOnLanguageChange } from "./useSyncOnLanguageChange";

export default function LiveTranslationSource({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [sermonLine, setSermonLines] =
    useState<Record<Language, string[]>>(sermonLines);

  // press a to add line
  useRevealLine("English", setSermonLines, 0);
  useRevealLine(language, setSermonLines, 1);

  useSyncOnLanguageChange(language, setSermonLines);

  return (
    <div className="live-translation-source">
      <LiveTranslationDisplay
        lines={sermonLine[language]}
        originalLines={sermonLine["English"]}
        verseReferences={verseReferences}
      >
        {children}
      </LiveTranslationDisplay>
    </div>
  );
}
