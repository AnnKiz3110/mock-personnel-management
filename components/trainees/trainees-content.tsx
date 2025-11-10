"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Plus, Search } from "lucide-react"
import { TraineesTable } from "./trainees-table"
import { TraineesFilters } from "./trainees-filters"
import { Separator } from "@/components/ui/separator"
import { TraineeFormDialog } from "./trainee-form-dialog"

export function TraineesContent() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({
    department: "",
    mentor: "",
    status: "",
  })
  const [addDialogOpen, setAddDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-balance">Danh sách học việc</h2>
          <p className="mt-1 text-sm text-muted-foreground">Quản lý và theo dõi tất cả nhân viên học việc</p>
        </div>
        <Button className="bg-[#2c86ff] hover:bg-[#1568db]" onClick={() => setAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Thêm học việc
        </Button>
      </div>

      <Separator />

      {/* Toolbar */}
      <Card className="rounded-2xl border p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm theo tên, mã NV..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <TraineesFilters filters={filters} onFiltersChange={setFilters} />

          {/* Actions */}
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất CSV
          </Button>
        </div>
      </Card>

      {/* Table */}
      <TraineesTable search={search} filters={filters} />

      <TraineeFormDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} mode="add" />
    </div>
  )
}
