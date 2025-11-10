"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { CriteriaPreset } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"

interface DeleteCriteriaDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  preset: CriteriaPreset
}

export function DeleteCriteriaDialog({ open, onOpenChange, preset }: DeleteCriteriaDialogProps) {
  const { deleteCriteriaPreset } = useData()
  const { toast } = useToast()

  const handleDelete = () => {
    deleteCriteriaPreset(preset.id)
    toast({
      title: "Đã xóa",
      description: `Đã xóa bộ tiêu chí ${preset.name}`,
    })
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
          <AlertDialogDescription>
            Bạn có chắc chắn muốn xóa bộ tiêu chí <strong>{preset.name}</strong>? Hành động này không thể hoàn tác.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
            Xóa
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
