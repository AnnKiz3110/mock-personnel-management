"use client"

import { Card } from "@/components/ui/card"
import { Users, CheckCircle, TrendingUp, Award, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { mockTrainees } from "@/lib/mock-data"

export function KPICards() {
  const totalTrainees = mockTrainees.length
  const activeTrainees = mockTrainees.filter((t) => t.status === "Đang học việc").length
  const completionRate = Math.round(
    (mockTrainees.filter((t) => t.status === "Hoàn thành").length / totalTrainees) * 100,
  )
  const avgScore = Math.round(mockTrainees.reduce((sum, t) => sum + t.avgScore, 0) / totalTrainees)
  const probationRate = Math.round(
    (mockTrainees.filter((t) => t.status === "Đề nghị thử việc").length / totalTrainees) * 100,
  )

  const kpis = [
    {
      title: "Tổng số học việc",
      value: totalTrainees,
      subtitle: `${activeTrainees} đang học việc`,
      icon: Users,
      trend: "+12%",
      trendUp: true,
      color: "bg-blue-50 text-[#2c86ff]",
    },
    {
      title: "Tỷ lệ hoàn thành",
      value: `${completionRate}%`,
      subtitle: "Trong kỳ này",
      icon: CheckCircle,
      trend: "+5%",
      trendUp: true,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Điểm trung bình",
      value: avgScore,
      subtitle: "Thang điểm 100",
      icon: Award,
      trend: "+3.2",
      trendUp: true,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Tỷ lệ chuyển đổi",
      value: `${probationRate}%`,
      subtitle: "Lên thử việc",
      icon: TrendingUp,
      trend: "+8%",
      trendUp: true,
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trendUp ? ArrowUpRight : ArrowDownRight

        return (
          <Card key={index} className="rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <p className="mt-2 text-3xl font-bold text-balance">{kpi.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{kpi.subtitle}</p>
              </div>
              <div className={`rounded-xl p-3 ${kpi.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <div
              className={`mt-4 flex items-center text-sm font-medium ${
                kpi.trendUp ? "text-green-600" : "text-red-600"
              }`}
            >
              <TrendIcon className="mr-1 h-4 w-4" />
              {kpi.trend} so với tháng trước
            </div>
          </Card>
        )
      })}
    </div>
  )
}
