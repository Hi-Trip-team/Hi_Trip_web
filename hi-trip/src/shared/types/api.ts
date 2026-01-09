import { z } from "zod"

// Response wrapper
export const ApiResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema,
    message: z.string().optional(),
  })

// Dashboard Stats
export const DashboardStatsSchema = z.object({
  reservations: z.object({
    total: z.number(),
    percentageChange: z.number(),
  }),
  cancellationRate: z.object({
    rate: z.number(),
    percentageChange: z.number(),
  }),
  popularProducts: z.object({
    count: z.number(),
    percentageChange: z.number(),
  }),
  salesIncrease: z.object({
    rate: z.number(),
    percentageChange: z.number(),
  }),
})

export type DashboardStats = z.infer<typeof DashboardStatsSchema>

// Revenue Data
export const RevenueDataPointSchema = z.object({
  month: z.string(),
  value: z.number(),
  comparison: z.number(),
})

export const RevenueDataSchema = z.object({
  total: z.number(),
  change: z.string(),
  data: z.array(RevenueDataPointSchema),
})

export type RevenueData = z.infer<typeof RevenueDataSchema>

// Rankings
export const RankingItemSchema = z.object({
  rank: z.number(),
  name: z.string(),
  description: z.string(),
  percentage: z.number(),
})

export const RankingsSchema = z.array(RankingItemSchema)

export type RankingItem = z.infer<typeof RankingItemSchema>

// Customer
export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  amount: z.number(),
})

export const CustomersSchema = z.array(CustomerSchema)

export type Customer = z.infer<typeof CustomerSchema>

// Customer Stats
export const CustomerStatsSchema = z.object({
  newCustomers: z.number(),
  repeated: z.number(),
})

export type CustomerStats = z.infer<typeof CustomerStatsSchema>

// Sales Analytics
export const SalesDataPointSchema = z.object({
  year: z.string(),
  value1: z.number(),
  value2: z.number(),
})

export const SalesAnalyticsSchema = z.array(SalesDataPointSchema)

export type SalesAnalytics = z.infer<typeof SalesAnalyticsSchema>

// Featured Trip
export const FeaturedTripSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.string(),
  image: z.string(),
})

export const FeaturedTripsSchema = z.array(FeaturedTripSchema)

export type FeaturedTrip = z.infer<typeof FeaturedTripSchema>

// Pre-travel customer types
export const PreTravelCustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  birthDate: z.string(),
  gender: z.string(),
  phone: z.string(),
  email: z.string().email(),
  hasPassport: z.boolean(),
  hasIdVerification: z.boolean(),
  hasReservation: z.boolean(),
  englishName: z.string().optional(),
  nationality: z.string().optional(),
  address: z.string().optional(),
})

export const PreTravelCustomersSchema = z.array(PreTravelCustomerSchema)

export type PreTravelCustomer = z.infer<typeof PreTravelCustomerSchema>

// Schedule types
export const ScheduleItemSchema = z.object({
  id: z.string(),
  order: z.number(),
  timeRange: z.string(),
  location: z.string(),
  transportation: z.string(),
  description: z.string(),
  manager: z.string(),
  budget: z.string(),
})

export const ScheduleDaySchema = z.object({
  day: z.number(),
  items: z.array(ScheduleItemSchema),
})

export const ScheduleDataSchema = z.object({
  title: z.string(),
  days: z.array(ScheduleDaySchema),
})

export type ScheduleItem = z.infer<typeof ScheduleItemSchema>
export type ScheduleDay = z.infer<typeof ScheduleDaySchema>
export type ScheduleData = z.infer<typeof ScheduleDataSchema>

// During-travel types
export const DuringTravelTripSchema = z.object({
  id: z.string(),
  order: z.string(),
  progress: z.string(),
  name: z.string(),
  manager: z.string(),
  startDate: z.string(),
})

export const DuringTravelTripsSchema = z.array(DuringTravelTripSchema)

export type DuringTravelTrip = z.infer<typeof DuringTravelTripSchema>

export const LocationRecommendationSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  rating: z.number(),
  reviews: z.number(),
  discount: z.number(),
})

export const LocationRecommendationsSchema = z.object({
  recommendations: z.array(LocationRecommendationSchema),
  schedule: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
      time: z.string(),
      location: z.string(),
      transportation: z.string(),
      description: z.string(),
      meetingPoint: z.string(),
      budget: z.string(),
    }),
  ),
})

export type LocationRecommendation = z.infer<typeof LocationRecommendationSchema>
export type LocationRecommendations = z.infer<typeof LocationRecommendationsSchema>

export const LocationDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  accommodation: z.string(),
  address: z.string(),
  businessInfo: z.string(),
  operatingHours: z.string(),
  aiRecommendation: z.string(),
  aiGeneratedInfo: z.string(),
  activityDetails: z.string(),
  meetingPointAddress: z.string(),
  imageUrl: z.string().optional(),
})

