import type { Lesson } from '../types/lesson'
import cultureShockRules from './culture-shock-rules'
import healthcareHospital from './healthcare-hospital'
import iLoveWhatIDo from './i-love-what-i-do'
import meetingTheGuests from './meeting-the-guests'
import presentPerfectVsPastSimple from './present-perfect-vs-past-simple'
import whatToWear from './what-to-wear'

/**
 * All available lessons, in display order.
 * To add a new lesson: import it here and add to this array.
 */
export const allLessons: Lesson[] = [
  healthcareHospital,
  iLoveWhatIDo,
  meetingTheGuests,
  cultureShockRules,
  whatToWear,
  presentPerfectVsPastSimple,
]
