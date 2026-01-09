export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PRE_TRAVEL: {
    CUSTOMERS: "/pre-travel/customers",
    CUSTOMER_DETAIL: (id: string) => `/pre-travel/customers/${id}`,
    SCHEDULE: "/pre-travel/schedule",
  },
  DURING_TRAVEL: {
    TRIPS: "/during-travel/trips",
    TRIP_DETAIL: (tripId: string) => `/during-travel/trips/${tripId}`,
    LOCATION_DETAIL: (locationId: string) => `/during-travel/locations/${locationId}`,
    CHAT: (customerId: string) => `/during-travel/chat/${customerId}`,
    RECOMMENDATION: `/during-travel/recommendation`,
  },
  POST_TRAVEL: "/post-travel",
} as const
