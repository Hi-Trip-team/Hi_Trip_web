export type TravelerStatus = "active" | "completed" | "scheduled"

export interface Traveler {
  id: string
  name: string
  destination: string
  startDate: string
  endDate: string
  status: TravelerStatus
  progress: number
}

export interface TravelStats {
  total: number
  active: number
  completed: number
  scheduled: number
}

export interface ActivityData {
  date: string
  active: number
  completed: number
}
