"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { usePreTravelCustomer } from "../hooks/use-pre-travel-customer"
import { Skeleton } from "@/shared/components/ui/skeleton"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"
import { usePaneStore } from "@/shared/store"
import { useEffect } from "react"
import { ActionButton, UpcomingTrips } from "@/shared/components/widget"

export function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: customer, isLoading } = usePreTravelCustomer(id || "")

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

  if (!customer) {
    return <div>Customer not found</div>
  }

  const infoRows = [
    { label: "생년월일", value: customer.birthDate },
    { label: "영문이름", value: customer.englishName },
    { label: "연락처", value: customer.phone },
    { label: "성별", value: customer.gender },
    { label: "국가", value: customer.nationality },
    { label: "이메일", value: customer.email },
    { label: "주소", value: customer.address },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/pre-travel/customers" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">고객 상세 정보 관리</h1>
          <p className="text-sm text-gray-600 mt-1">고객 상세 정보 관리</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-4">
              {infoRows.map((row, index) => (
                <div key={index} className="contents">
                  <div className="text-sm font-medium text-gray-500 py-3 border-b border-gray-100">{row.label}</div>
                  <div className="text-sm text-gray-900 py-3 border-b border-gray-100">{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-32 h-32">
              <AvatarFallback className="bg-gray-200 text-gray-600 text-2xl">{customer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-700">이연서</span>
          </div>
        </div>
      </div>
    </div>
  )
}
