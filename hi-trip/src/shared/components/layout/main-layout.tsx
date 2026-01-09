import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Sidebar } from "./side-navigation-bar"
import { SidePan } from "./side-pane"

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <main className="p-6 flex-1 overflow-y-auto">
            <Outlet />
          </main>
          <SidePan />
        </div>
      </div>
    </div>
  )
}
