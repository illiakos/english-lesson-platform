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
  tabs: {
    label: string
    rules: string[]
    examples: string[]
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
  activityA: {
    sentence: string
    answer: 'Present Simple' | 'Present Continuous'
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
}

export interface ResultsChecklistSection extends BaseSection {
  type: 'results-checklist'
  checklist: string[]
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

export interface Lesson {
  title: string
  level: string
  sections: LessonSection[]
}
