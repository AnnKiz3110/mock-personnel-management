"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const trendData = [
  { month: "T9", score: 78 },
  { month: "T10", score: 82 },
  { month: "T11", score: 85 },
  { month: "T12", score: 83 },
  { month: "T1", score: 87 },
  { month: "T2", score: 85 },
]

const departmentData = [
  { department: "Dev", count: 3 },
  { department: "Design", count: 1 },
  { department: "Sales", count: 1 },
  { department: "Marketing", count: 1 },
]

const statusData = [
  { name: "Đang học việc", value: 3, color: "#2c86ff" },
  { name: "Hoàn thành", value: 1, color: "#10b981" },
  { name: "Đề nghị thử việc", value: 1, color: "#f59e0b" },
  { name: "Không đạt", value: 1, color: "#ef4444" },
]

// Hàm hiển thị label bên ngoài Pie
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name, value }: any) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius * 1.3
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
    >
      {`${name}: ${value}`}
    </text>
  )
}

export function DashboardCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Biểu đồ xu hướng */}
      <Card className="rounded-2xl border p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-balance">Xu hướng điểm trung bình</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#2c86ff"
              strokeWidth={3}
              name="Điểm TB"
              dot={{ fill: "#2c86ff", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Biểu đồ phòng ban */}
      <Card className="rounded-2xl border p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-balance">Số lượng theo phòng ban</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="department" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#2c86ff" name="Số lượng" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Biểu đồ trạng thái */}
      <Card className="rounded-2xl border p-6 shadow-sm lg:col-span-2">
        <h3 className="mb-4 text-lg font-semibold text-balance">Phân bố trạng thái</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
