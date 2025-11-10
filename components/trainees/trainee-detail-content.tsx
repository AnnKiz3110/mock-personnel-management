"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { TraineeStatus } from "@/lib/types"
import { EvaluationForm } from "./evaluation-form"
import { TraineeOverview } from "./trainee-overview"
import { TraineeHistory } from "./trainee-history"
import { useData } from "@/lib/data-context"
import { notFound } from "next/navigation"

interface TraineeDetailContentProps {
  traineeId: string
}

const statusColors: Record<TraineeStatus, string> = {
  "Đang học việc": "bg-blue-50 text-[#2c86ff] border-[#2c86ff]/20",
  "Hoàn thành": "bg-green-50 text-green-700 border-green-200",
  "Đề nghị thử việc": "bg-orange-50 text-orange-700 border-orange-200",
  "Không đạt": "bg-red-50 text-red-700 border-red-200",
}

export function TraineeDetailContent({ traineeId }: TraineeDetailContentProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const { getTraineeById } = useData()
  const trainee = getTraineeById(traineeId)

  if (!trainee) {
    notFound()
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Dashboard
        </Link>
        <span>/</span>
        <Link href="/trainees" className="hover:text-foreground">
          Danh sách học việc
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{trainee.fullName}</span>
      </div>

      {/* Back button */}
      <Button variant="ghost" asChild>
        <Link href="/trainees">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại danh sách
        </Link>
      </Button>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <Card className="rounded-2xl border p-6 shadow-sm sticky top-24">
            <div className="space-y-6">
              {/* Avatar and Name */}
              <div className="text-center">
                <Avatar className="mx-auto h-24 w-24 border-4 border-[#2c86ff]">
                  <AvatarImage src={trainee.avatarUrl || "/placeholder.svg"} />
                  <AvatarFallback className="bg-[#2c86ff] text-white text-2xl">
                    {trainee.fullName.split(" ").slice(-1)[0][0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-bold text-balance">{trainee.fullName}</h3>
                <p className="text-sm text-muted-foreground font-mono">{trainee.code}</p>
              </div>

              <Separator />

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Phòng ban</p>
                  <p className="font-medium">{trainee.department}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mentor</p>
                  <p className="font-medium">{trainee.mentor}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Thời hạn học việc</p>
                  <p className="font-medium">
                    {new Date(trainee.startDate).toLocaleDateString("vi-VN")}
                    {trainee.endDate && ` - ${new Date(trainee.endDate).toLocaleDateString("vi-VN")}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Trạng thái</p>
                  <Badge variant="outline" className={statusColors[trainee.status]}>
                    {trainee.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Điểm trung bình</p>
                  <p className="text-3xl font-bold text-[#2c86ff]">{trainee.avgScore}</p>
                </div>
              </div>

              <Separator />

              {/* Skills */}
              <div>
                <p className="mb-3 text-sm font-medium">Kỹ năng chính</p>
                <div className="flex flex-wrap gap-2">
                  {trainee.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill.name} ({skill.score})
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="evaluation">Đánh giá</TabsTrigger>
              <TabsTrigger value="history">Lịch sử</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <TraineeOverview trainee={trainee} />
            </TabsContent>

            <TabsContent value="evaluation" className="mt-6">
              <EvaluationForm traineeId={trainee.id} />
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <TraineeHistory traineeId={trainee.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
