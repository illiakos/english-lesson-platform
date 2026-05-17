export type SectionType =
  | 'hero'
  | 'wordlist'
  | 'grammar-tabs'
  | 'warm-up-questions'
  | 'vocabulary-match'
  | 'listening-task'
  | 'ranking-task'
  | 'sentence-builder'
  | 'company-match'
  | 'true-false-quiz'
  | 'grammar-practice'
  | 'phrasebox'
  | 'email-reading'
  | 'writing-task'
  | 'results-checklist'
  | 'vocabulary-categories'
  | 'picture-labeling'
  | 'fill-gaps'
  | 'quiz-select'
  | 'image-match'
  | 'dialogue-reading'
  | 'advice-cards'
  | 'sentence-match'
  | 'country-article'
  | 'picture-vocabulary'
  | 'dialogue-gap-fill'
  | 'error-correction'

export interface BaseSection {
  id: string
  type: SectionType
  title: string
  emoji?: string
}

export interface HeroSection extends BaseSection {
  type: 'hero'
  level: string
  subtitle: string
  imageSrc: string
  goals: string[]
  words: string[]
  functionalLanguage: string[]
}

export interface WordListSection extends BaseSection {
  type: 'wordlist'
  words: string[]
}

export interface GrammarTabsSection extends BaseSection {
  type: 'grammar-tabs'
  imageSrc?: string
  tabs: {
    label: string
    rules: string[]
    examples: string[]
    use?: string
  }[]
  highlights: string[]
}

export interface WarmUpQuestionsSection extends BaseSection {
  type: 'warm-up-questions'
  images: string[]
  questions: {
    question: string
    hint: string
  }[]
}

export interface VocabularyMatchSection extends BaseSection {
  type: 'vocabulary-match'
  imageSrc?: string
  items: {
    word: string
    definition: string
  }[]
}

export interface ListeningTaskSection extends BaseSection {
  type: 'listening-task'
  audioSrc: string
  note: string
  speakers: {
    id: string
    label: string
    answer: string
  }[]
  options: string[]
}

export interface RankingTaskSection extends BaseSection {
  type: 'ranking-task'
  prompt: string
  items: string[]
}

export interface SentenceBuilderSection extends BaseSection {
  type: 'sentence-builder'
  prompt: string
  sentences: {
    chunks: string[]
    correctOrder: string[]
  }[]
}

export interface CompanyMatchSection extends BaseSection {
  type: 'company-match'
  items: {
    company: string
    logo: string
    answer: string
  }[]
  options: string[]
}

export interface TrueFalseQuizSection extends BaseSection {
  type: 'true-false-quiz'
  statements: {
    statement: string
    answer: boolean
  }[]
}

export interface GrammarPracticeSection extends BaseSection {
  type: 'grammar-practice'
  /** Dropdown labels for Activity A. Defaults to Present Simple / Present Continuous. */
  activityATenseChoices?: string[]
  activityA: {
    sentence: string
    answer: string
  }[]
  activityB: {
    sentence: string
    answer: string
  }[]
  activityC: {
    sentence: string
    options: string[]
    answer: string
  }[]
}

export interface PhraseBoxSection extends BaseSection {
  type: 'phrasebox'
  cards: {
    image: string
    answer: string
  }[]
  options: string[]
}

export interface EmailReadingSection extends BaseSection {
  type: 'email-reading'
  email: {
    subject: string
    body: string[]
    closing: string[]
  }
  questions: {
    question: string
    sampleAnswer: string
  }[]
}

export interface WritingTaskSection extends BaseSection {
  type: 'writing-task'
  prompt: string
  imageSrc?: string
  wordBank?: string[]
  /** Numbered short-answer prompts (roleplay / multi-part writing). */
  prompts?: string[]
  starter?: string
  modelAnswer?: string
}

export interface ResultsChecklistSection extends BaseSection {
  type: 'results-checklist'
  imageSrc?: string
  checklist: string[]
}

