// authService.ts
import API from "./api";
import { AuthResponse } from "../types/auth";

export const authService = {
  login: async (email: string, password: string) => {
    const { data } = await API.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    return {
      token: data.token,
      userId: data.user._id,
    };
  },

  signup: async (email: string, password: string) => {
    const { data } = await API.post<AuthResponse>("/auth/signup", {
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    return {
      token: data.token,
      userId: data.user._id, // you can choose other fields as needed
    };
  },
};
