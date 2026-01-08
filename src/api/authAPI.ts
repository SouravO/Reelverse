import type { User } from "@/types/user";
import { apiService } from "./client";

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export const authAPI = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    return apiService.post<LoginResponse>("/auth/login", { email, password });
  },

  register: async (data: RegisterData): Promise<LoginResponse> => {
    return apiService.post<LoginResponse>("/auth/register", data);
  },

  logout: async (): Promise<void> => {
    return apiService.post("/auth/logout");
  },

  refreshToken: async (refreshToken: string): Promise<{ token: string }> => {
    return apiService.post("/auth/refresh", { refreshToken });
  },

  verifyEmail: async (token: string): Promise<{ success: boolean }> => {
    return apiService.post("/auth/verify-email", { token });
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    return apiService.post("/auth/forgot-password", { email });
  },

  resetPassword: async (
    token: string,
    newPassword: string
  ): Promise<{ success: boolean }> => {
    return apiService.post("/auth/reset-password", { token, newPassword });
  },

  getCurrentUser: async (): Promise<User> => {
    return apiService.get<User>("/auth/me");
  },

  updateProfile: async (userId: string, data: Partial<User>): Promise<User> => {
    return apiService.put<User>(`/users/${userId}`, data);
  },
};
