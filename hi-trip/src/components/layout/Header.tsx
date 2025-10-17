import { Bell, Search, PanelRightOpen, PanelRightClose } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

interface HeaderProps {
  isRightSidebarOpen: boolean;
  onToggleRightSidebar: () => void;
}

export default function Header({ isRightSidebarOpen, onToggleRightSidebar }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="여행자 검색..." className="pl-10" />
        </div>
      </div>
        <div className="flex h-16 justify-end items-center border-b border-border px-6 gap-3">
          
          {/* (1) 아이콘 버튼 그룹 */}
          <div className="flex items-center">
            {/* 사이드바 열기/닫기 버튼 */}
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onToggleRightSidebar}
                title={isRightSidebarOpen ? "사이드바 닫기" : "사이드바 열기"}
              >
                {isRightSidebarOpen ? (
                  <PanelRightClose className="h-5 w-5" />
                ) : (
                  <PanelRightOpen className="h-5 w-5" />
                )}
              </Button>
            </div>
            {/* 알림 버튼 */}
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

            {/* (2) 사용자 정보 그룹 */}
          <div className="flex items-center gap-3">
            <div className="text-right">
                <p className="text-sm font-medium">관리자</p>
                <p className="text-xs text-muted-foreground">admin@travel.com</p>
            </div> 
            <div className="h-10 w-10 rounded-full bg-primary" />
          </div>
        </div>
    </header>
  )
}
