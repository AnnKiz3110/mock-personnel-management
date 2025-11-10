"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Trainee, Evaluation, CriteriaPreset } from "./types"
import { mockTrainees, mockEvaluations, mockCriteriaPresets } from "./mock-data"

interface DataContextType {
  // Trainees
  trainees: Trainee[]
  addTrainee: (trainee: Omit<Trainee, "id">) => void
  updateTrainee: (id: string, trainee: Partial<Trainee>) => void
  deleteTrainee: (id: string) => void
  getTraineeById: (id: string) => Trainee | undefined

  // Evaluations
  evaluations: Evaluation[]
  addEvaluation: (evaluation: Omit<Evaluation, "id">) => void
  updateEvaluation: (id: string, evaluation: Partial<Evaluation>) => void
  deleteEvaluation: (id: string) => void
  getEvaluationsByTraineeId: (traineeId: string) => Evaluation[]

  // Criteria Presets
  criteriaPresets: CriteriaPreset[]
  addCriteriaPreset: (preset: Omit<CriteriaPreset, "id">) => void
  updateCriteriaPreset: (id: string, preset: Partial<CriteriaPreset>) => void
  deleteCriteriaPreset: (id: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const [trainees, setTrainees] = useState<Trainee[]>(mockTrainees)
  const [evaluations, setEvaluations] = useState<Evaluation[]>(mockEvaluations)
  const [criteriaPresets, setCriteriaPresets] = useState<CriteriaPreset[]>(mockCriteriaPresets)

  // Trainee operations
  const addTrainee = useCallback((trainee: Omit<Trainee, "id">) => {
    const newTrainee: Trainee = {
      ...trainee,
      id: `trainee-${Date.now()}`,
    }
    setTrainees((prev) => [...prev, newTrainee])
  }, [])

  const updateTrainee = useCallback((id: string, updates: Partial<Trainee>) => {
    setTrainees((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)))
  }, [])

  const deleteTrainee = useCallback((id: string) => {
    setTrainees((prev) => prev.filter((t) => t.id !== id))
    // Also delete related evaluations
    setEvaluations((prev) => prev.filter((e) => e.traineeId !== id))
  }, [])

  const getTraineeById = useCallback(
    (id: string) => {
      return trainees.find((t) => t.id === id)
    },
    [trainees],
  )

  // Evaluation operations
  const addEvaluation = useCallback((evaluation: Omit<Evaluation, "id">) => {
    const newEvaluation: Evaluation = {
      ...evaluation,
      id: `eval-${Date.now()}`,
    }
    setEvaluations((prev) => [...prev, newEvaluation])
  }, [])

  const updateEvaluation = useCallback((id: string, updates: Partial<Evaluation>) => {
    setEvaluations((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)))
  }, [])

  const deleteEvaluation = useCallback((id: string) => {
    setEvaluations((prev) => prev.filter((e) => e.id !== id))
  }, [])

  const getEvaluationsByTraineeId = useCallback(
    (traineeId: string) => {
      return evaluations.filter((e) => e.traineeId === traineeId)
    },
    [evaluations],
  )

  // Criteria Preset operations
  const addCriteriaPreset = useCallback((preset: Omit<CriteriaPreset, "id">) => {
    const newPreset: CriteriaPreset = {
      ...preset,
      id: `preset-${Date.now()}`,
    }
    setCriteriaPresets((prev) => [...prev, newPreset])
  }, [])

  const updateCriteriaPreset = useCallback((id: string, updates: Partial<CriteriaPreset>) => {
    setCriteriaPresets((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)))
  }, [])

  const deleteCriteriaPreset = useCallback((id: string) => {
    setCriteriaPresets((prev) => prev.filter((p) => p.id !== id))
  }, [])

  return (
    <DataContext.Provider
      value={{
        trainees,
        addTrainee,
        updateTrainee,
        deleteTrainee,
        getTraineeById,
        evaluations,
        addEvaluation,
        updateEvaluation,
        deleteEvaluation,
        getEvaluationsByTraineeId,
        criteriaPresets,
        addCriteriaPreset,
        updateCriteriaPreset,
        deleteCriteriaPreset,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within DataProvider")
  }
  return context
}
