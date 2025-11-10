// Data models for trainee evaluation system

export type TraineeStatus = "Đang học việc" | "Hoàn thành" | "Đề nghị thử việc" | "Không đạt"
export type RecommendationType = "Tiếp tục" | "Đề nghị thử việc" | "Không đạt"

export interface Trainee {
  id: string
  fullName: string
  code: string
  avatarUrl?: string
  department: string
  mentor: string
  startDate: string
  endDate?: string
  status: TraineeStatus
  avgScore: number
  lastReviewAt?: string
  skills: Array<{ name: string; score: number }>
}

export interface EvaluationCriteria {
  key: string
  label: string
  weight: number
  score?: number
}

export interface Evaluation {
  id: string
  traineeId: string
  period: string
  criteria: EvaluationCriteria[]
  totalScore?: number
  recommendation?: RecommendationType
  comment?: string
  attachments?: Array<{ name: string; url: string }>
  reviewer: string
  createdAt: string
}

export interface CriteriaPreset {
  id: string
  name: string
  items: EvaluationCriteria[]
  department?: string
}

export interface DashboardFilters {
  timeRange?: string
  department?: string
  mentor?: string
  status?: TraineeStatus
  location?: string
}
