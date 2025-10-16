"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { mockCustomers } from "../../data/mockCustomers"
import type { Customer } from "../../types/customer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function DuringTravelCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isServiceAlertOpen, setIsServiceAlertOpen] = useState(false)

  const filteredCustomers = useMemo(() => {
    if (!searchQuery.trim()) return mockCustomers
    return mockCustomers.filter((customer) => customer.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  const getRiskStatusColor = (status: Customer["riskStatus"]) => {
    switch (status) {
      case "안전":
        return "text-success"
      case "주의":
        return "text-warning"
      case "위험":
        return "text-danger"
      default:
        return "text-muted-foreground"
    }
  }

  const getHealthStatusColor = (value: number, type: "heartRate" | "oxygen") => {
    if (type === "heartRate") {
      if (value < 60 || value > 100) return "text-danger"
      if (value < 70 || value > 90) return "text-warning"
      return "text-success"
    } else {
      if (value < 95) return "text-danger"
      if (value < 97) return "text-warning"
      return "text-success"
    }
  }

  const handleOpenChat = () => {
    setIsServiceAlertOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* 대제목 */}
      <div>
        <h1 className="text-3xl font-bold">신청자 현황</h1>
      </div>

      {/* 신청 인원 */}
      <div className="text-lg font-medium">
        신청 인원 : <span className="text-primary">{mockCustomers.length}</span>명
      </div>

      {/* 검색 바 */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="이름으로 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
        <button
          onClick={() => {}}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          검색
        </button>
      </div>

      {/* 고객 정보 테이블 */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-sm font-semibold">이름</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">생년월일</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">성별</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">연락처</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">이메일</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  <div>대화</div>
                  <div className="flex gap-4 mt-1 text-xs justify-around font-normal text-muted-foreground">
                    <span>대화 내용</span>
                    <span>대화</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">위험여부</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  <div>건강상태확인</div>
                  <div className="flex gap-4 mt-1 text-xs justify-around font-normal text-muted-foreground">
                    <span>심박수</span>
                    <span>산소포화도</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                    검색 결과가 없습니다.
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium">{customer.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{customer.birthDate}</td>
                    <td className="px-4 py-3 text-sm">{customer.gender}</td>
                    <td className="px-4 py-3 text-sm">{customer.phone}</td>
                    <td className="px-4 py-3 text-sm">{customer.email}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-4 text-sm justify-between">
                        {customer.chat.state === "O" ? (
                          <button
                            onClick={handleOpenChat}
                            className="text-primary font-medium cursor-pointer hover:underline"
                          >
                            보기
                          </button>
                        ) : (
                          <span className="px-2 text-muted-foreground">-</span>
                        )}
                        <span className="text-foreground">{customer.chat.state}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-medium ${getRiskStatusColor(customer.riskStatus)}`}>
                        {customer.riskStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-4 text-sm justify-between">
                        <span className={getHealthStatusColor(customer.healthStatus.heartRate, "heartRate")}>
                          {customer.healthStatus.heartRate} bpm
                        </span>
                        <span className={getHealthStatusColor(customer.healthStatus.oxygenSaturation, "oxygen")}>
                          {customer.healthStatus.oxygenSaturation}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isServiceAlertOpen} onOpenChange={setIsServiceAlertOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">서비스 준비 중</DialogTitle>
            <DialogDescription className="text-center pt-4 text-base">
              채팅 기능은 현재 준비 중입니다.
              <br />
              빠른 시일 내에 서비스를 제공하겠습니다.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setIsServiceAlertOpen(false)}
              className="px-8 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              확인
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
