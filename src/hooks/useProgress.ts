import { useCallback, useEffect, useState } from "react"

export function useProgress() {

  const [progress, setProgress] = useState<Record<string, unknown>>({})

  useEffect(() => {
    // загрузка данных из localStore
  })

  const lastRead = useCallback((id: string) => {
    // сохранение последней даты чтнения
  }, [])

  const getProgress = useCallback((id: string) => {
    // отслеживание статуса 
  }, [])

  return { progress, lastRead, getProgress};
}