import axiosInstance from "@/libs/axiosInstance";
import { API_ENDPOINTS } from "@/libs/endpoints";
import axios from "axios";
export const signUp = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.SIGNUP,
    credentials
  );
  return response.data;
};
export const signIn = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.SIGNIN,
    credentials
  );
  return response.data;
};
export const logOut = async () => {
  const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
  return response.data;
};
export const forGotPassword = async (credentials: { email: string }) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.FORGOTPASSWORD,
    credentials
  );
  return response.data;
};
export const validateToken = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.AUTH.CHECKAUTH);
  return response.data;
};
export const fetchCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export const validateTokenMiddleWare = async (token: string | undefined) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.AUTH.CHECKAUTH, {
      headers: {
        "Content-Type": "application/json",
        Cookie: `auth_token=${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (axios.isAxiosError(error)) {
      // Axios error
      console.error("Error during token validation:", error.response?.data);
      console.error("Axios error during token validation:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    } else {
      // Non-Axios error
      console.error("Unexpected error during token validation:", error);
    }
    throw error;
  }
};
