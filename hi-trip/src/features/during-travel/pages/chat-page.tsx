"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { ChevronLeft, MoreVertical, Mic, Paperclip, Send } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
import { useChatMessages } from "../hooks/use-chat-messages"

export function ChatPage() {
  const { customerId } = useParams()
  const [message, setMessage] = useState("")
  const { data: chat, isLoading } = useChatMessages(customerId!)

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Send message via API
      console.log("[v0] Sending message:", message)
      setMessage("")
    }
  }

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{chat?.customerName}</h1>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 px-6 py-4 space-y-4">
        {chat?.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-3 max-w-2xl ${msg.isOwn ? "flex-row-reverse" : ""}`}>
              {!msg.isOwn && (
                <Avatar className="w-10 h-10">
                  <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gray-300">{msg.sender.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div className="space-y-1">
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.isOwn ? "bg-blue-500 text-white" : "bg-white text-gray-900 shadow-sm"
                  }`}
                >
                  {msg.isOwn && <div className="text-xs opacity-90 mb-1">안녕하세요, {msg.sender}.</div>}
                  <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                </div>
                <div className={`flex items-center gap-2 text-xs text-gray-500 ${msg.isOwn ? "justify-end" : ""}`}>
                  <span>{msg.timestamp}</span>
                  <button className="hover:text-gray-700">
                    <MoreVertical className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="메시지를 쓰시오."
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Send className="w-5 h-5 text-gray-600" />
          </button>
          <Button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white px-6">
            전송
          </Button>
        </div>
      </div>
    </div>
  )
}
