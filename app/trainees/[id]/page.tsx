"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Footer } from "@/components/layout/footer"
import { TraineeDetailContent } from "@/components/trainees/trainee-detail-content"
import { useSidebar } from "@/lib/sidebar-context"
import { cn } from "@/lib/utils"

export default function TraineeDetailPage({ params }: { params: { id: string } }) {
  const { isOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className={cn("p-8 transition-all duration-300", isOpen ? "ml-64" : "ml-0")}>
        <div className="mx-auto max-w-[1400px]">
          <TraineeDetailContent traineeId={params.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
