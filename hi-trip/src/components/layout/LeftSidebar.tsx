import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAVIGATION, type NavigationItem } from "@/constants/navigation"
import logo from "@/assets/logos/main-logo.svg";

function NavItem({ item, depth = 0 }: { item: NavigationItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(true)
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
            "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
            depth > 0 && "pl-6",
          )}
        >
          {item.icon && <item.icon className="h-5 w-5" />}
          <span className="flex-1 text-left">{item.name}</span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
        {isOpen && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => (
              <NavItem key={child.name} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  if (!item.href) return null

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
          depth > 0 && "pl-9",
        )
      }
    >
      {item.icon && <item.icon className="h-4 w-4" />}
      {item.name}
    </NavLink>
  )
}

export default function LeftSidebar() {
  return (
    <aside className="min-w-50 shrink-0 border-r border-border bg-card overflow-auto">
      <div className="flex h-16 items-center border-b border-border px-6">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">Hi-Trip</h1>
      </div>
      <nav className="space-y-1 p-4">
        {NAVIGATION.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>
    </aside>
  )
}
