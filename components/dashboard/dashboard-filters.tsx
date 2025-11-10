"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface DashboardFiltersProps {
  filters: {
    timeRange: string
    department: string
    mentor: string
    status: string
  }
  onFiltersChange: (filters: any) => void
}

export function DashboardFilters({ filters, onFiltersChange }: DashboardFiltersProps) {
  const handleReset = () => {
    onFiltersChange({
      timeRange: "month",
      department: "",
      mentor: "",
      status: "",
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select value={filters.timeRange} onValueChange={(value) => onFiltersChange({ ...filters, timeRange: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Khoảng thời gian" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="week">Tuần này</SelectItem>
          <SelectItem value="month">Tháng này</SelectItem>
          <SelectItem value="quarter">Quý này</SelectItem>
          <SelectItem value="custom">Tùy chỉnh</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.department} onValueChange={(value) => onFiltersChange({ ...filters, department: value })}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Phòng ban" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả</SelectItem>
          <SelectItem value="dev">Phát triển phần mềm</SelectItem>
          <SelectItem value="design">Triển khai</SelectItem>
          <SelectItem value="sales">Kinh doanh</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.status} onValueChange={(value) => onFiltersChange({ ...filters, status: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả</SelectItem>
          <SelectItem value="active">Đang học việc</SelectItem>
          <SelectItem value="completed">Hoàn thành</SelectItem>
          <SelectItem value="probation">Đề nghị thử việc</SelectItem>
          <SelectItem value="failed">Không đạt</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" onClick={handleReset} className="ml-auto bg-transparent">
        <X className="mr-2 h-4 w-4" />
        Xóa bộ lọc
      </Button>
    </div>
  )
}
