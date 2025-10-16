export type RecommendationLevel = "매우 추천" | "추천" | "보통"

export interface PlaceRecommendation {
  id: string
  name: string
  region: string
  city: string
  district: string
  imageUrl: string
  recommendationLevel: RecommendationLevel
  specialNote: string
  advantage: string
  category: string
}

export interface RegionFilter {
  id: string
  label: string
  value: string
}
