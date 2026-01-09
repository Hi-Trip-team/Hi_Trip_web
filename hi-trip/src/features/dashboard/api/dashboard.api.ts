import { apiClient } from "@/shared/api/client"
import { API_ENDPOINTS } from "@/shared/api/endpoints"
import {
  type DashboardStats,
  DashboardStatsSchema,
  type RevenueData,
  RevenueDataSchema,
  RankingsSchema,
  type RankingItem,
  ApiResponseSchema,
} from "@/shared/types/api"

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await apiClient.get(API_ENDPOINTS.DASHBOARD.STATS).json()
    const validated = ApiResponseSchema(DashboardStatsSchema).parse(response)
    return validated.data
  },

  getRevenue: async (): Promise<RevenueData> => {
    const response = await apiClient.get(API_ENDPOINTS.DASHBOARD.REVENUE).json()
    const validated = ApiResponseSchema(RevenueDataSchema).parse(response)
    return validated.data
  },

  getRankings: async (): Promise<RankingItem[]> => {
    const response = await apiClient.get(API_ENDPOINTS.DASHBOARD.RANKINGS).json()
    const validated = ApiResponseSchema(RankingsSchema).parse(response)
    return validated.data
  },
}
