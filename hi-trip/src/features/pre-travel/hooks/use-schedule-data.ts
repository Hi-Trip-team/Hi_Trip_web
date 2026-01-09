import { useQuery } from "@tanstack/react-query"
import { preTravelApi } from "../api/pre-travel.api"

export function useScheduleData(tripId = "seoul-trip-1") {
  return useQuery({
    queryKey: ["pre-travel", "schedule", tripId],
    queryFn: () => preTravelApi.getSchedule(tripId),
  })
}
