import { useState } from 'react'
import type { CountryArticleSection as CountryArticleSectionType } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: CountryArticleSectionType
  isCompleted: boolean
  onComplete: (id: string) => void
}

export default function CountryArticleSection({
  section,
  isCompleted,
  onComplete,
}: Props) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.instruction}</p>

      {section.note && (
        <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
          <span className="font-bold">Lesson note: </span>
          {section.note}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {section.countries.map((country) => {
          const hasImageError = imageErrors[country.name]

          return (
            <article
              key={country.name}
              className="flex overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="bg-linear-to-br from-stone-100 via-orange-50/40 to-violet-50/30 p-3">
                  {hasImageError ? (
                    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl bg-white/70 text-center ring-1 ring-stone-200">
                      <span className="text-3xl font-black text-orange-500">
                        {country.name.slice(0, 1)}
                      </span>
                      <span className="mt-1 px-2 text-xs font-semibold text-slate-400">
                        Add {country.name} image
                      </span>
                    </div>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white/70 p-2 ring-1 ring-stone-200">
                      <img
                        src={assetUrl(country.imageSrc)}
                        alt={country.name}
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [country.name]: true,
                          }))
                        }
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-black text-slate-900">
                    {country.name}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {country.facts.map((fact) => (
                      <li
                        key={fact}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        <span className="leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => onComplete(section.id)}
        className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 active:scale-95"
      >
        Mark as read
      </button>

      {isCompleted && (
        <p className="rounded-xl bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
          Reading completed
        </p>
      )}
    </div>
  )
}
