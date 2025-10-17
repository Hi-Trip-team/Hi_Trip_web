import { Bell } from "lucide-react";
import { Button } from "../ui/button";

interface RightSidebarProps {
  isOpen: boolean;
}

export default function RightSidebar({ isOpen }: RightSidebarProps) {
  return (
    <aside 
      className={`
        shrink-0 border-l border-border bg-card transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'w-80' : 'w-0 border-none'}
      `}
    >
      <div className={`p-4 space-y-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">오른쪽 사이드바 영역입니다.</p>
          <p className="text-xs text-muted-foreground mt-2">추가 정보나 위젯이 여기에 표시됩니다.</p>
        </div>
      </div>
    </aside>
  )
}
