export const APP_NAME = "Hi Trip" as const

export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PRE_TRAVEL_CUSTOMERS: "/pre-travel/customers",
  PRE_TRAVEL_SCHEDULE: "/pre-travel/schedule",
  DURING_TRAVEL_TRIPS: "/during-travel/trips",
  DURING_TRAVEL_RECOMMENDATIONS: "/during-travel/recommendations",
  POST_TRAVEL: "/post-travel",
} as const

export const SIDEBAR_NAV_ITEMS = [
  { label: "Dashboard", icon: "LayoutGrid", path: ROUTES.DASHBOARD },
  { label: "여행 전 관리", icon: "Settings", path: ROUTES.PRE_TRAVEL_CUSTOMERS, hasSubmenu: true },
  { label: "고객 관리", icon: "Users", path: ROUTES.PRE_TRAVEL_CUSTOMERS, isSubmenu: true },
  { label: "일정 관리", icon: "Calendar", path: ROUTES.PRE_TRAVEL_SCHEDULE, isSubmenu: true },
  { label: "여행 중 관리", icon: "MapPin", path: ROUTES.DURING_TRAVEL_TRIPS, hasSubmenu: true },
  { label: "고객 관리", icon: "Users", path: ROUTES.DURING_TRAVEL_TRIPS, isSubmenu: true },
  {
    label: "여행 추천",
    icon: "ThumbsUp",
    path: ROUTES.DURING_TRAVEL_RECOMMENDATIONS,
    isSubmenu: true,
  },
  { label: "여행 후 관리", icon: "BarChart3", path: ROUTES.POST_TRAVEL },
] as const
