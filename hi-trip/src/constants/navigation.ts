import { LayoutDashboard, Users, Calendar, MapPin, ThumbsUp, type LucideIcon } from "lucide-react"

export interface NavigationItem {
  name: string
  href?: string
  icon?: LucideIcon
  children?: NavigationItem[]
}

export const NAVIGATION: NavigationItem[] = [
  {
    name: "대시보드",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "여행 전 관리",
    icon: Calendar,
    children: [
      {
        name: "고객 관리",
        href: "/pre-travel/customers",
        icon: Users,
      },
      {
        name: "일정 관리",
        href: "/pre-travel/schedule",
        icon: Calendar,
      },
    ],
  },
  {
    name: "여행 중 관리",
    icon: MapPin,
    children: [
      {
        name: "고객 관리",
        href: "/during-travel/customers",
        icon: Users,
      },
      {
        name: "여행 추천",
        href: "/during-travel/recommendations",
        icon: ThumbsUp,
      },
    ],
  },
  {
    name: "여행 후 관리",
    icon: ThumbsUp,
    children: [],
  },
]
