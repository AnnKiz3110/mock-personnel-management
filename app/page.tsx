import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-[1400px]">
          <DashboardContent />
        </div>
      </main>
    </div>
  )
}
