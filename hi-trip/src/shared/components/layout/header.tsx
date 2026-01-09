import { Search, Bell, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"
import { Input } from "@/shared/components/ui/input"

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="검색어를 입력해 주세요" className="pl-10" />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>이</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">이연태 님</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
