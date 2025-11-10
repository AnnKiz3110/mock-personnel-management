import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { TraineesContent } from "@/components/trainees/trainees-content"

export default function TraineesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-[1400px]">
          <TraineesContent />
        </div>
      </main>
    </div>
  )
}
