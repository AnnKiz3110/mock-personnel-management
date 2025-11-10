"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { Trainee } from "@/lib/types"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

interface TraineeOverviewProps {
  trainee: Trainee
}

export function TraineeOverview({ trainee }: TraineeOverviewProps) {
  const skillsChartData = trainee.skills.map((skill) => ({
    skill: skill.name,
    score: skill.score,
  }))

  return (
    <div className="space-y-6">
      {/* Skills Radar Chart */}
      <Card className="rounded-2xl border p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-balance">Biểu đồ kỹ năng</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={skillsChartData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="skill" stroke="#6b7280" />
            <PolarRadiusAxis domain={[0, 100]} stroke="#6b7280" />
            <Radar name="Điểm" dataKey="score" stroke="#2c86ff" fill="#2c86ff" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </Card>

      {/* Skills Details */}
      <Card className="rounded-2xl border p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-balance">Chi tiết kỹ năng</h3>
        <div className="space-y-4">
          {trainee.skills.map((skill, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="outline">{skill.score}/100</Badge>
              </div>
              <Progress value={skill.score} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
