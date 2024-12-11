"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { validateToken } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";

export interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  isVerified: boolean;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Using `useQuery` to validate the token and manage `user` state
  const { data, error } = useQuery({
    queryKey: ["validateToken"],
    queryFn: validateToken,
    retry: false, // Disable retries if validation fails
  });
  useEffect(() => {
    if (data) {
      setUser(data.user); // Set user data when the query succeeds
    }
    if (error) {
      setUser(null); // Clear user data when the query fails
    }
  }, [data, error]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
