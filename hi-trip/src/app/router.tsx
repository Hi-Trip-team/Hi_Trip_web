import { Routes, Route, Navigate } from "react-router-dom"
import { DashboardPage } from "@/features/dashboard"
import { LoginPage } from "@/features/auth/pages/login-page"
import { PreTravelCustomersPage, CustomerDetailPage, ScheduleManagementPage } from "@/features/pre-travel/pages"
import {
  OngoingTripsPage,
  LocationRecommendationPage,
  LocationDetailPage,
  ChatPage,
} from "@/features/during-travel/pages"
import { ROUTES } from "@/shared/constants"
import { MainLayout } from "../shared/components/layout"

export function AppRouter() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      {/* Protected Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path="dashboard" element={<DashboardPage />} />

        {/* Pre-Travel Management */}
        <Route path="pre-travel">
          <Route path="customers" element={<PreTravelCustomersPage />} />
          <Route path="customers/:id" element={<CustomerDetailPage />} />
          <Route path="schedule" element={<ScheduleManagementPage />} />
        </Route>

        {/* During-Travel Management */}
        <Route path="during-travel">
          <Route path="trips" element={<OngoingTripsPage />} />
          <Route path="trips/:tripId" element={<LocationRecommendationPage />} />
          <Route path="locations/:locationId" element={<LocationDetailPage />} />
          <Route path="chat/:customerId" element={<ChatPage />} />
          <Route path="recommendation" element={<LocationRecommendationPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
