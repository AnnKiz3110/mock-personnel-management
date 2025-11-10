"use client"

import { useState } from "react"
import { KPICards } from "./kpi-cards"
import { DashboardCharts } from "./dashboard-charts"
import { DashboardFilters } from "./dashboard-filters"
import { AlertTable } from "./alert-table"
import { Separator } from "@/components/ui/separator"

export function DashboardContent() {
  const [filters, setFilters] = useState({
    timeRange: "month",
    department: "",
    mentor: "",
    status: "",
  })

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-balance">Tổng quan thống kê</h2>
        <DashboardFilters filters={filters} onFiltersChange={setFilters} />
      </div>

      <Separator />

      {/* KPI Cards */}
      <KPICards />

      {/* Charts */}
      <DashboardCharts />

      {/* Alert Table */}
      <AlertTable />
    </div>
  )
}
