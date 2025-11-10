import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { DataProvider } from "@/lib/data-context"
import { SidebarProvider } from "@/lib/sidebar-context"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Hệ thống đánh giá thực tập sinh",
  description: "Quản lý và đánh giá thực tập sinh",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <SidebarProvider>
          <DataProvider>
            {children}
            <Toaster />
          </DataProvider>
        </SidebarProvider>
      </body>
    </html>
  )
}
