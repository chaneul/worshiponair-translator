import { createContext, useContext, useState, type ReactNode } from "react";

interface ShowOriginalContextValue {
  showOriginal: boolean;
  toggleShowOriginal: () => void;
}

const ShowOriginalContext = createContext<ShowOriginalContextValue | undefined>(
  undefined,
);

export function ShowOriginalProvider({ children }: { children: ReactNode }) {
  const [showOriginal, setShowOriginal] = useState(false);
  const toggleShowOriginal = () => setShowOriginal((prev) => !prev);

  return (
    <ShowOriginalContext.Provider value={{ showOriginal, toggleShowOriginal }}>
      {children}
    </ShowOriginalContext.Provider>
  );
}

export function useShowOriginal() {
  const context = useContext(ShowOriginalContext);
  if (context === undefined) {
    throw new Error(
      "useShowOriginal must be used within a ShowOriginalProvider",
    );
  }
  return context;
}
