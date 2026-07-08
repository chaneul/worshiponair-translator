import { useEffect, useState } from "react";
import { giveLine } from "./lineSource";
import { Language } from "../../shared/lib/languages";

export function useRevealLine(
  language: Language,
  lines: string[],
  temp: number,
) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "a") {
        setPhase((prevPhase) => {
          if (prevPhase === 0 && temp === 0) {
            lines.push(giveLine(language, lines.length));
          } else if (prevPhase === 1 && temp === 1) {
            lines.push(giveLine(language, lines.length));
          }
          if (prevPhase === 2) {
            return 0;
          }
          return prevPhase + 1;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
