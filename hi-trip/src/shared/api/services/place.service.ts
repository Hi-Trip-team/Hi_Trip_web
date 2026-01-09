import { apiRequest } from "../client"
import { API_ENDPOINTS } from "../endpoints"
import type { Place, PlaceCategory, PlaceCoordinator, OptionalExpense, ExpenseCalculation } from "@/shared/types/api"

export const placeService = {
  // Places
  getPlaces: async (): Promise<Place[]> => {
    return apiRequest<Place[]>(API_ENDPOINTS.PLACES.LIST)
  },

  getPlace: async (id: number): Promise<Place> => {
    return apiRequest<Place>(API_ENDPOINTS.PLACES.DETAIL(id))
  },

  createPlace: async (data: Partial<Place>): Promise<Place> => {
    return apiRequest<Place>(API_ENDPOINTS.PLACES.LIST, {
      method: "POST",
      json: data,
    })
  },

  updatePlace: async (id: number, data: Partial<Place>): Promise<Place> => {
    return apiRequest<Place>(API_ENDPOINTS.PLACES.DETAIL(id), {
      method: "PATCH",
      json: data,
    })
  },

  deletePlace: async (id: number): Promise<void> => {
    return apiRequest<void>(API_ENDPOINTS.PLACES.DETAIL(id), {
      method: "DELETE",
    })
  },

  // Categories
  getCategories: async (): Promise<PlaceCategory[]> => {
    return apiRequest<PlaceCategory[]>(API_ENDPOINTS.CATEGORIES.LIST)
  },

  getCategory: async (id: number): Promise<PlaceCategory> => {
    return apiRequest<PlaceCategory>(API_ENDPOINTS.CATEGORIES.DETAIL(id))
  },

  // Coordinators
  getCoordinators: async (placeId: number): Promise<PlaceCoordinator[]> => {
    return apiRequest<PlaceCoordinator[]>(API_ENDPOINTS.PLACES.COORDINATORS(placeId))
  },

  createCoordinator: async (placeId: number, data: Partial<PlaceCoordinator>): Promise<PlaceCoordinator> => {
    return apiRequest<PlaceCoordinator>(API_ENDPOINTS.PLACES.COORDINATORS(placeId), {
      method: "POST",
      json: data,
    })
  },

  updateCoordinator: async (
    placeId: number,
    coordinatorId: number,
    data: Partial<PlaceCoordinator>,
  ): Promise<PlaceCoordinator> => {
    return apiRequest<PlaceCoordinator>(API_ENDPOINTS.PLACES.COORDINATOR_DETAIL(placeId, coordinatorId), {
      method: "PATCH",
      json: data,
    })
  },

  deleteCoordinator: async (placeId: number, coordinatorId: number): Promise<void> => {
    return apiRequest<void>(API_ENDPOINTS.PLACES.COORDINATOR_DETAIL(placeId, coordinatorId), {
      method: "DELETE",
    })
  },

  // Expenses
  getExpenses: async (placeId: number): Promise<OptionalExpense[]> => {
    return apiRequest<OptionalExpense[]>(API_ENDPOINTS.PLACES.EXPENSES(placeId))
  },

  createExpense: async (placeId: number, data: Partial<OptionalExpense>): Promise<OptionalExpense> => {
    return apiRequest<OptionalExpense>(API_ENDPOINTS.PLACES.EXPENSES(placeId), {
      method: "POST",
      json: data,
    })
  },

  updateExpense: async (
    placeId: number,
    expenseId: number,
    data: Partial<OptionalExpense>,
  ): Promise<OptionalExpense> => {
    return apiRequest<OptionalExpense>(API_ENDPOINTS.PLACES.EXPENSE_DETAIL(placeId, expenseId), {
      method: "PATCH",
      json: data,
    })
  },

  deleteExpense: async (placeId: number, expenseId: number): Promise<void> => {
    return apiRequest<void>(API_ENDPOINTS.PLACES.EXPENSE_DETAIL(placeId, expenseId), {
      method: "DELETE",
    })
  },

  calculateExpenses: async (placeId: number, expenseIds: number[]): Promise<ExpenseCalculation> => {
    return apiRequest<ExpenseCalculation>(API_ENDPOINTS.PLACES.CALCULATE_EXPENSES(placeId), {
      method: "POST",
      json: { expense_ids: expenseIds },
    })
  },
}
