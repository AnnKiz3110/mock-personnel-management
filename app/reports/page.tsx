import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ReportsContent } from "@/components/reports/reports-content"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-[1400px]">
          <ReportsContent />
        </div>
      </main>
    </div>
  )
}
