import { useQuery } from "@tanstack/react-query"
import { preTravelApi } from "../api/pre-travel.api"

export function usePreTravelCustomer(id: string) {
  return useQuery({
    queryKey: ["pre-travel", "customers", id],
    queryFn: () => preTravelApi.getCustomer(id),
    enabled: !!id,
  })
}
