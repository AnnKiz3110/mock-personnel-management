"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { useData } from "@/lib/data-context"
import { DeleteEvaluationDialog } from "./delete-evaluation-dialog"
import { EditEvaluationDialog } from "./edit-evaluation-dialog"
import type { Evaluation } from "@/lib/types"

interface TraineeHistoryProps {
  traineeId: string
}

export function TraineeHistory({ traineeId }: TraineeHistoryProps) {
  const { getEvaluationsByTraineeId } = useData()
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedEvaluation, setSelectedEvaluation] = useState<Evaluation | null>(null)

  const evaluations = getEvaluationsByTraineeId(traineeId)

  const handleEdit = (evaluation: Evaluation) => {
    setSelectedEvaluation(evaluation)
    setEditDialogOpen(true)
  }

  const handleDelete = (evaluation: Evaluation) => {
    setSelectedEvaluation(evaluation)
    setDeleteDialogOpen(true)
  }

  if (evaluations.length === 0) {
    return (
      <Card className="rounded-2xl border p-12 shadow-sm text-center">
        <p className="text-muted-foreground">Chưa có lịch sử đánh giá</p>
      </Card>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {evaluations.map((evaluation) => (
          <Card key={evaluation.id} className="rounded-2xl border p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">Đánh giá kỳ {evaluation.period}</h4>
                    {evaluation.totalScore && <Badge className="bg-[#2c86ff]">Điểm: {evaluation.totalScore}</Badge>}
                    {evaluation.recommendation && <Badge variant="outline">{evaluation.recommendation}</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Người đánh giá: {evaluation.reviewer} • {new Date(evaluation.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(evaluation)}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Sửa
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(evaluation)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>

              {evaluation.comment && <p className="text-sm leading-relaxed">{evaluation.comment}</p>}

              <div className="grid gap-2">
                {evaluation.criteria.map((criterion) => (
                  <div
                    key={criterion.key}
                    className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2"
                  >
                    <span className="text-sm">{criterion.label}</span>
                    <span className="text-sm font-semibold">{criterion.score || 0} / 100</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedEvaluation && (
        <>
          <EditEvaluationDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            evaluation={selectedEvaluation}
          />
          <DeleteEvaluationDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            evaluation={selectedEvaluation}
          />
        </>
      )}
    </>
  )
}
