import { User } from "@/contexts/UserContext";

export const getUserInitials = (user: { user: User } | null): string => {
  if (!user || !user.user.firstName || !user.user.lastName) {
    return "";
  }

  const firstInitial = user.user.firstName.charAt(0).toUpperCase(); // First letter of first name
  const lastInitial = user.user.lastName.charAt(0).toUpperCase(); // First letter of last name

  return firstInitial + lastInitial; // Combine them for initials
};
