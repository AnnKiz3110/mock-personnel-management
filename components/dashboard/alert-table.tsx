"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Mail } from "lucide-react"
import { mockTrainees } from "@/lib/mock-data"

export function AlertTable() {
  // Filter trainees with low scores
  const alerts = mockTrainees.filter((t) => t.avgScore < 60)

  if (alerts.length === 0) {
    return null
  }

  return (
    <Card className="rounded-2xl border p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-orange-600" />
        <h3 className="text-lg font-semibold">Cảnh báo cần chú ý</h3>
        <Badge variant="outline" className="ml-auto">
          {alerts.length} học việc
        </Badge>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Họ tên</TableHead>
            <TableHead>Phòng ban</TableHead>
            <TableHead>Mentor</TableHead>
            <TableHead>Điểm TB</TableHead>
            <TableHead>Vấn đề</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((trainee) => (
            <TableRow key={trainee.id}>
              <TableCell className="font-medium">{trainee.fullName}</TableCell>
              <TableCell>{trainee.department}</TableCell>
              <TableCell>{trainee.mentor}</TableCell>
              <TableCell>
                <Badge variant="destructive">{trainee.avgScore}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Điểm thấp, cần hỗ trợ</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Gửi nhắc nhở
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
