"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { validateToken } from "@/services/auth";
import { useMutation, useQuery } from "@tanstack/react-query";

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

  // // Mutation for Token Validation
  // const mutation = useMutation({
  //   mutationFn: validateToken,
  //   onSuccess: (data) => {
  //     setUser(data); // Set user data on successful validation
  //   },
  //   onError: () => {
  //     setUser(null); // Clear user data if validation fails
  //   },
  // });

  // // Automatically validate token on component mount
  // useEffect(() => {
  //   mutation.mutate(); // Trigger token validation
  // }, []); // Empty dependency array ensures this runs once on load

  // Using `useQuery` to validate the token and manage `user` state
  const { data, error } = useQuery({
    queryKey: ["validateToken"],
    queryFn: validateToken, // Your API function for token validation
    retry: false, // Disable retries if validation fails
  });
  useEffect(() => {
    if (data) {
      console.log("9030", data);
      
      setUser(data); // Set user data when the query succeeds
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
