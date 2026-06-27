import { useState, useEffect } from "react";
import LiveTranslation from "./LiveTranslationDisplay";
import { sermonLines } from "./sermonLines";
import { useRevealLine } from "./useRevealLine";
import { useLanguage } from "../../shared/lib/LanguageContext";

export default function LiveTranslationSource() {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);

  const activeLines = sermonLines[language];

  // press e to add line
  useRevealLine(setCount, activeLines);

  return (
    <div className="live-translation-source">
      <LiveTranslation lines={activeLines.slice(0, count)} />
    </div>
  );
}
