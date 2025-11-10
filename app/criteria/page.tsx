import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { CriteriaContent } from "@/components/criteria/criteria-content"

export default function CriteriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-[1400px]">
          <CriteriaContent />
        </div>
      </main>
    </div>
  )
}
