export interface ScheduleItem {
  id: string
  category: string // 구분
  time: string
  destination: string // 방문지
  transportation: string // 이동수단
  mainContent: string // 주요 내용
  meetingPoint: string // 집결지
  budget: number // 예산
  order: number
}

export interface DaySchedule {
  day: number
  items: ScheduleItem[]
}

export interface TravelSchedule {
  id: string
  title: string
  days: DaySchedule[]
}
