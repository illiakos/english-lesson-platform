import type { Lesson } from '../types/lesson'

const lesson: Lesson = {
  id: 'present-perfect-vs-past-simple',
  title: 'I love what I do',
  level: 'A2/B1',
  topic: 'Achievements and success',
  description: 'Discover Steve Jobs\'s story, explore vocabulary about success, and master Present Perfect vs Past Simple.',
  coverImage: '/assets/present-perfect-vs-past-simple/hero.png',
  sections: [
    // ── 1. Hero ──────────────────────────────────────────────────────────────
    {
      id: 'hero',
      type: 'hero',
      title: 'Welcome to today\'s lesson',
      emoji: '🦒',
      level: 'A2/B1',
      subtitle: 'Steve Jobs, success vocabulary, and Present Perfect vs Past Simple.',
      imageSrc: '/assets/present-perfect-vs-past-simple/hero.png',
      goals: [
        'find out some facts about Steve Jobs',
        'talk about achieving success',
        'practise Present Perfect vs Past Simple',
      ],
      words: [
        'co-founder',
        'former',
        'shareholder',
        'attend',
        'backpack',
        'persuade',
        'found',
        'create',
        'develop',
        'digital',
        'cutting-edge (products)',
        'brand',
        'considerable',
        'success',
      ],
      functionalLanguage: [
        'He became interested in computers when he was a teenager.',
        'He saved enough money to backpack around India.',
        'His attention to design, function and style won him millions of fans.',
      ],
    },

    // ── 2. Wordlist ───────────────────────────────────────────────────────────
    {
      id: 'wordlist',
      type: 'wordlist',
      title: 'Wordlist',
      emoji: '🧙‍♂️',
      words: [
        'co-founder',
        'former',
        'shareholder',
        'attend',
        'backpack',
        'persuade',
        'found',
        'create',
        'develop',
        'digital',
        'cutting-edge (products)',
        'brand',
        'considerable',
        'success',
      ],
    },

    // ── 3. Grammar tabs — Present Perfect vs Past Simple ─────────────────────
    {
      id: 'grammar-tabs',
      type: 'grammar-tabs',
      title: 'Present Perfect vs Past Simple',
      emoji: '📋',
      imageSrc: '/assets/present-perfect-vs-past-simple/grammar.png',
      tabs: [
        {
          label: 'Past Simple',
          use: 'Use for completed actions at a specific point in the past (yesterday, in 1976, last year, ago).',
          rules: [
            'Positive: S + V-ed / irregular form',
            'Negative: S + did not (didn\'t) + V',
            'Question: Did + S + V?',
          ],
          examples: [
            'Jobs and Wozniak founded Apple in 1976.',
            'He didn\'t go to school yesterday.',
            'Did you visit Apple HQ last year?',
          ],
        },
        {
          label: 'Present Perfect',
          use: 'Use for past experiences or actions with present relevance. Key words: ever, never, just, already, yet, since, for.',
          rules: [
            'Positive: S + have/has + past participle',
            'Negative: S + have/has + not + past participle',
            'Question: Have/Has + S + past participle?',
          ],
          examples: [
            'Apple has become one of the most powerful brands in history.',
            'He has never forgotten his passion for design.',
            'Have you ever visited the Apple headquarters?',
          ],
        },
      ],
      highlights: ['have/has', 'past participle', 'did', 'didn\'t', 'ever', 'never', 'just', 'already', 'yet', 'since', 'for'],
    },

    // ── 4. Image match — names with photos ───────────────────────────────────
    {
      id: 'image-match',
      type: 'image-match',
      title: 'Match the names with the photos',
      emoji: '🧩',
      instruction: 'Match the correct name to each photo.',
      pairs: [
        {
          question: 'Mark Zuckerberg',
          image: '/assets/present-perfect-vs-past-simple/mark-zuckerberg.png',
          label: 'Mark Zuckerberg',
        },
        {
          question: 'Steve Jobs',
          image: '/assets/present-perfect-vs-past-simple/steve-jobs.png',
          label: 'Steve Jobs',
        },
        {
          question: 'Elon Musk',
          image: '/assets/present-perfect-vs-past-simple/elon-musk.png',
          label: 'Elon Musk',
        },
      ],
    },

    // ── 5. Vocabulary match — definitions ────────────────────────────────────
    {
      id: 'vocabulary-match',
      type: 'vocabulary-match',
      title: 'Match the words with their definitions',
      emoji: '✅',
      items: [
        { word: 'CEO', definition: 'Chief Executive Officer.' },
        { word: 'Shareholder', definition: 'the owner of at least one share of a company\'s stock.' },
        { word: 'Corporate leader', definition: 'a manager who runs a company.' },
        { word: 'Technician', definition: 'a worker in the field of technology.' },
        { word: 'Major player', definition: 'an important and successful company.' },
        { word: 'Powerful brand', definition: 'a very successful and influential brand.' },
      ],
    },

    // ── 6. Sentence builder — word order ─────────────────────────────────────
    {
      id: 'sentence-builder',
      type: 'sentence-builder',
      title: 'Put the words in the correct order',
      emoji: '🦒',
      prompt: 'Arrange the word chunks to form correct sentences.',
      sentences: [
        {
          chunks: ['of Apple Inc', 'Steve Jobs', 'and CEO', 'was the co-founder'],
          correctOrder: ['Steve Jobs', 'was the co-founder', 'of Apple Inc', 'and CEO'],
        },
        {
          chunks: ['He was', 'in Walt Disney', 'shareholder', 'the largest individual'],
          correctOrder: ['He was', 'the largest individual', 'shareholder', 'in Walt Disney'],
        },
        {
          chunks: ['corporate leader', 'He was', 'a much-respected'],
          correctOrder: ['He was', 'a much-respected', 'corporate leader'],
        },
        {
          chunks: ['and Wozniak', 'founded', 'Jobs', 'Apple in 1976'],
          correctOrder: ['Jobs', 'and Wozniak', 'founded', 'Apple in 1976'],
        },
        {
          chunks: ['and sell it', 'to make a computer', 'persuaded', 'Wozniak', 'Jobs'],
          correctOrder: ['Jobs', 'persuaded', 'Wozniak', 'to make a computer', 'and sell it'],
        },
        {
          chunks: ['to find', 'You\'ve got', 'what you love'],
          correctOrder: ['You\'ve got', 'to find', 'what you love'],
        },
      ],
    },

    // ── 7. Fill gaps — Steve Jobs biography ──────────────────────────────────
    {
      id: 'fill-gaps',
      type: 'fill-gaps',
      title: 'Read the text and fill in the gaps',
      emoji: '🧩',
      instruction: 'Use the words from the box to complete the text about Steve Jobs.',
      questions: [
        {
          sentence: 'Steve Jobs was the ___ and CEO of Apple Inc. and former CEO of Pixar Animation Studios.',
          hint: 'co-founder',
          answer: 'co-founder',
        },
        {
          sentence: 'He was the largest individual ___ in Walt Disney.',
          hint: 'shareholder',
          answer: 'shareholder',
        },
        {
          sentence: 'He was a much-respected corporate ___ whose management style is studied worldwide.',
          hint: 'leader',
          answer: 'leader',
        },
        {
          sentence: 'He saved enough money to ___ around India and then returned to Atari.',
          hint: 'backpack',
          answer: 'backpack',
        },
        {
          sentence: 'Jobs ___ Wozniak to make a computer and sell it.',
          hint: 'persuaded',
          answer: 'persuaded',
        },
        {
          sentence: 'Together, they ___ the Mac — the first small computer with a user-friendly interface.',
          hint: 'developed',
          answer: 'developed',
        },
        {
          sentence: 'Jobs guided Apple to be a major ___ in the digital revolution.',
          hint: 'player',
          answer: 'player',
        },
        {
          sentence: 'The introduction of the iMac and other ___ products made Apple a powerful brand.',
          hint: 'cutting-edge',
          answer: 'cutting-edge',
        },
      ],
    },

    // ── 8. Vocabulary match — job title descriptions ──────────────────────────
    {
      id: 'job-titles-match',
      type: 'vocabulary-match',
      title: 'Match the descriptions with the job titles',
      emoji: '🧩',
      items: [
        { word: 'Fashion designers', definition: 'Their job requires creativity.' },
        { word: 'Personal trainers', definition: 'They help people to get fit.' },
        { word: 'Rescue workers', definition: 'They can help you in case of a hurricane or flood.' },
        { word: 'Sales reps', definition: 'They travel to different places to sell their company\'s products.' },
        { word: 'Foreign correspondents', definition: 'They report the news from other countries.' },
        { word: 'Sales assistants', definition: 'They work in a store.' },
      ],
    },

    // ── 9. Dialogue reading — Michelle and Yuki ──────────────────────────────
    {
      id: 'dialogue-reading',
      type: 'dialogue-reading',
      title: 'Complete the dialogue with the correct form of the verbs',
      emoji: '💬',
      imageSrc: '/assets/present-perfect-vs-past-simple/dialogue.png',
      characters: [
        { name: 'Michelle', colorClass: 'text-orange-600' },
        { name: 'Yuki', colorClass: 'text-purple-600' },
      ],
      lines: [
        { speaker: 'Michelle', text: 'I didn\'t have (not/have) a nice day yesterday.' },
        { speaker: 'Yuki', text: 'Really? I had (have) a wonderful day!' },
        { speaker: 'Michelle', text: 'The weather wasn\'t (not/be) good.' },
        { speaker: 'Yuki', text: 'It was (be) rainy but I liked (like) it.' },
        { speaker: 'Michelle', text: 'I didn\'t meet (not/meet) Amalia because she got (get) stuck in a traffic jam.' },
        { speaker: 'Yuki', text: 'I met (meet) Stan and Billy.' },
        { speaker: 'Michelle', text: 'I didn\'t eat (not/eat) out because I wasn\'t (not/be) hungry.' },
        { speaker: 'Yuki', text: 'We got (get) a takeaway pizza and went (go) to my flat.' },
        { speaker: 'Michelle', text: 'I didn\'t have (not/have) any fun.' },
        { speaker: 'Yuki', text: 'We had (have) a great time together!' },
      ],
      questions: [
        {
          question: 'How was Michelle\'s day?',
          sampleAnswer: 'It was not a nice day. The weather was bad and she didn\'t eat out.',
        },
        {
          question: 'How was Yuki\'s day?',
          sampleAnswer: 'She had a wonderful day. She met friends and they got a takeaway pizza.',
        },
        {
          question: 'Why didn\'t Michelle meet Amalia?',
          sampleAnswer: 'Because Amalia got stuck in a traffic jam.',
        },
      ],
    },

    // ── 10. Grammar practice — Present Perfect vs Past Simple ────────────────
    {
      id: 'grammar-practice',
      type: 'grammar-practice',
      title: 'Grammar practice: Present Perfect vs Past Simple',
      emoji: '🧙‍♂️',
      activityATenseChoices: ['Present Perfect', 'Past Simple'],
      activityA: [
        { sentence: 'Jobs and Wozniak founded Apple in 1976.', answer: 'Past Simple' },
        { sentence: 'Apple has become one of the most powerful brands in the world.', answer: 'Present Perfect' },
        { sentence: 'Have you ever used an Apple product?', answer: 'Present Perfect' },
        { sentence: 'He saved enough money and then travelled to India.', answer: 'Past Simple' },
        { sentence: 'The company has just released a new iPhone.', answer: 'Present Perfect' },
        { sentence: 'Jobs died in October 2011, at the age of 56.', answer: 'Past Simple' },
        { sentence: 'She has worked at Apple since 2015.', answer: 'Present Perfect' },
        { sentence: 'Did he attend lectures at Hewlett Packard?', answer: 'Past Simple' },
      ],
      activityB: [
        { sentence: 'Jobs ___ (found) Apple in 1976.', answer: 'founded' },
        { sentence: 'Apple ___ (become) a powerful brand since then.', answer: 'has become' },
        { sentence: 'He ___ (never / forget) his passion for design.', answer: 'has never forgotten' },
        { sentence: 'They ___ (develop) the Mac together in the 1970s.', answer: 'developed' },
        { sentence: 'The company ___ (already / launch) three new products this year.', answer: 'has already launched' },
        { sentence: 'He ___ (save) enough money and then backpacked around India.', answer: 'saved' },
        { sentence: 'I ___ (never / visit) the Apple headquarters. Have you?', answer: 'have never visited' },
        { sentence: 'She ___ (work) at Pixar for ten years before she left.', answer: 'worked' },
      ],
      activityC: [
        { sentence: 'I [saw / have seen] that film yesterday.', options: ['saw', 'have seen'], answer: 'saw' },
        { sentence: 'She [worked / has worked] at Apple since 2010.', options: ['worked', 'has worked'], answer: 'has worked' },
        { sentence: '[Did you ever visit / Have you ever visited] the Apple HQ?', options: ['Did you ever visit', 'Have you ever visited'], answer: 'Have you ever visited' },
        { sentence: 'Jobs [founded / has founded] Apple in 1976.', options: ['founded', 'has founded'], answer: 'founded' },
        { sentence: 'The company [launched / has just launched] a new product this morning.', options: ['launched', 'has just launched'], answer: 'has just launched' },
        { sentence: 'He [became / has become] interested in computers when he was a teenager.', options: ['became', 'has become'], answer: 'became' },
      ],
    },

    // ── 11. Quiz select — choose the correct form ─────────────────────────────
    {
      id: 'quiz-select',
      type: 'quiz-select',
      title: 'Choose the correct option',
      emoji: '🎓',
      instruction: 'Example: He created/creates Oscar-winning movies — He created Oscar-winning movies.',
      options: ['became', 'has become', 'saved', 'has saved', 'founded', 'has founded', 'went', 'have gone', 'Did', 'Has'],
      questions: [
        {
          sentence: 'He [became / has become] interested in computers when he was a teenager.',
          answer: 'became',
        },
        {
          sentence: 'He [saved / has saved] enough money to backpack around India.',
          answer: 'saved',
        },
        {
          sentence: 'Jobs and Wozniak [founded / have founded] Apple in 1976.',
          answer: 'founded',
        },
        {
          sentence: 'We [went / have gone] out with my best friend yesterday.',
          answer: 'went',
        },
        {
          sentence: '[Did / Has] you play football last Friday?',
          answer: 'Did',
        },
      ],
      explanations: [
        { term: 'Past Simple', meaning: 'Use for completed actions at a specific time in the past.' },
        { term: 'Present Perfect', meaning: 'Use for past experiences or actions connected to the present.' },
      ],
    },

    // ── 12. True / False ─────────────────────────────────────────────────────
    {
      id: 'true-false',
      type: 'true-false-quiz',
      title: 'True or False about Steve Jobs',
      emoji: '✅',
      statements: [
        { statement: 'Steve Jobs was born in San Francisco in 1955.', answer: true },
        { statement: 'Jobs got a job at Hewlett Packard in 1974.', answer: false },
        { statement: 'Jobs and Wozniak founded Apple in 1976.', answer: true },
        { statement: 'Apple has never been a major brand in the digital revolution.', answer: false },
        { statement: 'Jobs also created Oscar-winning movies such as "Toy Story" and "Finding Nemo".', answer: true },
        { statement: 'Jobs died in 2009.', answer: false },
        { statement: 'Jobs has become an icon of innovation and design.', answer: true },
      ],
    },

    // ── 13. Ranking — qualities of a successful person ────────────────────────
    {
      id: 'ranking',
      type: 'ranking-task',
      title: 'What qualities make a person successful?',
      emoji: '✅',
      prompt: 'Rank these qualities from 1 (most important) to 6.',
      items: [
        'passion for what you do',
        'hard work and persistence',
        'creativity and innovation',
        'a strong team around you',
        'willingness to take risks',
        'continuous learning',
      ],
    },

    // ── 14. Writing task ──────────────────────────────────────────────────────
    {
      id: 'writing-task',
      type: 'writing-task',
      title: 'Imagine you could talk with Steve Jobs',
      emoji: '✍️',
      prompt: 'Imagine that you have a chance to talk with Steve Jobs. Write 5 questions you would ask him. Use Present Perfect and Past Simple in your questions.',
      wordBank: [
        'Have you ever…?',
        'Did you…?',
        'Why did you…?',
        'How long have you…?',
        'What have you learned from…?',
      ],
      starter: 'Example: Have you ever regretted leaving Apple? / Did you always know you would be successful?',
    },

    // ── 15. Results checklist ─────────────────────────────────────────────────
    {
      id: 'results',
      type: 'results-checklist',
      title: 'Check your results!',
      emoji: '🦒',
      checklist: [
        'talk about Steve Jobs\'s life and career',
        'retell stories using Present Perfect and Past Simple',
        'use Present Perfect correctly',
      ],
    },
  ],
}

export default lesson
