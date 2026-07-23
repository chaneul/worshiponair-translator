import { createContext, useContext, useState, ReactNode } from "react";
import type { Language } from "./languages";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  originalLanguage: Language;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  originalLanguage = "English",
}: {
  children: ReactNode;
  originalLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>("Korean");
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, originalLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
