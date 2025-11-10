"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Footer } from "@/components/layout/footer"
import { CriteriaContent } from "@/components/criteria/criteria-content"
import { useSidebar } from "@/lib/sidebar-context"
import { cn } from "@/lib/utils"

export default function CriteriaPage() {
  const { isOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className={cn("p-8 transition-all duration-300", isOpen ? "ml-64" : "ml-0")}>
        <div className="mx-auto max-w-[1400px]">
          <CriteriaContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
