import { useState, useEffect, useRef } from "react";
import LiveTranslationDisplay from "./LiveTranslationDisplay";
import { sermonLines, verseReferences } from "./sermonLines";
import { useRevealLine } from "./useRevealLine";
import { giveLines } from "./lineSource";
import { useLanguage } from "../../shared/lib/LanguageContext";
import { Language } from "../../shared/lib/languages";

export default function LiveTranslationSource({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [sermonLine, setSermonLines] =
    useState<Record<Language, string[]>>(sermonLines);

  const prevLanguageRef = useRef<Language>(language);

  // press a to add line
  useRevealLine("English", setSermonLines, 0);
  useRevealLine(language, setSermonLines, 1);

  useEffect(() => {
    const prevLanguage = prevLanguageRef.current;
    prevLanguageRef.current = language;

    setSermonLines((prev) => {
      const revealed = prev[prevLanguage].length;

      if (prev[language].length >= revealed) return prev;
      return { ...prev, [language]: giveLines(language, revealed) };
    });
  }, [language]);

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
