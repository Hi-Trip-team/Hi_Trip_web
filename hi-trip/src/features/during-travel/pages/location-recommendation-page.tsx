"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { useLocationRecommendations } from "../hooks/use-location-recommendations"

export function LocationRecommendationPage() {
  const { tripId } = useParams()
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { data, isLoading } = useLocationRecommendations(tripId!)

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>
  }

  const nextSlide = () => {
    if (data?.recommendations) {
      setCurrentSlide((prev) => (prev + 4 >= data.recommendations.length ? 0 : prev + 4))
    }
  }

  const prevSlide = () => {
    if (data?.recommendations) {
      setCurrentSlide((prev) => (prev - 4 < 0 ? Math.max(0, data.recommendations.length - 4) : prev - 4))
    }
  }

  const visibleRecommendations = data?.recommendations.slice(currentSlide, currentSlide + 4)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">서울여행 사용자 장소 추천</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">추천 장소 설정하기</Button>
      </div>

      {/* Location Recommendations Carousel */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">전체보기 / 서울 동작구 / 서울 서대문구 / 경기도 이천</div>
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {visibleRecommendations?.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              onClick={() => navigate(`/during-travel/locations/${rec.id}`)}
            >
              <img src={rec.image || "/placeholder.svg"} alt={rec.name} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-blue-500">추천 점수:</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < rec.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({rec.reviews}위)</span>
                </div>
                <div className="text-xs text-gray-600">어드바이저: {rec.discount}% 할인</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">서울여행</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">구분</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">번경</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">시간</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">방문지</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">이동수단</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">주요 내용</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">집결지</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">예산</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data?.schedule.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{item.order}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <span className="inline-flex items-center">
                      <span className="mr-1">▲</span>
                      <span>▼</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.transportation}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.meetingPoint}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
