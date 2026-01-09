import { useQuery } from "@tanstack/react-query"
import { dashboardApi } from "../api/dashboard.api"

export const DASHBOARD_QUERY_KEYS = {
  stats: ["dashboard", "stats"] as const,
  revenue: ["dashboard", "revenue"] as const,
  rankings: ["dashboard", "rankings"] as const,
}

export function useDashboardStats() {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.stats,
    queryFn: dashboardApi.getStats,
  })
}

export function useDashboardRevenue() {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.revenue,
    queryFn: dashboardApi.getRevenue,
  })
}

export function useDashboardRankings() {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.rankings,
    queryFn: dashboardApi.getRankings,
  })
}
