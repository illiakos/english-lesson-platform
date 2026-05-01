import type { Lesson } from '../types/lesson'
import iLoveWhatIDo from './i-love-what-i-do'
import whatToWear from './what-to-wear'

/**
 * All available lessons, in display order.
 * To add a new lesson: import it here and add to this array.
 */
export const allLessons: Lesson[] = [
  iLoveWhatIDo,
  whatToWear,
]
