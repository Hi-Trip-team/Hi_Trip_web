import { apiClient } from "@/shared/api/client"
import { API_ENDPOINTS } from "@/shared/api/endpoints"
import type { DuringTravelTrip, LocationRecommendations, LocationDetail, ChatData } from "@/shared/types/api"

export const duringTravelApi = {
  getTrips: async (): Promise<DuringTravelTrip[]> => {
    const response = await apiClient.get(API_ENDPOINTS.DURING_TRAVEL.TRIPS).json()
    return response as DuringTravelTrip[]
  },

  getLocationRecommendations: async (tripId: string): Promise<LocationRecommendations> => {
    const response = await apiClient.get(`${API_ENDPOINTS.DURING_TRAVEL.RECOMMENDATIONS}/${tripId}`).json()
    return response as LocationRecommendations
  },

  getLocationDetail: async (locationId: string): Promise<LocationDetail> => {
    const response = await apiClient.get(`${API_ENDPOINTS.DURING_TRAVEL.LOCATIONS}/${locationId}`).json()
    return response as LocationDetail
  },

  getChatMessages: async (customerId: string): Promise<ChatData> => {
    const response = await apiClient.get(`${API_ENDPOINTS.DURING_TRAVEL.CHAT}/${customerId}`).json()
    return response as ChatData
  },

  sendMessage: async (customerId: string, message: string): Promise<void> => {
    await apiClient
      .post(`${API_ENDPOINTS.DURING_TRAVEL.CHAT}/${customerId}`, {
        json: { message },
      })
      .json()
  },
}
