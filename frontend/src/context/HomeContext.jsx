import { createContext, useContext, useState } from "react";

export const HomeContext = createContext(null);

export default function HomeContextProvider({ children }) {
  const [userData, setUserData] = useState({
    role: "starter",
  });
  const [page, setPage] = useState(0);

  return (
    <HomeContext.Provider value={{ userData, setUserData, page, setPage }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (!context) throw new Error("CAN'T USE CONTEXT HERE");
  return context;
}
