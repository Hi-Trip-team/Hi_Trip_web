export const UI_CONFIG = {
  APP_NAME: "Hi Trip",
  SIDEBAR_WIDTH: "256px",
  HEADER_HEIGHT: "64px",
} as const

export const TABLE_STATUS = {
  COMPLETED: { label: "O", color: "green" },
  PENDING: { label: "X", color: "red" },
} as const

export const SOCIAL_AUTH = {
  KAKAO: { name: "카카오", color: "yellow-400", icon: "kakao" },
  NAVER: { name: "네이버", color: "green-500", icon: "naver" },
  APPLE: { name: "Apple", color: "gray-800", icon: "apple" },
} as const
