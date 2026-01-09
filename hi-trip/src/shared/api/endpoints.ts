export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login/",
    LOGOUT: "/api/auth/logout/",
    REGISTER: "/api/auth/register/",
    PROFILE: "/api/auth/profile/",
    STAFF: "/api/auth/staff/",
    STAFF_DETAIL: (id: number) => `/api/auth/staff/${id}/`,
    STAFF_APPROVE: (id: number) => `/api/auth/staff/${id}/approve/`,
  },
  PLACES: {
    LIST: "/api/places/",
    DETAIL: (id: number) => `/api/places/${id}/`,
    COORDINATORS: (placeId: number) => `/api/places/${placeId}/coordinators/`,
    COORDINATOR_DETAIL: (placeId: number, coordinatorId: number) =>
      `/api/places/${placeId}/coordinators/${coordinatorId}/`,
    EXPENSES: (placeId: number) => `/api/places/${placeId}/expenses/`,
    EXPENSE_DETAIL: (placeId: number, expenseId: number) => `/api/places/${placeId}/expenses/${expenseId}/`,
    CALCULATE_EXPENSES: (placeId: number) => `/api/places/${placeId}/expenses/calculate/`,
  },
  TRIPS: {
    LIST: "/api/trips/",
    DETAIL: (id: number) => `/api/trips/${id}/`,
    ASSIGN_MANAGER: (id: number) => `/api/trips/${id}/assign-manager/`,
    PARTICIPANTS: (tripId: number) => `/api/trips/${tripId}/participants/`,
    SCHEDULES: (tripId: number) => `/api/trips/${tripId}/schedules/`,
    SCHEDULE_DETAIL: (tripId: number, scheduleId: number) => `/api/trips/${tripId}/schedules/${scheduleId}/`,
  },
  CATEGORIES: {
    LIST: "/api/categories/",
    DETAIL: (id: number) => `/api/categories/${id}/`,
  },
  COORDINATOR_ROLES: {
    LIST: "/api/coordinator-roles/",
    DETAIL: (id: number) => `/api/coordinator-roles/${id}/`,
  },
  
  // ⚠️ TODO: Add other endpoints as needed!!
  DASHBOARD: {
    STATS: "/api/dashboard/stats/",
    REVENUE: "/api/dashboard/revenue/",
    RANKINGS: "/api/dashboard/rankings/",
  },
  DURING_TRAVEL: {
    TRIPS: "/api/during-travel/trips/",
    RECOMMENDATIONS: "/api/during-travel/recommendations",
    LOCATIONS: "/api/during-travel/locations",
    CHAT: "/api/during-travel/chat",
  },
} as const
