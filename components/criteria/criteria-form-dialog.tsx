"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import type { CriteriaPreset, EvaluationCriteria } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"

interface CriteriaFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  preset?: CriteriaPreset
  mode: "add" | "edit"
}

const DEPARTMENTS = ["Phát triển phần mềm", "Thiết kế UI/UX", "Kinh doanh", "Marketing", "Nhân sự"]

export function CriteriaFormDialog({ open, onOpenChange, preset, mode }: CriteriaFormDialogProps) {
  const { addCriteriaPreset, updateCriteriaPreset } = useData()
  const { toast } = useToast()

  const [name, setName] = useState(preset?.name || "")
  const [department, setDepartment] = useState(preset?.department || "none")
  const [items, setItems] = useState<EvaluationCriteria[]>(
    preset?.items || [{ key: "criteria1", label: "", weight: 0, score: undefined }],
  )

  const addCriteria = () => {
    setItems([...items, { key: `criteria${items.length + 1}`, label: "", weight: 0, score: undefined }])
  }

  const removeCriteria = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index))
    }
  }

  const updateCriteria = (index: number, field: keyof EvaluationCriteria, value: string | number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!name) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập tên bộ tiêu chí",
        variant: "destructive",
      })
      return
    }

    const hasEmptyLabel = items.some((item) => !item.label)
    if (hasEmptyLabel) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ tên tiêu chí",
        variant: "destructive",
      })
      return
    }

    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)
    if (totalWeight !== 100) {
      toast({
        title: "Lỗi",
        description: "Tổng trọng số phải bằng 100%",
        variant: "destructive",
      })
      return
    }

    const newPreset = {
      name,
      department: department === "none" ? undefined : department,
      items,
    }

    if (mode === "add") {
      addCriteriaPreset(newPreset)
      toast({
        title: "Thành công",
        description: "Đã tạo bộ tiêu chí mới",
      })
    } else {
      updateCriteriaPreset(preset!.id, newPreset)
      toast({
        title: "Thành công",
        description: "Đã cập nhật bộ tiêu chí",
      })
    }

    onOpenChange(false)
  }

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Tạo bộ tiêu chí mới" : "Chỉnh sửa bộ tiêu chí"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Tên bộ tiêu chí <span className="text-destructive">*</span>
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dev Backend" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Phòng ban (tùy chọn)</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn phòng ban" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Không chọn</SelectItem>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Các tiêu chí</Label>
              <Button type="button" size="sm" variant="outline" onClick={addCriteria}>
                <Plus className="mr-2 h-4 w-4" />
                Thêm tiêu chí
              </Button>
            </div>

            {items.map((item, index) => (
              <div key={item.key} className="flex items-end gap-3 rounded-lg border p-4">
                <div className="flex-1 space-y-2">
                  <Label>Tên tiêu chí</Label>
                  <Input
                    value={item.label}
                    onChange={(e) => updateCriteria(index, "label", e.target.value)}
                    placeholder="Kỹ năng chuyên môn"
                  />
                </div>

                <div className="w-32 space-y-2">
                  <Label>Trọng số (%)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={item.weight}
                    onChange={(e) => updateCriteria(index, "weight", Number(e.target.value))}
                  />
                </div>

                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() => removeCriteria(index)}
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <div
            className={`rounded-lg p-4 ${totalWeight === 100 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tổng trọng số</span>
              <span className={`text-lg font-bold ${totalWeight === 100 ? "text-green-700" : "text-red-700"}`}>
                {totalWeight}%
              </span>
            </div>
            {totalWeight !== 100 && <p className="mt-2 text-xs text-red-600">Tổng trọng số phải bằng 100%</p>}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-[#2c86ff] hover:bg-[#1568db]" disabled={totalWeight !== 100}>
              {mode === "add" ? "Tạo" : "Cập nhật"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
