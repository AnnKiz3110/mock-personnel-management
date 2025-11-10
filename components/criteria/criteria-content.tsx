"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash } from "lucide-react"
import { useData } from "@/lib/data-context"
import { CriteriaFormDialog } from "./criteria-form-dialog"
import { DeleteCriteriaDialog } from "./delete-criteria-dialog"
import type { CriteriaPreset } from "@/lib/types"

export function CriteriaContent() {
  const { criteriaPresets } = useData()
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState<CriteriaPreset | null>(null)

  const handleEdit = (preset: CriteriaPreset) => {
    setSelectedPreset(preset)
    setEditDialogOpen(true)
  }

  const handleDelete = (preset: CriteriaPreset) => {
    setSelectedPreset(preset)
    setDeleteDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-balance">Thiết lập tiêu chí đánh giá</h2>
          <p className="mt-1 text-sm text-muted-foreground">Quản lý các bộ tiêu chí và trọng số đánh giá</p>
        </div>
        <Button className="bg-[#2c86ff] hover:bg-[#1568db]" onClick={() => setAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Tạo bộ tiêu chí mới
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {criteriaPresets.map((preset) => {
          const totalWeight = preset.items.reduce((sum, item) => sum + item.weight, 0)

          return (
            <Card key={preset.id} className="rounded-2xl border p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-balance">{preset.name}</h3>
                    {preset.department && (
                      <Badge variant="secondary" className="mt-2">
                        {preset.department}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(preset)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleDelete(preset)}>
                      <Trash className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  {preset.items.map((item) => (
                    <div key={item.key} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2">
                      <span className="text-sm">{item.label}</span>
                      <Badge variant="outline">{item.weight}%</Badge>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-[#2c86ff]/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tổng trọng số</span>
                    <Badge className="bg-[#2c86ff]">{totalWeight}%</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Áp dụng vào đánh giá
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      <CriteriaFormDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} mode="add" />

      {selectedPreset && (
        <>
          <CriteriaFormDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            preset={selectedPreset}
            mode="edit"
          />
          <DeleteCriteriaDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} preset={selectedPreset} />
        </>
      )}
    </div>
  )
}
