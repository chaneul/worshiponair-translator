import { useEffect, useRef } from "react";
import { giveLine } from "./lineSource";
import { Language } from "../../shared/lib/languages";

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
        setSermonLines((prev) => ({
          ...prev,
          [lang]: [...prev[lang], giveLine(lang, prev[lang].length)],
        }));
      }
      phaseRef.current = phase === 2 ? 0 : phase + 1;
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
