import { createContext, useContext, useState, ReactNode } from "react";

export type TextSize = "small" | "medium" | "large";

interface TextSizeContextValue {
  size: TextSize;
  setSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextValue | undefined>(
  undefined,
);

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [size, setSize] = useState<TextSize>("medium");
  return (
    <TextSizeContext.Provider value={{ size, setSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const ctx = useContext(TextSizeContext);
  if (!ctx)
    throw new Error("useTextSize must be used within a TextSizeProvider");
  return ctx;
}
