import { Users, Plane, CheckCircle2, Clock } from "lucide-react"

export const STATS_CONFIG = [
  {
    key: "total",
    title: "전체 여행자",
    icon: Users,
    changeLabel: "지난 달 대비",
  },
  {
    key: "active",
    title: "진행 중",
    icon: Plane,
    changeLabel: "지난 달 대비",
  },
  {
    key: "completed",
    title: "완료",
    icon: CheckCircle2,
    changeLabel: "지난 달 대비",
  },
  {
    key: "scheduled",
    title: "예정",
    icon: Clock,
    changeLabel: "지난 달 대비",
  },
] as const

export const STATUS_CONFIG = {
  active: { label: "진행 중", variant: "default" as const },
  completed: { label: "완료", variant: "secondary" as const },
  scheduled: { label: "예정", variant: "outline" as const },
}
