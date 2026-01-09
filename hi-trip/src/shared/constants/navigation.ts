import { ROUTES } from "./routes"

export interface NavItem {
  label: string
  icon: string
  path: string
  hasBackground?: boolean
  hasSubmenu?: boolean
  isSubmenu?: boolean
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    icon: "LayoutGrid",
    path: ROUTES.DASHBOARD,
    hasBackground: true,
  },
  {
    label: "여행 전 관리",
    icon: "Settings",
    path: ROUTES.PRE_TRAVEL.CUSTOMERS,
    hasSubmenu: true,
    children: [
      {
        label: "고객 관리",
        icon: "Users",
        path: ROUTES.PRE_TRAVEL.CUSTOMERS,
        isSubmenu: true,
      },
      {
        label: "일정 관리",
        icon: "Calendar",
        path: ROUTES.PRE_TRAVEL.SCHEDULE,
        isSubmenu: true,
      },
    ],
  },
  {
    label: "여행 중 관리",
    icon: "MapPin",
    path: ROUTES.DURING_TRAVEL.TRIPS,
    hasSubmenu: true,
    children: [
      {
        label: "고객 관리",
        icon: "Users",
        path: ROUTES.DURING_TRAVEL.TRIPS,
        isSubmenu: true,
      },
      {
        label: "여행 추천",
        icon: "ThumbsUp",
        path: ROUTES.DURING_TRAVEL.RECOMMENDATION,
        isSubmenu: true,
      },
    ],
  },
  {
    label: "여행 후 관리",
    icon: "BarChart3",
    path: ROUTES.POST_TRAVEL,
  },
] as const
