import { createContext, useContext, useState } from "react";

export const HomeContext = createContext(null);

export default function HomeContextProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "starter",
  });
  const [page, setPage] = useState(1);

  console.log(userData);
  console.log(page);

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
