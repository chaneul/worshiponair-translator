import { useEffect } from "react";

export function useRevealLine(
  setCount: React.Dispatch<React.SetStateAction<number>>,
  lines: string[],
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "e") {
        setCount((prev) => Math.min(prev + 1, lines.length));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
