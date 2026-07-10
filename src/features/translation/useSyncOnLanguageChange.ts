import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { giveLines } from "./lineSource";
import { Language } from "../../shared/lib/languages";

export function useSyncOnLanguageChange(
  language: Language,
  setSermonLines: Dispatch<SetStateAction<Record<Language, string[]>>>,
) {
  const prevLanguageRef = useRef<Language>(language);

  useEffect(() => {
    const prevLanguage = prevLanguageRef.current;
    prevLanguageRef.current = language;

    setSermonLines((prev) => {
      const revealed = prev[prevLanguage].length;
      if (prev[language].length >= revealed) return prev;
      return { ...prev, [language]: giveLines(language, revealed) };
    });
  }, [language]);
}
