"use client"

import { useEffect, useState } from "react"
import { useScheduleData } from "../hooks/use-schedule-data"
import { Skeleton } from "@/shared/components/ui/skeleton"
import { Button } from "@/shared/components/ui/button"
import { ActionButton, UpcomingTrips } from "@/shared/components/widget"
import { usePaneStore } from "@/shared/store"

export function ScheduleManagementPage() {
  const { data: scheduleData, isLoading } = useScheduleData()
  const [activeDay, setActiveDay] = useState(1)

  const setWidgets = usePaneStore((state) => state.setWidgets);
    
  useEffect(() => {
    setWidgets([
      <ActionButton title="고객 추가하기" />,
      <UpcomingTrips />
    ]);
    }, [setWidgets]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  const currentSchedule = scheduleData?.days.find((day: any) => day.day === activeDay)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{scheduleData?.title || "서울 여행"}</h1>
          <div className="flex items-center gap-4 mt-2">
            {scheduleData?.days.map((day: any) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`text-sm font-medium px-3 py-1 rounded ${
                  activeDay === day.day ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {day.day}일차
              </button>
            ))}
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">일정 추가하기</Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                  구분
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  변경
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                  시간
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                  방문지
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                  이동수단
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  주요 내용
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                  담당자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  예산
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentSchedule?.items.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.order}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-lg">▲</span>
                      <span className="text-lg">▼</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.timeRange}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.transportation}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.manager}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
