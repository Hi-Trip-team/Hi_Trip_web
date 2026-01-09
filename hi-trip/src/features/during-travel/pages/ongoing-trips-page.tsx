"use client"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/components/ui/button"
import { useDuringTravelTrips } from "../hooks/use-during-travel-trips"

export function OngoingTripsPage() {
  const navigate = useNavigate()
  const { data: trips, isLoading } = useDuringTravelTrips()

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="bg-white rounded-lg p-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">진행 중인 여행 리스트</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">추천 장소 설정하기</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">구분</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">번경</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">여행명</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">담당자</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">시작일자</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trips?.map((trip) => (
              <tr
                key={trip.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => navigate(`/during-travel/trips/${trip.id}`)}
              >
                <td className="px-6 py-4 text-sm text-gray-900">{trip.order}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trip.progress}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trip.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trip.manager}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trip.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
