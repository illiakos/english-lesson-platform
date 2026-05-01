import type { Lesson } from '../types/lesson'

const STORAGE_PREFIX = 'lesson-progress-'

/**
 * Section types that don't count toward lesson progress.
 * Keep in sync with LessonRenderer NON_TRACKABLE set.
 */
export const NON_TRACKABLE_TYPES = new Set([
  'hero',
  'wordlist',
  'grammar-tabs',
  'results-checklist',
  'vocabulary-categories',
])

export function getLessonProgress(lessonId: string): string[] {
  try {
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${lessonId}`)
    return stored ? (JSON.parse(stored) as string[]) : []
  } catch {
    return []
  }
}

export function saveLessonProgress(lessonId: string, completedIds: string[]): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${lessonId}`, JSON.stringify(completedIds))
  } catch {
    // Ignore storage errors (private browsing, quota exceeded, etc.)
  }
}

export function clearLessonProgress(lessonId: string): void {
  localStorage.removeItem(`${STORAGE_PREFIX}${lessonId}`)
}

export function getLessonTrackableCount(lesson: Lesson): number {
  return lesson.sections.filter((s) => !NON_TRACKABLE_TYPES.has(s.type)).length
}

export function getLessonProgressPercent(lesson: Lesson): number {
  const trackable = getLessonTrackableCount(lesson)
  if (trackable === 0) return 0
  const completed = getLessonProgress(lesson.id)
  const done = lesson.sections
    .filter((s) => !NON_TRACKABLE_TYPES.has(s.type))
    .filter((s) => completed.includes(s.id)).length
  return Math.round((done / trackable) * 100)
}
