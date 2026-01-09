import { Card } from "@/shared/components/ui/card"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"
import { Skeleton } from "@/shared/components/ui/skeleton"
import type { RankingItem } from "@/shared/types/api"
import { cn } from "@/shared/utils/cn"
import { RANKING_COLORS } from "@/shared/constants"

interface RankingListProps {
  rankings: RankingItem[]
  isLoading?: boolean
}

export function RankingList({ rankings, isLoading }: RankingListProps) {
  if (isLoading) {
    return <RankingListSkeleton />
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">최신 고객 활동</h3>
        <button className="rounded-full border p-2 hover:bg-accent">+</button>
      </div>
      <div className="space-y-4">
        {rankings.map((item) => (
          <div key={item.rank} className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">#{item.rank}</span>
            <Avatar
              className={cn(
                "h-10 w-10 bg-gradient-to-br",
                RANKING_COLORS[item.rank as keyof typeof RANKING_COLORS] || "from-gray-400 to-gray-500",
              )}
            >
              <AvatarFallback className="text-white">{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground truncate">{item.description}</p>
            </div>
            <span
              className={cn(
                "text-lg font-bold",
                item.percentage >= 75 ? "text-pink-500" : item.percentage >= 60 ? "text-blue-500" : "text-green-500",
              )}
            >
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function RankingListSkeleton() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-4 w-6" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-6 w-12" />
          </div>
        ))}
      </div>
    </Card>
  )
}