// ── New section types ─────────────────────────────────────────────────────────

export interface VocabCategoriesSection extends BaseSection {
  type: 'vocabulary-categories'
  categories: {
    label: string
    color: 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'yellow'
    words: { word: string; definition: string }[]
  }[]
}

export interface PictureLabelingSection extends BaseSection {
  type: 'picture-labeling'
  instruction: string
  wordBank: string[]
  cards: { image: string; answer: string }[]
}

export interface FillGapsSection extends BaseSection {
  type: 'fill-gaps'
  instruction: string
  /** Optional reference words shown above the tasks. */
  wordBank?: string[]
  questions: {
    sentence: string
    hint: string
    answer: string
  }[]
}

export interface QuizSelectSection extends BaseSection {
  type: 'quiz-select'
  instruction: string
  imageSrc?: string
  /** Default options when a question omits `options`. */
  options?: string[]
  questions: {
    sentence: string
    answer: string
    /** If set, used for this question only instead of `section.options`. */
    options?: string[]
  }[]
  explanations?: { term: string; meaning: string }[]
}

export interface ImageMatchSection extends BaseSection {
  type: 'image-match'
  instruction: string
  pairs: {
    question: string
    image: string
    label: string
  }[]
}

export interface DialogueReadingSection extends BaseSection {
  type: 'dialogue-reading'
  imageSrc?: string
  characters: { name: string; colorClass: string }[]
  lines: { speaker: string; text: string }[]
  questions: { question: string; sampleAnswer: string }[]
}

export interface AdviceCardsSection extends BaseSection {
  type: 'advice-cards'
  functionalLanguage: string[]
  cards: { situation: string; sampleAnswer: string }[]
}

export interface SentenceMatchSection extends BaseSection {
  type: 'sentence-match'
  imageSrc?: string
  items: { problem: string; answer: string }[]
}

export interface CountryArticleSection extends BaseSection {
  type: 'country-article'
  instruction: string
  note?: string
  countries: {
    name: string
    imageSrc: string
    facts: string[]
  }[]
}

export interface PictureVocabularySection extends BaseSection {
  type: 'picture-vocabulary'
  imageSrc?: string
  instruction: string
  wordBank: string[]
  cards: { image?: string; answer: string; label: string }[]
  gapInstruction: string
  gapWordBank: string[]
  gaps: {
    sentence: string
    answer: string
  }[]
}

export interface DialogueGapFillSection extends BaseSection {
  type: 'dialogue-gap-fill'
  imageSrc?: string
  instruction: string
  characters: { name: string; colorClass: string }[]
  wordBank: string[]
  lines: { speaker: string; text: string }[]
  answers: string[]
}

export interface ErrorCorrectionSection extends BaseSection {
  type: 'error-correction'
  instruction: string
  imageSrc?: string
  example: {
    sentence: string
    correction: string
  }
  tasks: {
    sentence: string
    answer: string
  }[]
}

export type LessonSection =
  | HeroSection
  | WordListSection
  | GrammarTabsSection
  | WarmUpQuestionsSection
  | VocabularyMatchSection
  | ListeningTaskSection
  | RankingTaskSection
  | SentenceBuilderSection
  | CompanyMatchSection
  | TrueFalseQuizSection
  | GrammarPracticeSection
  | PhraseBoxSection
  | EmailReadingSection
  | WritingTaskSection
  | ResultsChecklistSection
  | VocabCategoriesSection
  | PictureLabelingSection
  | FillGapsSection
  | QuizSelectSection
  | ImageMatchSection
  | DialogueReadingSection
  | AdviceCardsSection
  | SentenceMatchSection
  | CountryArticleSection
  | PictureVocabularySection
  | DialogueGapFillSection
  | ErrorCorrectionSection

export interface Lesson {
  id: string
  title: string
  level: string
  topic?: string
  description?: string
  coverImage?: string
  sections: LessonSection[]
}
