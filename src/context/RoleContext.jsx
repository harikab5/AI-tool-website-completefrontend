import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <RoleContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
} 