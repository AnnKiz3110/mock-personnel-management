import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { TraineeDetailContent } from "@/components/trainees/trainee-detail-content"
// import { getTraineeById } from "@/lib/mock-data"
// import { notFound } from 'next/navigation'

export default function TraineeDetailPage({ params }: { params: { id: string } }) {
  // const trainee = getTraineeById(params.id)

  // if (!trainee) {
  //   notFound()
  // }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-[1400px]">
          <TraineeDetailContent traineeId={params.id} />
        </div>
      </main>
    </div>
  )
}
