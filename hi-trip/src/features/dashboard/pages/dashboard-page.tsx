import { TrendingUp, TrendingDown, Package, DollarSign } from "lucide-react"
import { useDashboardStats, useDashboardRevenue, useDashboardRankings } from "../hooks/use-dashboard-stats"
import { MetricCard, RevenueChart, RankingList } from "../components"
import { METRIC_COLORS } from "@/shared/constants"
import { usePaneStore } from "@/shared/store";
import { useEffect } from "react";
import { CalendarWidget, LatestCustomers } from "@/shared/components/widget";

export function DashboardPage() {
  const { data: stats, isLoading: statsLoading } = useDashboardStats()
  const { data: revenue, isLoading: revenueLoading } = useDashboardRevenue()
  const { data: rankings, isLoading: rankingsLoading } = useDashboardRankings()
  
  const setWidgets = usePaneStore((state) => state.setWidgets);

  useEffect(() => {
    setWidgets([
      <CalendarWidget key="cal" />,
      <LatestCustomers key="cust" />
    ]);
  }, [setWidgets]);

  return (
      <div className="space-y-6 flex-1">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-title-1">Dashboard</h1>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="신규 고객 수"
            value={stats?.reservations.total || 0}
            icon={TrendingUp}
            gradient={METRIC_COLORS.SUCCESS}
            isLoading={statsLoading}
          />
          <MetricCard
            title="취소 비율 감소"
            value={`${stats?.cancellationRate.rate || 0}%`}
            icon={TrendingDown}
            gradient={METRIC_COLORS.PRIMARY}
            isLoading={statsLoading}
          />
          <MetricCard
            title="인기 상품 증가"
            value={`${stats?.popularProducts.count || 0}%`}
            icon={Package}
            gradient={METRIC_COLORS.INFO}
            isLoading={statsLoading}
          />
          <MetricCard
            title="매출액 전년 대비"
            value={`${stats?.salesIncrease.rate || 0}%`}
            icon={DollarSign}
            gradient={METRIC_COLORS.NEUTRAL}
            isLoading={statsLoading}
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RevenueChart data={revenue || { total: 0, change: "0%", data: [] }} isLoading={revenueLoading} />
          <RankingList rankings={rankings || []} isLoading={rankingsLoading} />
        </div>
      </div>
  )
}
