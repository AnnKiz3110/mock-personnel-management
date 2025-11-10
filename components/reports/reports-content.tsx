"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export function ReportsContent() {
  const reportTemplates = [
    {
      title: "Báo cáo theo phòng ban",
      description: "Thống kê hiệu suất học việc theo từng phòng ban",
      icon: FileText,
    },
    {
      title: "Báo cáo theo mentor",
      description: "Đánh giá hiệu quả hướng dẫn của các mentor",
      icon: FileText,
    },
    {
      title: "Báo cáo theo trạng thái",
      description: "Phân tích phân bố trạng thái học việc",
      icon: FileText,
    },
    {
      title: "Báo cáo theo thời gian",
      description: "Xu hướng điểm số và hoàn thành theo thời gian",
      icon: FileText,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-balance">Báo cáo & Xuất file</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tạo và xuất các báo cáo thống kê về học việc</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reportTemplates.map((template, index) => {
          const Icon = template.icon
          return (
            <Card key={index} className="rounded-2xl border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#2c86ff]/10 p-3">
                  <Icon className="h-6 w-6 text-[#2c86ff]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-balance">{template.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{template.description}</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      CSV
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      XLSX
                    </Button>
                    <Button size="sm" className="bg-[#2c86ff] hover:bg-[#1568db]">
                      <Download className="mr-2 h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
