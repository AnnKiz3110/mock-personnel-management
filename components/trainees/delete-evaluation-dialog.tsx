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
import type { Evaluation } from "@/lib/types"
import { useData } from "@/lib/data-context"
import { useToast } from "@/hooks/use-toast"

interface DeleteEvaluationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  evaluation: Evaluation
}

export function DeleteEvaluationDialog({ open, onOpenChange, evaluation }: DeleteEvaluationDialogProps) {
  const { deleteEvaluation } = useData()
  const { toast } = useToast()

  const handleDelete = () => {
    deleteEvaluation(evaluation.id)
    toast({
      title: "Đã xóa",
      description: `Đã xóa đánh giá kỳ ${evaluation.period}`,
    })
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
          <AlertDialogDescription>
            Bạn có chắc chắn muốn xóa đánh giá kỳ <strong>{evaluation.period}</strong>? Hành động này không thể hoàn
            tác.
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
