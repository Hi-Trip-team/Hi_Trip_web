import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/shared/components/ui/card"
import { Skeleton } from "@/shared/components/ui/skeleton"
import type { RevenueData } from "@/shared/types/api"

interface RevenueChartProps {
  data: RevenueData
  isLoading?: boolean
}

export function RevenueChart({ data, isLoading }: RevenueChartProps) {
  if (isLoading) {
    return <RevenueChartSkeleton />
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">예약 수익 그래프</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold">${data.total.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">{data.change}</span>
          </div>
        </div>
        <button className="rounded-full border p-2 hover:bg-accent">+</button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data.data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#colorRevenue)" />
          <Area
            type="monotone"
            dataKey="comparison"
            stroke="#8b5cf6"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

export function RevenueChartSkeleton() {
  return (
    <Card className="p-6">
      <div className="mb-6 space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-24" />
      </div>
      <Skeleton className="h-[250px] w-full" />
    </Card>
  )
}
