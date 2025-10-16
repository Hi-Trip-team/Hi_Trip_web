import { Bell } from "lucide-react";
import { Button } from "../ui/button";

export default function RightSidebar() {
  return (
    <aside className="w-80 border-l border-border bg-card">
      <div className="flex h-16 justify-end items-center border-b border-border px-6">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
            <div className="text-right">
                <p className="text-sm font-medium">관리자</p>
                <p className="text-xs text-muted-foreground">admin@travel.com</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary" />
            </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">오른쪽 사이드바 영역입니다.</p>
          <p className="text-xs text-muted-foreground mt-2">추가 정보나 위젯이 여기에 표시됩니다.</p>
        </div>
      </div>
    </aside>
  )
}
