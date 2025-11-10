"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { mockCriteriaPresets, calculateTotalScore } from "@/lib/mock-data"
import type { EvaluationCriteria, RecommendationType } from "@/lib/types"

interface EvaluationFormProps {
  traineeId: string
}

export function EvaluationForm({ traineeId }: EvaluationFormProps) {
  const { toast } = useToast()
  const [selectedPreset, setSelectedPreset] = useState("")
  const [criteria, setCriteria] = useState<EvaluationCriteria[]>([])
  const [comment, setComment] = useState("")
  const [recommendation, setRecommendation] = useState<RecommendationType | "">("")

  const handlePresetChange = (presetId: string) => {
    setSelectedPreset(presetId)
    const preset = mockCriteriaPresets.find((p) => p.id === presetId)
    if (preset) {
      setCriteria(preset.items.map((item) => ({ ...item, score: 0 })))
    }
  }

  const handleScoreChange = (index: number, score: number) => {
    const newCriteria = [...criteria]
    newCriteria[index].score = score
    setCriteria(newCriteria)
  }

  const totalScore = calculateTotalScore(criteria)

  const handleSaveDraft = () => {
    toast({
      title: "Đã lưu nháp",
      description: "Bản đánh giá đã được lưu thành công.",
    })
  }

  const handleSubmit = () => {
    if (criteria.some((c) => !c.score)) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng nhập đầy đủ điểm cho tất cả tiêu chí.",
        variant: "destructive",
      })
      return
    }

    if (totalScore < 60 && comment.length < 30) {
      toast({
        title: "Thiếu nhận xét",
        description: "Với điểm dưới 60, bạn cần nhập nhận xét chi tiết (tối thiểu 30 ký tự).",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Gửi đánh giá thành công",
      description: "Đánh giá đã được gửi đến HR/Quản lý để duyệt.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Preset Selection */}
      <Card className="rounded-2xl border p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <Label>Chọn bộ tiêu chí</Label>
            <Select value={selectedPreset} onValueChange={handlePresetChange}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Chọn bộ tiêu chí đánh giá" />
              </SelectTrigger>
              <SelectContent>
                {mockCriteriaPresets.map((preset) => (
                  <SelectItem key={preset.id} value={preset.id}>
                    {preset.name} {preset.department && `(${preset.department})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {criteria.length > 0 && (
            <>
              <Separator />

              {/* Criteria Scores */}
              <div className="space-y-6">
                {criteria.map((criterion, index) => (
                  <div key={criterion.key}>
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <Label className="text-base">{criterion.label}</Label>
                        <p className="text-sm text-muted-foreground">Trọng số: {criterion.weight}%</p>
                      </div>
                      <span className="text-2xl font-bold text-[#2c86ff]">{criterion.score || 0}</span>
                    </div>
                    <Slider
                      value={[criterion.score || 0]}
                      onValueChange={(value) => handleScoreChange(index, value[0])}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>

              <Separator />

              {/* Total Score */}
              <div className="rounded-xl bg-[#2c86ff]/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Tổng điểm:</span>
                  <span className="text-3xl font-bold text-[#2c86ff]">{totalScore}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Comment and Recommendation */}
      {criteria.length > 0 && (
        <Card className="rounded-2xl border p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <Label>Nhận xét chi tiết</Label>
              <Textarea
                placeholder="Nhập nhận xét về hiệu suất làm việc, điểm mạnh, điểm cần cải thiện..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2 min-h-[120px]"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {comment.length} ký tự {totalScore < 60 && "(Yêu cầu tối thiểu 30 ký tự cho điểm dưới 60)"}
              </p>
            </div>

            <div>
              <Label>Đề xuất</Label>
              <Select value={recommendation} onValueChange={(value: RecommendationType) => setRecommendation(value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Chọn đề xuất" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tiếp tục">Tiếp tục học việc</SelectItem>
                  <SelectItem value="Đề nghị thử việc">Đề nghị chuyển thử việc</SelectItem>
                  <SelectItem value="Không đạt">Không đạt yêu cầu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Actions */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="mr-2 h-4 w-4" />
                Lưu nháp
              </Button>
              <Button className="bg-[#2c86ff] hover:bg-[#1568db]" onClick={handleSubmit}>
                <Send className="mr-2 h-4 w-4" />
                Gửi duyệt
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
