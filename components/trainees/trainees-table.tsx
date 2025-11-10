"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { getScoreBadgeColor } from "@/lib/mock-data"
import type { TraineeStatus, Trainee } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { TraineeFormDialog } from "./trainee-form-dialog"
import { DeleteTraineeDialog } from "./delete-trainee-dialog"

interface TraineesTableProps {
  search: string
  filters: {
    department: string
    mentor: string
    status: string
  }
}

const statusColors: Record<TraineeStatus, string> = {
  "Đang học việc": "bg-blue-50 text-[#2c86ff] border-[#2c86ff]/20",
  "Hoàn thành": "bg-green-50 text-green-700 border-green-200",
  "Đề nghị thử việc": "bg-orange-50 text-orange-700 border-orange-200",
  "Không đạt": "bg-red-50 text-red-700 border-red-200",
}

export function TraineesTable({ search, filters }: TraineesTableProps) {
  const { trainees } = useData()
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedTrainee, setSelectedTrainee] = useState<Trainee | null>(null)

  const filteredTrainees = trainees.filter((trainee) => {
    if (search) {
      const searchLower = search.toLowerCase()
      if (!trainee.fullName.toLowerCase().includes(searchLower) && !trainee.code.toLowerCase().includes(searchLower)) {
        return false
      }
    }
    if (filters.department && filters.department !== "all" && trainee.department !== filters.department) {
      return false
    }
    if (filters.mentor && filters.mentor !== "all" && trainee.mentor !== filters.mentor) {
      return false
    }
    if (filters.status && filters.status !== "all" && trainee.status !== filters.status) {
      return false
    }
    return true
  })

  const handleEdit = (trainee: Trainee) => {
    setSelectedTrainee(trainee)
    setEditDialogOpen(true)
  }

  const handleDelete = (trainee: Trainee) => {
    setSelectedTrainee(trainee)
    setDeleteDialogOpen(true)
  }

  return (
    <>
      <Card className="rounded-2xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nhân viên</TableHead>
              <TableHead>Mã NV</TableHead>
              <TableHead>Phòng ban</TableHead>
              <TableHead>Mentor</TableHead>
              <TableHead>Ngày bắt đầu</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Điểm TB</TableHead>
              <TableHead>Đánh giá gần nhất</TableHead>
              <TableHead className="text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrainees.map((trainee) => {
              const scoreColor = getScoreBadgeColor(trainee.avgScore)

              return (
                <TableRow key={trainee.id} className="hover:bg-[#2c86ff]/5">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={trainee.avatarUrl || "/placeholder.svg"} />
                        <AvatarFallback className="bg-[#2c86ff] text-white">
                          {trainee.fullName.split(" ").slice(-1)[0][0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{trainee.fullName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{trainee.code}</TableCell>
                  <TableCell>{trainee.department}</TableCell>
                  <TableCell>{trainee.mentor}</TableCell>
                  <TableCell>{new Date(trainee.startDate).toLocaleDateString("vi-VN")}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[trainee.status]}>
                      {trainee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{trainee.avgScore}</span>
                      <Progress value={trainee.avgScore} className="h-2 w-16" />
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {trainee.lastReviewAt ? new Date(trainee.lastReviewAt).toLocaleDateString("vi-VN") : "Chưa có"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/trainees/${trainee.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleEdit(trainee)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleDelete(trainee)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>

      {selectedTrainee && (
        <>
          <TraineeFormDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            trainee={selectedTrainee}
            mode="edit"
          />
          <DeleteTraineeDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} trainee={selectedTrainee} />
        </>
      )}
    </>
  )
}
