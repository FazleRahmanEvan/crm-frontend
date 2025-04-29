import API from "./api";
import { AuthResponse } from "../types/auth";

export const authService = {
  login: async (email: string, password: string) => {
    const { data } = await API.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    // Save both token and user safely
    if (data?.token) {
      localStorage.setItem("token", data.token);
    }
    if (data?.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data.user;
  },

  signup: async (name: string, email: string, password: string) => {
    const { data } = await API.post<AuthResponse>("/auth/signup", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    return { token: data.token, userId: data.user._id }; // or return full user if needed
  },
};
