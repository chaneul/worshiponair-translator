import { useEffect, useState } from "react";

export function useRevealLine(
  setCount: React.Dispatch<React.SetStateAction<number>>,
  lines: string[],
  temp: number,
) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "a") {
        setPhase((prevPhase) => {
          if (prevPhase === 0 && temp === 0) {
            setCount((c) => Math.min(c + 1, lines.length));
          } else if (prevPhase === 1 && temp === 1) {
            setCount((c) => Math.min(c + 1, lines.length));
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
