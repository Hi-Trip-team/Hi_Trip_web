import StatsCards from "@/components/dashboard/StatsCards"
import ActivityChart from "@/components/dashboard/ActivityChart"
import RecentActivity from "@/components/dashboard/RecentActivity"
import TravelersTable from "@/components/dashboard/TravelersTable"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">여행 관리 대시보드</h1>
        <p className="text-muted-foreground mt-1">실시간으로 여행자 데이터를 모니터링하고 관리하세요</p>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <ActivityChart />
        </div>
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>

      <TravelersTable />
    </div>
  )
}
