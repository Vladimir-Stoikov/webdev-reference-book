import { useCallback, useEffect, useState } from "react"

export function useProgress() {

  const [progress, setProgress] = useState<Record<string, {lastRead: string}>>({})

  useEffect(() => {
    const loadedSavedData = localStorage.getItem('readingProgress');
    if(loadedSavedData) {
      setProgress(JSON.parse(loadedSavedData));
    }
  }, [])

  const lastRead = useCallback((id: string) => {
    const newRecord = {
      ...progress,
      [id]: {lastRead: new Date().toISOString()},
    };
    setProgress(newRecord);
    localStorage.setItem('readingProgress', JSON.stringify(newRecord));
  }, [progress])

  const getProgress = useCallback((id: string) => {
    return progress[id] || null;
  }, [progress])

  return { progress, lastRead, getProgress};
}