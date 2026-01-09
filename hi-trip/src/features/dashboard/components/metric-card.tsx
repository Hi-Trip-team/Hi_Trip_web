import type { LucideIcon } from "lucide-react"
import { Card } from "@/shared/components/ui/card"
import { Skeleton } from "@/shared/components/ui/skeleton"
import { cn } from "@/shared/utils/cn"

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  gradient: string
  isLoading?: boolean
}

export function MetricCard({ title, value, icon: Icon, gradient, isLoading }: MetricCardProps) {
  if (isLoading) {
    return <MetricCardSkeleton />
  }

  return (
    <Card className={cn("relative overflow-hidden border-0 text-white p-6", `bg-gradient-to-br ${gradient}`)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium opacity-90">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="rounded-lg bg-white/20 p-2">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  )
}

export function MetricCardSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>
    </Card>
  )
}
