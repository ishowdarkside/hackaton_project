import { createContext, useContext, useState } from "react";

export const OnboardingContext = createContext(null);

export default function OnboardingContextProvider({ children }) {
  const [page, setPage] = useState(0);
  const [selectedField, setSelectedField] = useState(null);

  return (
    <OnboardingContext.Provider
      value={{
        page,
        setPage,
        selectedField,
        setSelectedField,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error("CAN'T USE CONTEXT HERE");
  return context;
}
