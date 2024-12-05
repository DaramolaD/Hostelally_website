// import { User } from "@/contexts/UserContext";

export const getUserInitials = (
  user: { firstName: string; lastName: string } | null
): string => {
  if (!user) return ""; // Handle null or undefined user gracefully
  const { firstName, lastName } = user;
  const firstInitial = firstName?.charAt(0) || ""; // Get the first character of the first name
  const lastInitial = lastName?.charAt(0) || ""; // Get the first character of the last name
  return `${firstInitial}${lastInitial}`.toUpperCase(); // Combine and capitalize
};
