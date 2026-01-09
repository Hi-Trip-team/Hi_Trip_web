import { apiRequest } from "../client"
import { API_ENDPOINTS } from "../endpoints"
import type { LoginRequest, LoginResponse, RegisterRequest, UserDetail } from "@/shared/types/api"

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiRequest<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
      method: "POST",
      json: credentials,
    })
  },

  logout: async (): Promise<{ message: string }> => {
    return apiRequest<{ message: string }>(API_ENDPOINTS.AUTH.LOGOUT, {
      method: "POST",
    })
  },

  register: async (data: RegisterRequest): Promise<UserDetail> => {
    return apiRequest<UserDetail>(API_ENDPOINTS.AUTH.REGISTER, {
      method: "POST",
      json: data,
    })
  },

  getProfile: async (): Promise<UserDetail> => {
    return apiRequest<UserDetail>(API_ENDPOINTS.AUTH.PROFILE)
  },

  getStaffList: async (): Promise<UserDetail[]> => {
    return apiRequest<UserDetail[]>(API_ENDPOINTS.AUTH.STAFF)
  },

  getStaffDetail: async (id: number): Promise<UserDetail> => {
    return apiRequest<UserDetail>(API_ENDPOINTS.AUTH.STAFF_DETAIL(id))
  },

  approveStaff: async (id: number): Promise<UserDetail> => {
    return apiRequest<UserDetail>(API_ENDPOINTS.AUTH.STAFF_APPROVE(id), {
      method: "POST",
    })
  },
}
