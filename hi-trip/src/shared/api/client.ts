import ky, { type KyInstance, type Options } from "ky"

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"

export const apiClient: KyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 30000,
  credentials: "include", // Added for cookie-based auth
  retry: {
    limit: 2,
    methods: ["get"],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // CSRF token handling for Django
        const csrfToken = getCookie("csrftoken")
        if (csrfToken && ["post", "put", "patch", "delete"].includes(request.method.toLowerCase())) {
          request.headers.set("X-CSRFToken", csrfToken)
        }
      },
    ],
    afterResponse: [
      async (request, _options, response) => {
        if (!response.ok) {
          const error = await response.json().catch(() => ({}))
          console.error("[v0] API Error", {
            url: request.url,
            status: response.status,
            error,
          })
        }
        return response
      },
    ],
  },
})

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null
  return null
}

export async function apiRequest<T>(endpoint: string, options?: Options): Promise<T> {
  try {
    const response = await apiClient(endpoint, options)
    return await response.json<T>()
  } catch (error) {
    console.error("[v0] API Request failed:", error)
    throw error
  }
}
