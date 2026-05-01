import { useEffect, useState } from 'react'
import type { Lesson } from './types/lesson'
import LessonPicker from './components/LessonPicker'
import LessonRenderer from './components/LessonRenderer'
import PageContainer from './components/common/PageContainer'

export default function App() {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null)

  /* Scroll to top when navigating between picker and lesson */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [activeLesson])

  return (
    <PageContainer>
      {activeLesson ? (
        <LessonRenderer
          lesson={activeLesson}
          onBack={() => setActiveLesson(null)}
        />
      ) : (
        <LessonPicker onSelectLesson={setActiveLesson} />
      )}
    </PageContainer>
  )
}
