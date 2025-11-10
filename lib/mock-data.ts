import type { Trainee, Evaluation, CriteriaPreset } from "./types"

// Mock trainees data (đã thay toàn bộ bằng danh sách mới)
export const mockTrainees: Trainee[] = [
  {
    id: "1",
    fullName: "Trần Đào Thái An",
    code: "NV001",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Trần Minh Hoàng",
    startDate: "2025-09-16",
    status: "Hoàn thành",
    avgScore: 86,
    lastReviewAt: "2025-10-20",
    skills: [
      { name: "React", score: 88 },
      { name: "TypeScript", score: 84 },
      { name: "Node.js", score: 86 },
    ],
  },
  {
    id: "2",
    fullName: "Lương Vĩnh Khang",
    code: "NV002",
    avatarUrl: "/abstract-profile.png",
    department: "Triển khai",
    mentor: "Lê Thu Hà",
    startDate: "2025-09-10",
    status: "Hoàn thành",
    avgScore: 90,
    lastReviewAt: "2025-10-18",
    skills: [
      { name: "Figma", score: 93 },
      { name: "Design System", score: 88 },
      { name: "Prototyping", score: 89 },
    ],
  },
  {
    id: "3",
    fullName: "Trần Quang Vinh",
    code: "NV003",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Nguyễn Hữu Phúc",
    startDate: "2025-09-05",
    status: "Đang học việc",
    avgScore: 79,
    lastReviewAt: "2025-10-15",
    skills: [
      { name: "Java", score: 80 },
      { name: "Spring Boot", score: 78 },
      { name: "SQL", score: 79 },
    ],
  },
  {
    id: "4",
    fullName: "Trần Hoàng Anh Tú",
    code: "NV004",
    avatarUrl: "/abstract-profile.png",
    department: "Kinh doanh",
    mentor: "Nguyễn Văn Tùng",
    startDate: "2025-09-22",
    status: "Đang học việc",
    avgScore: 74,
    lastReviewAt: "2025-10-21",
    skills: [
      { name: "Giao tiếp", score: 78 },
      { name: "Đàm phán", score: 73 },
      { name: "CRM", score: 70 },
    ],
  },
  {
    id: "5",
    fullName: "Nguyễn Hoàng Duy",
    code: "NV005",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Trần Minh Hoàng",
    startDate: "2025-08-25",
    status: "Đề nghị thử việc",
    avgScore: 92,
    lastReviewAt: "2025-10-25",
    skills: [
      { name: "Python", score: 94 },
      { name: "Django", score: 91 },
      { name: "PostgreSQL", score: 90 },
    ],
  },
  {
    id: "6",
    fullName: "Trần Anh Kiệt",
    code: "NV006",
    avatarUrl: "/abstract-profile.png",
    department: "Triển khai",
    mentor: "Lê Thu Hà",
    startDate: "2025-09-12",
    status: "Đang học việc",
    avgScore: 69,
    lastReviewAt: "2025-10-17",
    skills: [
      { name: "Wireframing", score: 68 },
      { name: "Figma", score: 70 },
      { name: "UX Research", score: 69 },
    ],
  },
  {
    id: "7",
    fullName: "Lê Xuân Hiếu",
    code: "NV007",
    avatarUrl: "/abstract-profile.png",
    department: "Kinh doanh",
    mentor: "Nguyễn Văn Tùng",
    startDate: "2025-09-03",
    status: "Đang học việc",
    avgScore: 82,
    lastReviewAt: "2025-10-16",
    skills: [
      { name: "Kỹ năng bán hàng", score: 84 },
      { name: "Phân tích thị trường", score: 80 },
      { name: "Giao tiếp", score: 82 },
    ],
  },
  {
    id: "8",
    fullName: "Huỳnh Tấn Phát",
    code: "NV008",
    avatarUrl: "/abstract-profile.png",
    department: "Phát triển phần mềm",
    mentor: "Nguyễn Hữu Phúc",
    startDate: "2025-09-01",
    status: "Đang học việc",
    avgScore: 76,
    lastReviewAt: "2025-10-14",
    skills: [
      { name: "C#", score: 77 },
      { name: ".NET", score: 75 },
      { name: "REST API", score: 76 },
    ],
  },
  {
    id: "9",
    fullName: "Hoàng Nam",
    code: "NV009",
    avatarUrl: "/abstract-profile.png",
    department: "Triển khai",
    mentor: "Phạm Thảo Nhi",
    startDate: "2025-09-18",
    status: "Đang học việc",
    avgScore: 83,
    lastReviewAt: "2025-10-22",
    skills: [
      { name: "UI Layout", score: 85 },
      { name: "Typography", score: 82 },
      { name: "Prototyping", score: 81 },
    ],
  },
  {
    id: "10",
    fullName: "Lương Trúc Vy",
    code: "NV010",
    avatarUrl: "/abstract-profile.png",
    department: "Kinh doanh",
    mentor: "Nguyễn Văn Tùng",
    startDate: "2025-09-07",
    status: "Đang học việc",
    avgScore: 88,
    lastReviewAt: "2025-10-19",
    skills: [
      { name: "Kỹ năng bán hàng", score: 90 },
      { name: "Đàm phán", score: 87 },
      { name: "Giao tiếp", score: 86 },
    ],
  },
]

