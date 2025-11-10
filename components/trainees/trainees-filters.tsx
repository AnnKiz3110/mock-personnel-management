"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TraineesFiltersProps {
  filters: {
    department: string
    mentor: string
    status: string
  }
  onFiltersChange: (filters: any) => void
}

export function TraineesFilters({ filters, onFiltersChange }: TraineesFiltersProps) {
  return (
    <>
      <Select value={filters.department} onValueChange={(value) => onFiltersChange({ ...filters, department: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Phòng ban" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả</SelectItem>
          <SelectItem value="Phát triển phần mềm">Phát triển phần mềm</SelectItem>
          <SelectItem value="Triển khai">Triển khai</SelectItem>
          <SelectItem value="Kinh doanh">Kinh doanh</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.status} onValueChange={(value) => onFiltersChange({ ...filters, status: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả</SelectItem>
          <SelectItem value="Đang học việc">Đang học việc</SelectItem>
          <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
          <SelectItem value="Đề nghị thử việc">Đề nghị thử việc</SelectItem>
          <SelectItem value="Không đạt">Không đạt</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
