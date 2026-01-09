import { apiRequest } from "../client"
import { API_ENDPOINTS } from "../endpoints"
import type { Trip, Participant, Schedule } from "@/shared/types/api"

export const tripService = {
  // Trips
  getTrips: async (): Promise<Trip[]> => {
    return apiRequest<Trip[]>(API_ENDPOINTS.TRIPS.LIST)
  },

  getTrip: async (id: number): Promise<Trip> => {
    return apiRequest<Trip>(API_ENDPOINTS.TRIPS.DETAIL(id))
  },

  createTrip: async (data: Partial<Trip>): Promise<Trip> => {
    return apiRequest<Trip>(API_ENDPOINTS.TRIPS.LIST, {
      method: "POST",
      json: data,
    })
  },

  updateTrip: async (id: number, data: Partial<Trip>): Promise<Trip> => {
    return apiRequest<Trip>(API_ENDPOINTS.TRIPS.DETAIL(id), {
      method: "PATCH",
      json: data,
    })
  },

  deleteTrip: async (id: number): Promise<void> => {
    return apiRequest<void>(API_ENDPOINTS.TRIPS.DETAIL(id), {
      method: "DELETE",
    })
  },

  assignManager: async (id: number, managerId: number): Promise<Trip> => {
    return apiRequest<Trip>(API_ENDPOINTS.TRIPS.ASSIGN_MANAGER(id), {
      method: "POST",
      json: { manager_id: managerId },
    })
  },

  // Participants
  getParticipants: async (tripId: number): Promise<Participant[]> => {
    return apiRequest<Participant[]>(API_ENDPOINTS.TRIPS.PARTICIPANTS(tripId))
  },

  createParticipant: async (tripId: number, data: Partial<Participant>): Promise<Participant> => {
    return apiRequest<Participant>(API_ENDPOINTS.TRIPS.PARTICIPANTS(tripId), {
      method: "POST",
      json: data,
    })
  },

  updateParticipant: async (
    tripId: number,
    participantId: number,
    data: Partial<Participant>,
  ): Promise<Participant> => {
    return apiRequest<Participant>(`${API_ENDPOINTS.TRIPS.PARTICIPANTS(tripId)}${participantId}/`, {
      method: "PATCH",
      json: data,
    })
  },

  deleteParticipant: async (tripId: number, participantId: number): Promise<void> => {
    return apiRequest<void>(`${API_ENDPOINTS.TRIPS.PARTICIPANTS(tripId)}${participantId}/`, {
      method: "DELETE",
    })
  },

  // Schedules
  getSchedules: async (tripId: number): Promise<Schedule[]> => {
    return apiRequest<Schedule[]>(API_ENDPOINTS.TRIPS.SCHEDULES(tripId))
  },

  createSchedule: async (tripId: number, data: Partial<Schedule>): Promise<Schedule> => {
    return apiRequest<Schedule>(API_ENDPOINTS.TRIPS.SCHEDULES(tripId), {
      method: "POST",
      json: data,
    })
  },

  updateSchedule: async (tripId: number, scheduleId: number, data: Partial<Schedule>): Promise<Schedule> => {
    return apiRequest<Schedule>(API_ENDPOINTS.TRIPS.SCHEDULE_DETAIL(tripId, scheduleId), {
      method: "PATCH",
      json: data,
    })
  },

  deleteSchedule: async (tripId: number, scheduleId: number): Promise<void> => {
    return apiRequest<void>(API_ENDPOINTS.TRIPS.SCHEDULE_DETAIL(tripId, scheduleId), {
      method: "DELETE",
    })
  },
}
