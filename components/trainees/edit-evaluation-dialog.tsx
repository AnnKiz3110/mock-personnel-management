"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Evaluation, RecommendationType } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"
import { calculateTotalScore } from "@/lib/mock-data"

interface EditEvaluationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  evaluation: Evaluation
}

export function EditEvaluationDialog({ open, onOpenChange, evaluation }: EditEvaluationDialogProps) {
  const { updateEvaluation } = useData()
  const { toast } = useToast()

  const [criteria, setCriteria] = useState(evaluation.criteria)
  const [recommendation, setRecommendation] = useState<RecommendationType | undefined>(evaluation.recommendation)
  const [comment, setComment] = useState(evaluation.comment || "")

  const updateCriteriaScore = (index: number, score: number) => {
    const newCriteria = [...criteria]
    newCriteria[index] = { ...newCriteria[index], score }
    setCriteria(newCriteria)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const totalScore = calculateTotalScore(criteria)

    updateEvaluation(evaluation.id, {
      criteria,
      totalScore,
      recommendation,
      comment,
    })

    toast({
      title: "Thành công",
      description: "Đã cập nhật đánh giá",
    })

    onOpenChange(false)
  }

  const totalScore = calculateTotalScore(criteria)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa đánh giá kỳ {evaluation.period}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Criteria Scores */}
          <div className="space-y-4">
            <Label>Điểm đánh giá theo tiêu chí</Label>
            {criteria.map((criterion, index) => (
              <div key={criterion.key} className="space-y-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{criterion.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Trọng số: {criterion.weight}%</span>
                    <span className="text-lg font-bold text-[#2c86ff] min-w-[60px] text-right">
                      {criterion.score || 0}
                    </span>
                  </div>
                </div>
                <Slider
                  value={[criterion.score || 0]}
                  onValueChange={(value) => updateCriteriaScore(index, value[0])}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Total Score */}
          <div className="rounded-lg bg-[#2c86ff]/10 p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Tổng điểm</span>
              <span className="text-2xl font-bold text-[#2c86ff]">{totalScore}</span>
            </div>
          </div>

          {/* Recommendation */}
          <div className="space-y-2">
            <Label htmlFor="recommendation">Đề xuất</Label>
            <Select value={recommendation} onValueChange={(value: RecommendationType) => setRecommendation(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn đề xuất" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tiếp tục">Tiếp tục</SelectItem>
                <SelectItem value="Đề nghị thử việc">Đề nghị thử việc</SelectItem>
                <SelectItem value="Không đạt">Không đạt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="comment">Nhận xét</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Nhập nhận xét chi tiết về quá trình học việc..."
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-[#2c86ff] hover:bg-[#1568db]">
              Cập nhật
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
