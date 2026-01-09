import { useQuery } from "@tanstack/react-query"
import { duringTravelApi } from "../api/during-travel.api"

export function useLocationDetail(locationId: string) {
  return useQuery({
    queryKey: ["location-detail", locationId],
    queryFn: () => duringTravelApi.getLocationDetail(locationId),
    enabled: !!locationId,
  })
}
