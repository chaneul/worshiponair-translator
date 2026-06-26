import { useState } from "react";
import LiveTranslation from "./LiveTranslationDisplay";
import { lines } from "./source";
import { useAddText } from "./addSentence";

export default function LiveTranslationSource() {
  const [count, setCount] = useState(0);

  // press e to add line
  useAddText(setCount, lines);

  return (
    <div className="live-translation-source">
      <LiveTranslation lines={lines.slice(0, count)} />
    </div>
  );
}
