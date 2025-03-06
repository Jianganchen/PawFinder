"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/lib/definitions";

interface UserContextType {
  providerUser: User | null;
  setProviderUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [providerUser, setProviderUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setProviderUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ providerUser, setProviderUser }}>
      {children}
    </UserContext.Provider>
  );
}
