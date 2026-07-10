import { useEffect, useRef } from "react";
import { giveLine, giveVerseReference } from "./lineSource";
import { Language } from "../../shared/lib/languages";
import { verseReferences } from "./sermonLines";

export function useRevealLine(
  language: Language,
  setSermonLines: React.Dispatch<
    React.SetStateAction<Record<Language, string[]>>
  >,
  temp: number,
) {
  const phaseRef = useRef(0);
  const langRef = useRef(language);
  langRef.current = language;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== "a") return;

      const phase = phaseRef.current;
      if ((phase === 0 && temp === 0) || (phase === 1 && temp === 1)) {
        const lang = langRef.current;
        setSermonLines((prev) => {
          const index = prev[lang].length;
          const verseRef = giveVerseReference(index);
          const newLine = giveLine(lang, index);

          if (verseRef !== null) verseReferences[index] = verseRef;
          if (newLine === null) return prev;
          return {
            ...prev,
            [lang]: [...prev[lang], newLine],
          };
        });
      }
      phaseRef.current = phase === 2 ? 0 : phase + 1;
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
