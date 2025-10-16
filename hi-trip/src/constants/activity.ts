import type { ActivityData } from "@/types/traveler"

export const MOCK_ACTIVITY_DATA: ActivityData[] = [
  { date: "01/10", active: 186, completed: 80 },
  { date: "02/10", active: 305, completed: 200 },
  { date: "03/10", active: 237, completed: 120 },
  { date: "04/10", active: 273, completed: 190 },
  { date: "05/10", active: 209, completed: 130 },
  { date: "06/10", active: 314, completed: 140 },
  { date: "07/10", active: 285, completed: 165 },
  { date: "08/10", active: 342, completed: 210 },
  { date: "09/10", active: 298, completed: 185 },
  { date: "10/10", active: 356, completed: 225 },
  { date: "11/10", active: 312, completed: 195 },
  { date: "12/10", active: 378, completed: 240 },
]

export const CHART_CONFIG = {
  active: {
    label: "진행 중",
    color: "hsl(var(--chart-1))",
  },
  completed: {
    label: "완료",
    color: "hsl(var(--chart-2))",
  },
}