// Mock evaluations (mỗi thực tập sinh 1 bản đánh giá mẫu)
export const mockEvaluations: Evaluation[] = [
  {
    id: "e1",
    traineeId: "1",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 87 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 88 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 82 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 85 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 84 },
    ],
    totalScore: 86,
    recommendation: "Tiếp tục",
    comment: "Nắm vững React/TS, cần cải thiện viết test.",
    reviewer: "Trần Minh Hoàng",
    createdAt: "2025-10-20T10:00:00Z",
  },
  {
    id: "e2",
    traineeId: "2",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 92 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 90 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 88 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 89 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 90 },
    ],
    totalScore: 90,
    recommendation: "Đề nghị thử việc",
    comment: "Thiết kế sạch, biết xây dựng design system.",
    reviewer: "Lê Thu Hà",
    createdAt: "2025-10-18T09:30:00Z",
  },
  {
    id: "e3",
    traineeId: "3",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 78 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 82 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 76 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 80 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 78 },
    ],
    totalScore: 79,
    recommendation: "Tiếp tục",
    comment: "Cần tối ưu truy vấn và logging.",
    reviewer: "Nguyễn Hữu Phúc",
    createdAt: "2025-10-15T08:00:00Z",
  },
  {
    id: "e4",
    traineeId: "4",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 72 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 77 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 74 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 76 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 70 },
    ],
    totalScore: 74,
    recommendation: "Tiếp tục",
    comment: "Bám quy trình bán hàng, tăng tỉ lệ chốt hẹn.",
    reviewer: "Nguyễn Văn Tùng",
    createdAt: "2025-10-21T13:10:00Z",
  },
  {
    id: "e5",
    traineeId: "5",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 94 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 92 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 91 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 89 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 92 },
    ],
    totalScore: 92,
    recommendation: "Đề nghị thử việc",
    comment: "Dẫn dắt mini-task tốt, có mentoring bạn khác.",
    reviewer: "Trần Minh Hoàng",
    createdAt: "2025-10-25T11:45:00Z",
  },
  {
    id: "e6",
    traineeId: "6",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 68 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 71 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 66 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 70 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 69 },
    ],
    totalScore: 69,
    comment: "Cần củng cố UX research và quản lý thời gian.",
    reviewer: "Lê Thu Hà",
    createdAt: "2025-10-17T07:50:00Z",
  },
  {
    id: "e7",
    traineeId: "7",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 83 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 84 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 80 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 82 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 81 },
    ],
    totalScore: 82,
    recommendation: "Tiếp tục",
    comment: "Tăng tỷ lệ chuyển đổi ở pipeline giữa.",
    reviewer: "Nguyễn Văn Tùng",
    createdAt: "2025-10-16T10:25:00Z",
  },
  {
    id: "e8",
    traineeId: "8",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 77 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 78 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 74 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 76 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 75 },
    ],
    totalScore: 76,
    recommendation: "Tiếp tục",
    comment: "Cần chuẩn hóa API docs và error handling.",
    reviewer: "Nguyễn Hữu Phúc",
    createdAt: "2025-10-14T09:00:00Z",
  },
  {
    id: "e9",
    traineeId: "9",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 85 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 86 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 80 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 83 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 82 },
    ],
    totalScore: 83,
    recommendation: "Tiếp tục",
    comment: "UI gọn gàng, cần đẩy nhanh tốc độ prototyping.",
    reviewer: "Phạm Thảo Nhi",
    createdAt: "2025-10-22T12:20:00Z",
  },
  {
    id: "e10",
    traineeId: "10",
    period: "2025-10",
    criteria: [
      { key: "technical", label: "Kỹ năng chuyên môn", weight: 30, score: 89 },
      { key: "attitude", label: "Thái độ làm việc", weight: 20, score: 90 },
      { key: "discipline", label: "Kỷ luật", weight: 15, score: 86 },
      { key: "communication", label: "Giao tiếp", weight: 20, score: 88 },
      { key: "proactive", label: "Tính chủ động", weight: 15, score: 87 },
    ],
    totalScore: 88,
    comment: "Chốt deal tốt, tài liệu hoá đầy đủ.",
    reviewer: "Nguyễn Văn Tùng",
    createdAt: "2025-10-19T15:40:00Z",
  },
]

// Mock criteria presets (giữ nguyên)
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
    department: "Triển khai",
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

// Helper functions cho client-side (giữ nguyên)
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
