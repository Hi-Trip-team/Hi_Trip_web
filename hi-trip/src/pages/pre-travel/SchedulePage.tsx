"use client"

import { useState } from "react"
import { Plus, Edit2, Save, X, Trash2, ChevronUp, ChevronDown } from "lucide-react"
import type { ScheduleItem } from "@/types/schedule"
import { mockSchedule } from "@/data/mockSchedules"

export default function PreTravelSchedulePage() {
  const [schedule, setSchedule] = useState(mockSchedule)
  const [selectedDay, setSelectedDay] = useState(1)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingItem, setEditingItem] = useState<ScheduleItem | null>(null)

  const currentDaySchedule = schedule.days.find((d) => d.day === selectedDay)

  const handleAddDay = () => {
    const newDay = schedule.days.length + 1
    setSchedule({
      ...schedule,
      days: [
        ...schedule.days,
        {
          day: newDay,
          items: [],
        },
      ],
    })
    setSelectedDay(newDay)
  }

  const handleDeleteDay = (day: number) => {
    if (schedule.days.length <= 1) {
      alert("최소 1일차는 유지되어야 합니다.")
      return
    }
    setSchedule({
      ...schedule,
      days: schedule.days.filter((d) => d.day !== day).map((d, idx) => ({ ...d, day: idx + 1 })),
    })
    setSelectedDay(1)
  }

  const handleAddItem = () => {
    const newItem: ScheduleItem = {
      id: `${selectedDay}-${Date.now()}`,
      category: "관광",
      time: "09:00",
      destination: "",
      transportation: "도보",
      mainContent: "",
      meetingPoint: "",
      budget: 0,
      order: currentDaySchedule?.items.length || 0,
    }
    setEditingItem(newItem)
  }

  const handleSaveItem = () => {
    if (!editingItem) return

    setSchedule({
      ...schedule,
      days: schedule.days.map((d) => {
        if (d.day === selectedDay) {
          const existingIndex = d.items.findIndex((item) => item.id === editingItem.id)
          if (existingIndex >= 0) {
            // 수정
            return {
              ...d,
              items: d.items.map((item) => (item.id === editingItem.id ? editingItem : item)),
            }
          } else {
            // 추가
            return {
              ...d,
              items: [...d.items, editingItem],
            }
          }
        }
        return d
      }),
    })
    setEditingItem(null)
  }

  const handleDeleteItem = (itemId: string) => {
    setSchedule({
      ...schedule,
      days: schedule.days.map((d) => {
        if (d.day === selectedDay) {
          return {
            ...d,
            items: d.items.filter((item) => item.id !== itemId),
          }
        }
        return d
      }),
    })
  }

  const handleMoveItem = (itemId: string, direction: "up" | "down") => {
    setSchedule({
      ...schedule,
      days: schedule.days.map((d) => {
        if (d.day === selectedDay) {
          const items = [...d.items]
          const index = items.findIndex((item) => item.id === itemId)
          if (index === -1) return d

          if (direction === "up" && index > 0) {
            ;[items[index], items[index - 1]] = [items[index - 1], items[index]]
          } else if (direction === "down" && index < items.length - 1) {
            ;[items[index], items[index + 1]] = [items[index + 1], items[index]]
          }

          return {
            ...d,
            items: items.map((item, idx) => ({ ...item, order: idx })),
          }
        }
        return d
      }),
    })
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">여행</h1>
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {isEditMode ? (
            <>
              <Save className="h-4 w-4" />
              편집 완료
            </>
          ) : (
            <>
              <Edit2 className="h-4 w-4" />
              편집 모드
            </>
          )}
        </button>
      </div>

      {/* 일차 탭 */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {schedule.days.map((day) => (
          <div key={day.day} className="flex items-center gap-1">
            <button
              onClick={() => setSelectedDay(day.day)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                selectedDay === day.day
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              {day.day}일차
            </button>
            {isEditMode && schedule.days.length > 1 && (
              <button
                onClick={() => handleDeleteDay(day.day)}
                className="rounded-lg p-1 text-destructive hover:bg-destructive/10"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        {isEditMode && (
          <button
            onClick={handleAddDay}
            className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-sm font-medium hover:bg-accent/80"
          >
            <Plus className="h-4 w-4" />
            일차 추가
          </button>
        )}
      </div>

      {/* 일정 추가 버튼 */}
      {isEditMode && (
        <button
          onClick={handleAddItem}
          className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium hover:bg-accent/80"
        >
          <Plus className="h-4 w-4" />
          일정 추가
        </button>
      )}

      {/* 일정 표 */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              {isEditMode && <th className="px-4 py-3 text-left text-sm font-medium">순서</th>}
              <th className="px-4 py-3 text-left text-sm font-medium">구분</th>
              <th className="px-4 py-3 text-left text-sm font-medium">시간</th>
              <th className="px-4 py-3 text-left text-sm font-medium">방문지</th>
              <th className="px-4 py-3 text-left text-sm font-medium">이동수단</th>
              <th className="px-4 py-3 text-left text-sm font-medium">주요 내용</th>
              <th className="px-4 py-3 text-left text-sm font-medium">집결지</th>
              <th className="px-4 py-3 text-left text-sm font-medium">예산</th>
              {isEditMode && <th className="px-4 py-3 text-left text-sm font-medium">작업</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {currentDaySchedule?.items.map((item, index) => (
              <tr key={item.id} className="hover:bg-muted/50">
                {isEditMode && (
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleMoveItem(item.id, "up")}
                        disabled={index === 0}
                        className="rounded p-1 hover:bg-accent disabled:opacity-30"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleMoveItem(item.id, "down")}
                        disabled={index === currentDaySchedule.items.length - 1}
                        className="rounded p-1 hover:bg-accent disabled:opacity-30"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                )}
                <td className="px-4 py-3 text-sm">{item.category}</td>
                <td className="px-4 py-3 text-sm">{item.time}</td>
                <td className="px-4 py-3 text-sm">{item.destination}</td>
                <td className="px-4 py-3 text-sm">{item.transportation}</td>
                <td className="px-4 py-3 text-sm">{item.mainContent}</td>
                <td className="px-4 py-3 text-sm">{item.meetingPoint}</td>
                <td className="px-4 py-3 text-sm">{item.budget.toLocaleString()}원</td>
                {isEditMode && (
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="rounded p-1 text-primary hover:bg-primary/10"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="rounded p-1 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
            {currentDaySchedule?.items.length === 0 && (
              <tr>
                <td colSpan={isEditMode ? 9 : 7} className="px-4 py-8 text-center text-muted-foreground">
                  일정이 없습니다. {isEditMode && "일정을 추가해주세요."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 일정 편집 모달 */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-lg bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">일정 {editingItem.id.includes("-") ? "수정" : "추가"}</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">구분</label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2"
                  >
                    <option value="이동">이동</option>
                    <option value="관광">관광</option>
                    <option value="식사">식사</option>
                    <option value="숙박">숙박</option>
                    <option value="자유시간">자유시간</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">시간</label>
                  <input
                    type="time"
                    value={editingItem.time}
                    onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">방문지</label>
                <input
                  type="text"
                  value={editingItem.destination}
                  onChange={(e) => setEditingItem({ ...editingItem, destination: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">이동수단</label>
                <input
                  type="text"
                  value={editingItem.transportation}
                  onChange={(e) => setEditingItem({ ...editingItem, transportation: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">주요 내용</label>
                <textarea
                  value={editingItem.mainContent}
                  onChange={(e) => setEditingItem({ ...editingItem, mainContent: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                  rows={3}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">집결지</label>
                <input
                  type="text"
                  value={editingItem.meetingPoint}
                  onChange={(e) => setEditingItem({ ...editingItem, meetingPoint: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">예산 (원)</label>
                <input
                  type="number"
                  value={editingItem.budget}
                  onChange={(e) => setEditingItem({ ...editingItem, budget: Number(e.target.value) })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setEditingItem(null)}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                취소
              </button>
              <button
                onClick={handleSaveItem}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
