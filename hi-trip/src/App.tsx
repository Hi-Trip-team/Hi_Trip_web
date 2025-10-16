import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import TravelersPage from './pages/TravelersPage'
import AnalyticsPage from './pages/AnalyticsPage'
import PreTravelCustomersPage from './pages/pre-travel/CustomersPage'
import PreTravelSchedulePage from './pages/pre-travel/SchedulePage'
import DuringTravelCustomersPage from './pages/during-travel/CustomersPage'
import DashboardPage from './pages/DashboardPage'
import DuringTravelRecommendationsPage from './pages/during-travel/RecommendationsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="travelers" element={<TravelersPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="pre-travel/customers" element={<PreTravelCustomersPage />} />
        <Route path="pre-travel/schedule" element={<PreTravelSchedulePage />} />
        <Route path="during-travel/customers" element={<DuringTravelCustomersPage />} />
        <Route path="during-travel/recommendations" element={<DuringTravelRecommendationsPage />} />
      </Route>
    </Routes>
  )
}

export default App
