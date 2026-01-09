"use client"

import { useParams } from "react-router-dom"
import { Button } from "@/shared/components/ui/button"
import { useLocationDetail } from "../hooks/use-location-detail"

export function LocationDetailPage() {
  const { locationId } = useParams()
  // const navigate = useNavigate()
  const { data: location, isLoading } = useLocationDetail(locationId!)

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="bg-white rounded-lg p-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">여행 중 장소 추천 정보</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">추천 장소 설정하기</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">방문지명</div>
            <div className="text-sm text-gray-900">{location?.name}</div>
          </div>
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">숙박편</div>
            <div className="text-sm text-gray-900">{location?.accommodation}</div>
          </div>
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">주소</div>
            <div className="text-sm text-gray-900">{location?.address}</div>
          </div>
          <div className="bg-white p-6 row-span-3 flex items-center justify-center">
            <img
              src={location?.imageUrl || "/placeholder.svg?height=300&width=400"}
              alt="Location"
              className="w-full h-64 object-cover rounded"
            />
          </div>
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">업장로 정보</div>
            <div className="text-sm text-gray-900">{location?.businessInfo}</div>
          </div>
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">활동 시간</div>
            <div className="text-sm text-gray-900">{location?.operatingHours}</div>
          </div>
          <div className="bg-white p-6">
            <div className="text-sm font-medium text-gray-700 mb-2">AI 대책 일치 추천</div>
            <div className="text-sm text-gray-900">{location?.aiRecommendation}</div>
          </div>
          <div className="bg-white p-6 col-span-2">
            <div className="text-sm font-medium text-gray-700 mb-2">AI 자동생성 정보</div>
            <div className="text-sm text-gray-900">{location?.aiGeneratedInfo}</div>
          </div>
          <div className="bg-white p-6 col-span-2">
            <div className="text-sm font-medium text-gray-700 mb-2">활동 상세 정보</div>
            <div className="text-sm text-gray-900">{location?.activityDetails}</div>
          </div>
          <div className="bg-white p-6 col-span-2">
            <div className="text-sm font-medium text-gray-700 mb-2">집결지 상세주소</div>
            <div className="text-sm text-gray-900">{location?.meetingPointAddress}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
