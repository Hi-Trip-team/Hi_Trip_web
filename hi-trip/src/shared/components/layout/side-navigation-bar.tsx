"use client"

import { Link, useLocation } from "react-router-dom"
import { Plane, LayoutGrid, Settings, Users, Calendar, MapPin, ThumbsUp, BarChart3, ChevronDown } from "lucide-react"
import { useState } from "react"
import { UI_CONFIG, NAV_ITEMS } from "@/shared/constants"
import { cn } from "@/shared/utils/cn"

const ICON_MAP = {
  LayoutGrid,
  Settings,
  Users,
  Calendar,
  MapPin,
  ThumbsUp,
  BarChart3,
} as const

export function Sidebar() {
  const location = useLocation()
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["여행 전 관리"])

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const isMenuExpanded = (label: string) => expandedMenus.includes(label)
  const isPathActive = (path: string) => location.pathname === path

  return (
    <aside className="w-58 bg-blue-900 text-white flex flex-col h-screen">
      {/* Logo Section */}
      <div className="px-4 py-5 ml-2 flex items-center gap-2 border-b border-blue-800">
        <Plane className="h-7 w-7 text-blue-200" />
        <h1 className="text-title-2 font-extrabold">{UI_CONFIG.APP_NAME}</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP]
          const isExpanded = isMenuExpanded(item.label)
          const isDashboard = item.label === "Dashboard"
          
          // 핵심 수정 부분: 상위 메뉴 자체의 path가 활성화되었거나, 자식 중 하나라도 활성화되었는지 체크
          const isChildActive = item.children?.some(child => isPathActive(child.path))
          const isParentActive = isPathActive(item.path) || isChildActive

          if (item.hasSubmenu && item.children) {
            return (
              <div key={item.label} className="mb-1">
                <button
                  onClick={() => toggleMenu(item.label)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors",
                    // 상위 메뉴 아이템
                    isParentActive ? "text-white bg-blue-800/30" : "text-blue-100 hover:bg-blue-800/50",
                  )}
                >
                  <div className="flex items-center gap-4">
                    {Icon && <Icon className={cn("h-5 w-5", isParentActive)} />}
                    <span className={cn("text-body-2", isParentActive && "font-bold")}>{item.label}</span>
                  </div>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                </button>

                {/* 서브메뉴 아이템 */}
                {isExpanded &&
                  item.children.map((child) => {
                    const ChildIcon = ICON_MAP[child.icon as keyof typeof ICON_MAP]
                    const isSubActive = isPathActive(child.path)
                    
                    return (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={cn(
                          "flex items-center gap-4 px-4 py-3 pl-12 rounded-lg transition-colors mt-1",
                          isSubActive ? "bg-blue-800 text-white" : "text-blue-200 hover:bg-blue-800/30",
                        )}
                      >
                        {ChildIcon && <ChildIcon className="h-4 w-4" />}
                        <span className="text-body-2">{child.label}</span>
                      </Link>
                    )
                  })}
              </div>
            )
          }

          // 일반 메뉴 아이템
          const isActive = isPathActive(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-colors",
                isDashboard
                  ? isActive
                    ? "bg-white text-blue-700 font-bold"       
                    : "text-blue-100 hover:bg-blue-800/50"
                  : isActive
                    ? "bg-blue-800 text-white"         
                    : "text-blue-100 hover:bg-blue-800/50"
              )}
            >
              {Icon && <Icon className="h-5 w-5" />}
              <span className="text-body-2">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}