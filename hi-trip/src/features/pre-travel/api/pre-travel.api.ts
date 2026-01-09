import { apiClient } from "@/shared/api/client"
import { PreTravelCustomersSchema, PreTravelCustomerSchema, ScheduleDataSchema } from "@/shared/types/api"
import type { PreTravelCustomer, ScheduleData } from "@/shared/types/api"

export const preTravelApi = {
  getCustomers: async (): Promise<PreTravelCustomer[]> => {
    const response = await apiClient.get("pre-travel/customers").json()
    return PreTravelCustomersSchema.parse(response)
  },

  getCustomer: async (id: string): Promise<PreTravelCustomer> => {
    const response = await apiClient.get(`pre-travel/customers/${id}`).json()
    return PreTravelCustomerSchema.parse(response)
  },

  getSchedule: async (tripId: string): Promise<ScheduleData> => {
    const response = await apiClient.get(`pre-travel/schedule/${tripId}`).json()
    return ScheduleDataSchema.parse(response)
  },
}
