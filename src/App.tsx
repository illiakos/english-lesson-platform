import LessonRenderer from './components/LessonRenderer'
import lesson from './lessons/i-love-what-i-do'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-4 md:p-8">
      <LessonRenderer lesson={lesson} />
    </main>
  )
}

export default App
