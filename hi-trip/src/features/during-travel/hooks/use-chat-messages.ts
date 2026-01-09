import { useQuery } from "@tanstack/react-query"
import { duringTravelApi } from "../api/during-travel.api"

export function useChatMessages(customerId: string) {
  return useQuery({
    queryKey: ["chat-messages", customerId],
    queryFn: () => duringTravelApi.getChatMessages(customerId),
    enabled: !!customerId,
  })
}
