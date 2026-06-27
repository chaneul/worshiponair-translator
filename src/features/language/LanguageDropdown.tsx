import { useRef, useState, useCallback } from "react";
import "./languageDropdown.css";
import GlobeIcon from "../../shared/icons/GlobeIcon";
import DownIcon from "../../shared/icons/DownIcon";
import CheckIcon from "../../shared/icons/CheckIcon";
import { LANGUAGES } from "../../shared/lib/languages";
import { useDismiss } from "../../shared/lib/useDismiss";
import { useLanguage } from "../../shared/lib/LanguageContext";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language: selected, setLanguage } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  const close = useCallback(() => setOpen(false), []);
  useDismiss(wrapperRef, close, open);

  return (
    <div className="lang" ref={wrapperRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        {selected}
        <DownIcon />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label="Language">
          {LANGUAGES.map((lang) => (
            <li key={lang} role="option" aria-selected={lang === selected}>
              <button
                type="button"
                className="lang-option"
                onClick={() => {
                  if (lang !== selected) {
                    setLanguage(lang);
                  }
                  setOpen(false);
                }}
              >
                <span>{lang}</span>
                {lang === selected && <CheckIcon />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
