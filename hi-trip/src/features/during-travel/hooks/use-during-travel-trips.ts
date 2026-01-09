import { useQuery } from "@tanstack/react-query"
import { duringTravelApi } from "../api/during-travel.api"

export function useDuringTravelTrips() {
  return useQuery({
    queryKey: ["during-travel-trips"],
    queryFn: duringTravelApi.getTrips,
  })
}
