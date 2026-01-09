import { useQuery } from "@tanstack/react-query"
import { preTravelApi } from "../api/pre-travel.api"

export function usePreTravelCustomers() {
  return useQuery({
    queryKey: ["pre-travel", "customers"],
    queryFn: () => preTravelApi.getCustomers(),
  })
}