export type LocationDetail = z.infer<typeof LocationDetailSchema>

export const ChatMessageSchema = z.object({
  id: z.string(),
  sender: z.string(),
  content: z.string(),
  timestamp: z.string(),
  isOwn: z.boolean(),
  avatar: z.string().optional(),
})

export const ChatDataSchema = z.object({
  customerName: z.string(),
  messages: z.array(ChatMessageSchema),
})

export type ChatMessage = z.infer<typeof ChatMessageSchema>
export type ChatData = z.infer<typeof ChatDataSchema>

// ============================================
// Common Enums
// ============================================
export const GenderEnum = z.enum(["M", "F"])
export const RoleEnum = z.enum(["MANAGER", "COORDINATOR", "GUIDE"])

// ============================================
// Auth & User Types
// ============================================
export const UserDetailSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  role: RoleEnum.optional(),
  is_approved: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
})

export const LoginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const LoginResponseSchema = UserDetailSchema

export const RegisterRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
})

export type UserDetail = z.infer<typeof UserDetailSchema>
export type LoginRequest = z.infer<typeof LoginRequestSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
export type RegisterRequest = z.infer<typeof RegisterRequestSchema>

// ============================================
// Place & Category Types
// ============================================
export const PlaceCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  created_at: z.string(),
})

export const PlaceSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string().nullable(),
  category: PlaceCategorySchema.nullable(),
  category_id: z.number().nullable().optional(),
  entrance_fee: z.number().nullable(),
  activity_time: z.string().nullable(),
  ai_alternative_place: z.any().nullable(),
  ai_generated_info: z.string().nullable(),
  ai_meeting_point: z.string().nullable(),
  image: z.string().nullable(),
  entrance_fee_display: z.string(),
  activity_time_display: z.string(),
  has_image: z.boolean(),
  alternative_place_info: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type PlaceCategory = z.infer<typeof PlaceCategorySchema>
export type Place = z.infer<typeof PlaceSchema>

// ============================================
// Coordinator Types
// ============================================
export const CoordinatorRoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  created_at: z.string(),
})

export const PlaceCoordinatorSchema = z.object({
  id: z.number(),
  place: z.number(),
  role: CoordinatorRoleSchema,
  role_id: z.number().optional(),
  name: z.string(),
  phone: z.string(),
  note: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type CoordinatorRole = z.infer<typeof CoordinatorRoleSchema>
export type PlaceCoordinator = z.infer<typeof PlaceCoordinatorSchema>

// ============================================
// Expense Types
// ============================================
export const OptionalExpenseSchema = z.object({
  id: z.number(),
  place: z.number(),
  place_id: z.number().optional(),
  item_name: z.string(),
  price: z.number(),
  description: z.string().nullable(),
  display_order: z.number(),
  price_display: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export const ExpenseCalculationSchema = z.object({
  total: z.number(),
  total_display: z.string(),
  items: z.array(OptionalExpenseSchema),
})

export type OptionalExpense = z.infer<typeof OptionalExpenseSchema>
export type ExpenseCalculation = z.infer<typeof ExpenseCalculationSchema>

// ============================================
// Trip & Participant Types
// ============================================
export const ParticipantSchema = z.object({
  id: z.number(),
  trip: z.number(),
  name: z.string(),
  gender: GenderEnum,
  birthdate: z.string(),
  phone: z.string().nullable(),
  email: z.string().email().nullable(),
  english_name: z.string().nullable(),
  nationality: z.string().nullable(),
  address: z.string().nullable(),
  has_passport: z.boolean(),
  has_id_verification: z.boolean(),
  has_reservation: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
})

export const TripSchema = z.object({
  id: z.number(),
  title: z.string(),
  manager: UserDetailSchema.nullable(),
  manager_id: z.number().nullable().optional(),
  start_date: z.string(),
  end_date: z.string(),
  status: z.string(),
  participants_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type Participant = z.infer<typeof ParticipantSchema>
export type Trip = z.infer<typeof TripSchema>

// ============================================
// Schedule Types
// ============================================
export const ScheduleSchema = z.object({
  id: z.number(),
  trip: z.number(),
  place: z.number().nullable(),
  place_id: z.number().nullable().optional(),
  day_number: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  duration_minutes: z.number().nullable(),
  transport: z.string().nullable(),
  main_content: z.string().nullable(),
  meeting_point: z.string().nullable(),
  budget: z.number().nullable(),
  order: z.number(),
  place_name: z.string(),
  duration_display: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type Schedule = z.infer<typeof ScheduleSchema>

// ============================================
// Legacy Types (for backward compatibility with mock data)
// ============================================
