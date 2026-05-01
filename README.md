# English Lesson Platform

Interactive English lesson engine built with Vite + React + TypeScript + TailwindCSS.

Lessons are defined as typed config files and rendered dynamically by `LessonRenderer`. Students can pick a lesson from a home screen, and progress is saved automatically in the browser.

---

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
├── App.tsx                        # Root — switches between picker and renderer
├── lessons/
│   ├── index.ts                   # ← register all lessons here
│   ├── i-love-what-i-do.ts
│   └── what-to-wear.ts
├── components/
│   ├── LessonPicker.tsx           # Home screen (lesson cards)
│   ├── LessonRenderer.tsx         # Renders one lesson section by section
│   ├── common/
│   │   ├── Badge.tsx              # LevelBadge, StatusBadge
│   │   └── ImageWithFallback.tsx  # Image with gradient placeholder fallback
│   └── sections/                  # One file per section type
│       ├── HeroSection.tsx
│       ├── VocabularyMatch.tsx
│       ├── GrammarTabs.tsx
│       └── ...
├── types/
│   └── lesson.ts                  # All TypeScript types
└── utils/
    ├── assetUrl.ts                # Resolves asset paths for GitHub Pages
    └── progressStorage.ts         # localStorage helpers for lesson progress
```

---

## How to add a new lesson

### 1. Create the lesson file

```ts
// src/lessons/my-new-lesson.ts
import type { Lesson } from '../types/lesson'

const lesson: Lesson = {
  id: 'my-new-lesson',          // unique — used as localStorage key
  title: 'My New Lesson',
  level: 'B1',
  topic: 'Travel and transport',
  description: 'Short description shown on the lesson card.',
  coverImage: '/assets/my-new-lesson/hero.jpg',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'My New Lesson',
      emoji: '✈️',
      level: 'B1',
      subtitle: 'Subtitle shown on the hero image.',
      imageSrc: '/assets/my-new-lesson/hero.jpg',
      goals: ['Goal 1', 'Goal 2'],
      words: ['ticket', 'platform', 'departure'],
      functionalLanguage: ['The train leaves at 9.', 'Can I see your ticket?'],
    },
    // ... more sections
  ],
}

export default lesson
```

### 2. Register the lesson

```ts
// src/lessons/index.ts
import myNewLesson from './my-new-lesson'

export const allLessons: Lesson[] = [
  iLoveWhatIDo,
  whatToWear,
  myNewLesson,   // ← add here
]
```

The lesson will automatically appear in the lesson picker.

### 3. Add images

Put images in `public/assets/my-new-lesson/`:

```
public/
└── assets/
    └── my-new-lesson/
        ├── hero.jpg
        ├── grammar.jpg
        └── ...
```

Reference them in the lesson config as `/assets/my-new-lesson/hero.jpg`.  
If an image is missing, a polished gradient placeholder is shown automatically.

---

## Available section types

| type | Description |
|---|---|
| `hero` | Lesson intro: image, goals, word bank, functional language |
| `wordlist` | Simple word list display |
| `vocabulary-categories` | Clickable word chips grouped by category |
| `vocabulary-match` | Match words to definitions (dropdown) |
| `grammar-tabs` | Tabbed grammar reference with rules and examples |
| `warm-up-questions` | Picture-based discussion questions with hints |
| `picture-labeling` | Label photos from a word bank |
| `fill-gaps` | Complete sentences with inline text inputs |
| `quiz-select` | Choose correct answer from dropdown (in-sentence or below) |
| `sentence-builder` | Arrange word chunks into correct sentence |
| `image-match` | Match questions to numbered photos |
| `dialogue-reading` | Chat-bubble dialogue with comprehension questions |
| `writing-task` | Free-writing with word bank, starter, model answer |
| `advice-cards` | Situation cards with free-text advice writing |
| `listening-task` | Audio player with speaker identification activity |
| `grammar-practice` | Three-part grammar practice (classify / fill / choose) |
| `ranking-task` | Rank items by personal preference |
| `true-false-quiz` | True or False statements |
| `company-match` | Match company names to categories |
| `phrasebox` | Match photos to phrases |
| `email-reading` | Read an email and answer comprehension questions |
| `results-checklist` | Final progress summary with checklist |

---

## How progress works

- Progress is stored in **localStorage** per lesson, using the key `lesson-progress-{lesson.id}`.
- When a student completes an interactive section (checks answers, marks as done, etc.), the section ID is saved immediately.
- Progress is restored after page reload.
- Non-interactive sections (`hero`, `wordlist`, `grammar-tabs`, `vocabulary-categories`, `results-checklist`) do not count toward progress.
- Students can reset progress per lesson from the lesson card or the "Reset progress" link inside the lesson.

Helper functions are in `src/utils/progressStorage.ts`:

```ts
getLessonProgress(lessonId)            // → string[]
saveLessonProgress(lessonId, ids)      // → void
clearLessonProgress(lessonId)          // → void
getLessonProgressPercent(lesson)       // → 0–100
getLessonTrackableCount(lesson)        // → number
```

---

## Level badge colors

| Level | Color |
|---|---|
| A1, A2, A1/A2 | Green |
| B1 | Orange |
| B2 | Red |
| C1, C2 | Purple |

---

## Deploy to GitHub Pages

The `vite.config.ts` already has `base: '/english-lesson-platform/'` set.

```bash
npm run deploy
```

This runs `npm run build` then `gh-pages -d dist`.

Make sure the `base` in `vite.config.ts` matches your GitHub repository name:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react(), tailwindcss()],
})
```

Images in `public/assets/` are automatically included in the build and served correctly at the base path.

---

## Notes

- No routing library is used — navigation between picker and lesson is handled with a simple `useState` in `App.tsx`.
- All components are strongly typed — no `any`.
- The platform is mobile-first and responsive.
