import type { RegionFilter } from "../types/recommendation"

export const REGIONS: RegionFilter[] = [
  { id: "all", label: "전체보기", value: "all" },
  { id: "seoul-dongjak", label: "서울 동작구", value: "서울특별시-동작구" },
  { id: "seoul-seodaemun", label: "서울 서대문구", value: "서울특별시-서대문구" },
  { id: "seoul-gangnam", label: "서울 강남구", value: "서울특별시-강남구" },
  { id: "seoul-jongno", label: "서울 종로구", value: "서울특별시-종로구" },
  { id: "gyeonggi-icheon", label: "경기도 이천시", value: "경기도-이천시" },
  { id: "gyeonggi-suwon", label: "경기도 수원시", value: "경기도-수원시" },
  { id: "busan-haeundae", label: "부산 해운대구", value: "부산광역시-해운대구" },
  { id: "busan-jung", label: "부산 중구", value: "부산광역시-중구" },
  { id: "jeju-jeju", label: "제주 제주시", value: "제주특별자치도-제주시" },
  { id: "jeju-seogwipo", label: "제주 서귀포시", value: "제주특별자치도-서귀포시" },
  { id: "gangwon-gangneung", label: "강원도 강릉시", value: "강원특별자치도-강릉시" },
  { id: "gyeongnam-tongyeong", label: "경남 통영시", value: "경상남도-통영시" },
]

export const RECOMMENDATION_LEVELS = {
  VERY_HIGH: "매우 높음",
  HIGH: "높음",
  MEDIUM: "보통",
  LOW: "낮음",
} as const
