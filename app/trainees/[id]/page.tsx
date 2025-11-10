"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Footer } from "@/components/layout/footer"
import { TraineeDetailContent } from "@/components/trainees/trainee-detail-content"
import { useSidebar } from "@/lib/sidebar-context"
import { cn } from "@/lib/utils"
import { useParams } from "next/navigation"

export default function TraineeDetailPage() {
  const { isOpen } = useSidebar()
  const params = useParams<{ id: string | string[] }>()
  const id = Array.isArray(params.id) ? params.id[0] : params.id

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className={cn("p-8 transition-all duration-300", isOpen ? "ml-64" : "ml-0")}>
        <div className="mx-auto max-w-[1400px]">
          {id && <TraineeDetailContent traineeId={id} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}
