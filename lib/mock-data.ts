import type { Trainee, Evaluation, CriteriaPreset } from "./types"

// Mock trainees data
export const mockTrainees: Trainee[] = [
  {
    id: "1",
    fullName: "Nguyễn Văn An",
    code: "NV001",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Trần Minh Hoàng",
    startDate: "2025-01-15",
    status: "Đang học việc",
    avgScore: 85,
    lastReviewAt: "2025-02-15",
    skills: [
      { name: "React", score: 85 },
      { name: "TypeScript", score: 80 },
      { name: "Node.js", score: 90 },
    ],
  },
  {
    id: "2",
    fullName: "Trần Thị Bình",
    code: "NV002",
    avatarUrl: "/abstract-profile.png",
    department: "Thiết kế UI/UX",
    mentor: "Lê Thu Hà",
    startDate: "2025-01-10",
    status: "Đang học việc",
    avgScore: 92,
    lastReviewAt: "2025-02-10",
    skills: [
      { name: "Figma", score: 95 },
      { name: "Adobe XD", score: 90 },
      { name: "Design System", score: 88 },
    ],
  },
  {
    id: "3",
    fullName: "Lê Minh Cường",
    code: "NV003",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Trần Minh Hoàng",
    startDate: "2024-12-01",
    endDate: "2025-03-01",
    status: "Hoàn thành",
    avgScore: 88,
    lastReviewAt: "2025-02-28",
    skills: [
      { name: "Python", score: 90 },
      { name: "Django", score: 85 },
      { name: "PostgreSQL", score: 88 },
    ],
  },
  {
    id: "4",
    fullName: "Phạm Thị Dung",
    code: "NV004",
    avatarUrl: "/abstract-profile.png",
    department: "Kinh doanh",
    mentor: "Nguyễn Văn Tùng",
    startDate: "2025-01-20",
    status: "Đang học việc",
    avgScore: 78,
    lastReviewAt: "2025-02-20",
    skills: [
      { name: "Giao tiếp", score: 85 },
      { name: "Đàm phán", score: 75 },
      { name: "Phân tích thị trường", score: 72 },
    ],
  },
  {
    id: "5",
    fullName: "Hoàng Văn Đức",
    code: "NV005",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Trần Minh Hoàng",
    startDate: "2024-11-15",
    status: "Đề nghị thử việc",
    avgScore: 91,
    lastReviewAt: "2025-02-15",
    skills: [
      { name: "Java", score: 92 },
      { name: "Spring Boot", score: 90 },
      { name: "Microservices", score: 88 },
    ],
  },
  {
    id: "6",
    fullName: "Võ Thị Em",
    code: "NV006",
    avatarUrl: "/abstract-profile.png",
    department: "Marketing",
    mentor: "Đặng Thị Lan",
    startDate: "2025-01-05",
    status: "Đang học việc",
    avgScore: 55,
    lastReviewAt: "2025-02-05",
    skills: [
      { name: "Content Writing", score: 60 },
      { name: "SEO", score: 50 },
      { name: "Social Media", score: 55 },
    ],
  },
]

// Mock evaluations
export const mockEvaluations: Evaluation[] = [
  {
    id: "e1",
    traineeId: "1",
    period: "2025-02",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 85 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 90 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 80 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 85 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 80 },
    ],
    totalScore: 85,
    recommendation: "Tiếp tục",
    comment: "Nhân viên có tiềm năng phát triển tốt, cần cải thiện thêm về kỹ năng giao tiếp với khách hàng.",
    reviewer: "Trần Minh Hoàng",
    createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: "e2",
    traineeId: "2",
    period: "2025-02",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 95 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 92 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 90 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 90 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 92 },
    ],
    totalScore: 92,
    recommendation: "Đề nghị thử việc",
    comment: "Nhân viên xuất sắc, có khả năng làm việc độc lập và sáng tạo. Đề nghị chuyển sang thử việc sớm.",
    reviewer: "Lê Thu Hà",
    createdAt: "2025-02-10T14:30:00Z",
  },
]

// Mock criteria presets
export const mockCriteriaPresets: CriteriaPreset[] = [
  {
    id: "p1",
    name: "Dev Backend",
    department: "Phát triển phần mềm",
    items: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 35, score: undefined },
      { key: "codeQuality", label: "Chất lượng code", weight: 25, score: undefined },
      { key: "attitude", label: "Thái độ làm việc", weight: 15, score: undefined },
      { key: "discipline", label: "Kỷ luật", weight: 10, score: undefined },
      { key: "communication", label: "Giao tiếp", weight: 15, score: undefined },
    ],
  },
  {
    id: "p2",
    name: "Design",
    department: "Thiết kế UI/UX",
    items: [
      { key: "creativity", label: "Sáng tạo", weight: 30, score: undefined },
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: undefined },
      { key: "attitude", label: "Thái độ làm việc", weight: 15, score: undefined },
      { key: "communication", label: "Giao tiếp", weight: 15, score: undefined },
      { key: "proactive", label: "Tính chủ động", weight: 10, score: undefined },
    ],
  },
  {
    id: "p3",
    name: "Kinh doanh",
    department: "Kinh doanh",
    items: [
      { key: "sales", label: "Kỹ năng bán hàng", weight: 30, score: undefined },
      { key: "communication", label: "Giao tiếp", weight: 25, score: undefined },
      { key: "negotiation", label: "Đàm phán", weight: 20, score: undefined },
      { key: "attitude", label: "Thái độ làm việc", weight: 15, score: undefined },
      { key: "discipline", label: "Kỷ luật", weight: 10, score: undefined },
    ],
  },
]

// Helper functions for client-side data operations
export function filterTrainees(
  trainees: Trainee[],
  filters: {
    search?: string
    department?: string
    mentor?: string
    status?: string
  },
): Trainee[] {
  return trainees.filter((trainee) => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      if (!trainee.fullName.toLowerCase().includes(searchLower) && !trainee.code.toLowerCase().includes(searchLower)) {
        return false
      }
    }
    if (filters.department && trainee.department !== filters.department) {
      return false
    }
    if (filters.mentor && trainee.mentor !== filters.mentor) {
      return false
    }
    if (filters.status && trainee.status !== filters.status) {
      return false
    }
    return true
  })
}

export function getTraineeById(id: string): Trainee | undefined {
  return mockTrainees.find((t) => t.id === id)
}

export function getEvaluationsByTraineeId(traineeId: string): Evaluation[] {
  return mockEvaluations.filter((e) => e.traineeId === traineeId)
}

export function calculateTotalScore(criteria: { weight: number; score?: number }[]): number {
  const totalWeight = criteria.reduce((sum, c) => sum + c.weight, 0)
  const weightedSum = criteria.reduce((sum, c) => sum + (c.score || 0) * c.weight, 0)
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 10) / 10 : 0
}

export function getScoreBadgeColor(score: number): string {
  if (score >= 85) return "success"
  if (score >= 70) return "warning"
  return "destructive"
}
