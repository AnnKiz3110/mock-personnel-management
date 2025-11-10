"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Trainee, TraineeStatus } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"

interface TraineeFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trainee?: Trainee
  mode: "add" | "edit"
}

const DEPARTMENTS = ["Phát triển phần mềm", "Triển khai", "Kinh doanh", "Marketing", "Nhân sự"]
const MENTORS = ["Trần Minh Hoàng", "Lê Thu Hà", "Nguyễn Văn Tùng", "Đặng Thị Lan", "Phạm Văn Nam"]
const STATUSES: TraineeStatus[] = ["Đang học việc", "Hoàn thành", "Đề nghị thử việc", "Không đạt"]

export function TraineeFormDialog({ open, onOpenChange, trainee, mode }: TraineeFormDialogProps) {
  const { addTrainee, updateTrainee } = useData()
  const { toast } = useToast()

  const [formData, setFormData] = useState<Partial<Trainee>>({
    fullName: trainee?.fullName || "",
    code: trainee?.code || "",
    department: trainee?.department || "",
    mentor: trainee?.mentor || "",
    startDate: trainee?.startDate || "",
    endDate: trainee?.endDate || "",
    status: trainee?.status || "Đang học việc",
    avgScore: trainee?.avgScore || 0,
    avatarUrl: trainee?.avatarUrl || "/abstract-profile.png",
    skills: trainee?.skills || [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.fullName || !formData.code || !formData.department || !formData.mentor || !formData.startDate) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ các trường bắt buộc",
        variant: "destructive",
      })
      return
    }

    if (mode === "add") {
      addTrainee(formData as Omit<Trainee, "id">)
      toast({
        title: "Thành công",
        description: "Đã thêm thực tập sinh mới",
      })
    } else {
      updateTrainee(trainee!.id, formData)
      toast({
        title: "Thành công",
        description: "Đã cập nhật thông tin thực tập sinh",
      })
    }

    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Thêm thực tập sinh mới" : "Chỉnh sửa thực tập sinh"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Họ và tên <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">
                Mã nhân viên <span className="text-destructive">*</span>
              </Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                placeholder="NV001"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department">
                Phòng ban <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.department}
                onValueChange={(value) => setFormData({ ...formData, department: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn phòng ban" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mentor">
                Người hướng dẫn <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.mentor} onValueChange={(value) => setFormData({ ...formData, mentor: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn người hướng dẫn" />
                </SelectTrigger>
                <SelectContent>
                  {MENTORS.map((mentor) => (
                    <SelectItem key={mentor} value={mentor}>
                      {mentor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">
                Ngày bắt đầu <span className="text-destructive">*</span>
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">Ngày kết thúc</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate || ""}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={formData.status}
                onValueChange={(value: TraineeStatus) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="avgScore">Điểm trung bình</Label>
              <Input
                id="avgScore"
                type="number"
                min="0"
                max="100"
                value={formData.avgScore}
                onChange={(e) => setFormData({ ...formData, avgScore: Number(e.target.value) })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-[#2c86ff] hover:bg-[#1568db]">
              {mode === "add" ? "Thêm" : "Cập nhật"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
