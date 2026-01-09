import { useQuery } from "@tanstack/react-query"
import { duringTravelApi } from "../api/during-travel.api"

export function useLocationRecommendations(tripId: string) {
  return useQuery({
    queryKey: ["location-recommendations", tripId],
    queryFn: () => duringTravelApi.getLocationRecommendations(tripId),
    enabled: !!tripId,
  })
}
