import { Bell } from "lucide-react";
import { Button } from "../ui/button";

export default function RightSidebar() {
  return (
    <aside className="w-80 shrink-0 border-l border-border bg-card">
      <div className="p-4 pace-y-4">
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">오른쪽 사이드바 영역입니다.</p>
          <p className="text-xs text-muted-foreground mt-2">추가 정보나 위젯이 여기에 표시됩니다.</p>
        </div>
      </div>
    </aside>
  )
}
