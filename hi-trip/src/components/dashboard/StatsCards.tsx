import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { STATS_CONFIG } from "@/constants/stats"
import { useTravelStore } from "@/store/useTravelStore"

export default function StatsCards() {
  const stats = useTravelStore((state) => state.stats)

  const statsWithChange = [
    { ...stats, key: "total", value: stats.total, change: "+12.5%", trend: "up" },
    { ...stats, key: "active", value: stats.active, change: "+8.2%", trend: "up" },
    { ...stats, key: "completed", value: stats.completed, change: "+23.1%", trend: "up" },
    { ...stats, key: "scheduled", value: stats.scheduled, change: "-4.3%", trend: "down" },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsWithChange.map((stat, index) => {
        const config = STATS_CONFIG[index]
        const Icon = config.icon
        return (
          <Card key={config.key}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{config.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
              <p className={`text-xs ${stat.trend === "up" ? "text-accent" : "text-destructive"}`}>
                {stat.change} {config.changeLabel}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
