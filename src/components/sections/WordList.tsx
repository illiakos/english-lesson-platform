import type { WordListSection } from '../../types/lesson'

interface WordListProps {
  section: WordListSection
}

export default function WordList({ section }: WordListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {section.words.map((word) => (
          <div
            key={word}
            className="group relative flex flex-col items-center justify-center gap-1 rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-orange-300 cursor-default"
          >
            <span className="text-base font-bold capitalize text-slate-800">{word}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
