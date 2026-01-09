"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Plane, Lock } from "lucide-react"
import { Button, Input } from "@/shared/components/ui"
import { UI_CONFIG, SOCIAL_AUTH, ROUTES } from "@/shared/constants"

export function LoginPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      navigate(ROUTES.DASHBOARD)
    }, 1000)
  }

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <div className="flex h-screen">
      {/* Left Panel - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIzMCUiIGN5PSI0MCUiIHI9IjIwJSIgZmlsbD0idXJsKCNhKSIvPjxjaXJjbGUgY3g9IjcwJSIgY3k9IjYwJSIgcj0iMjUlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 text-center px-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Plane className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2 lg:hidden">
              <Plane className="h-8 w-8 text-blue-600" />
              <h1 className="text-title-2 text-gray-900">{UI_CONFIG.APP_NAME}</h1>
            </div>
            <h2 className="text-title-1 text-gray-900">로그인</h2>
            <p className="mt-2 text-body-1 text-grey-5">회원가입을 해주세요.</p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                id="username"
                name="username"
                type="text"
                required
                placeholder="아이디"
                value={formData.username}
                onChange={handleInputChange("username")}
                className="h-12"
              />

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  className="h-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="비밀번호"
                >
                  <Lock className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                로그인
              </Button>

              {/* Social Login Buttons */}
              {Object.entries(SOCIAL_AUTH).map(([key, { name, color }]) => (
                <Button
                  key={key}
                  type="button"
                  className={`w-full h-12 bg-${color} hover:bg-${color}/90 text-white font-button-1`}
                >
                  {name}로 로그인
                </Button>
              ))}
            </div>

            {/* Footer Links */}
            <div className="text-center text-caption-1 text-grey-5 space-x-4">
              <button type="button" className="hover:text-grey-7">
                아이디 찾기
              </button>
              <span>|</span>
              <button type="button" className="hover:text-grey-7">
                비밀번호 찾기
              </button>
              <span>|</span>
              <button type="button" className="hover:text-grey-7">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
