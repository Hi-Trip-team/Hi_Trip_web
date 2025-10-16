import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen max-h-screen bg-background">
      <LeftSidebar />

      <div className="flex-1 flex min-w-0 flex-col">
        <Header />

        <div className="flex-1 flex min-h-0">
          <main className="flex-1 min-w-160 p-6 overflow-y-auto">
            <Outlet />
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  )
}