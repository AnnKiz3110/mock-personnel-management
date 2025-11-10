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
import type { Trainee } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"

interface DeleteTraineeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trainee: Trainee
}

export function DeleteTraineeDialog({ open, onOpenChange, trainee }: DeleteTraineeDialogProps) {
  const { deleteTrainee } = useData()
  const { toast } = useToast()

  const handleDelete = () => {
    deleteTrainee(trainee.id)
    toast({
      title: "Đã xóa",
      description: `Đã xóa thực tập sinh ${trainee.fullName}`,
    })
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
          <AlertDialogDescription>
            Bạn có chắc chắn muốn xóa thực tập sinh <strong>{trainee.fullName}</strong> ({trainee.code})? Hành động này
            không thể hoàn tác và sẽ xóa cả các đánh giá liên quan.
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
