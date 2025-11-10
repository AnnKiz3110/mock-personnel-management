"use client"

import { Bell, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden bg-gradient-to-r from-[#2c86ff] via-[#3b94ff] to-[#2c86ff] shadow-lg">
      {/* Decorative curved shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top curve */}
        <div className="absolute -right-20 -top-10 h-40 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-20 -top-5 h-32 w-80 rounded-full bg-white/5 blur-xl" />

        {/* Bottom wave shape */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48H1440V24C1440 24 1200 0 960 12C720 24 480 48 240 36C120 30 0 12 0 12V48Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#1a5fb8]/20 to-transparent" />
      </div>

      <div className="relative flex h-16 items-center gap-4 px-6">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md">
            <img src={"https://cehsoft.com/wp-content/uploads/2025/08/logo-ceh-new1.svg"} />
          </div>
          <h1 className="text-xl font-bold text-white drop-shadow-sm">Thống Kê & Đánh Giá Nhân Viên Học Việc</h1>
        </div>

        {/* Search bar */}
        <div className="ml-auto flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Tìm kiếm..."
              className="border-white/20 bg-white/90 pl-10 backdrop-blur-sm placeholder:text-gray-500"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-white/20">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute right-1 top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
            </span>
          </Button>

          {/* User avatar */}
          <Avatar className="h-9 w-9 border-2 border-white shadow-md">
            <AvatarImage src="/abstract-geometric-shapes.png" />
            <AvatarFallback className="bg-white text-[#2c86ff] font-semibold">HQ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
