import axiosInstance from "@/libs/axiosInstance";
import { API_ENDPOINTS } from "@/libs/endpoints";
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
export const forGotPassword = async () => {
  const response = await axiosInstance.post(API_ENDPOINTS.AUTH.FORGOTPASSWORD);
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
