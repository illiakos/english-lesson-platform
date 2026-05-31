import type { Lesson } from '../types/lesson'

const asset = (file: string) => `/assets/personality-character-traits/${file}`

const lesson: Lesson = {
  id: 'personality-character-traits',
  title: 'Words Which Describe Personality',
  level: 'B1',
  topic: 'Character and personality',
  description:
    'Learn adjectives that describe character and personality, read a text about people, then practise comparatives and superlatives and the Passive Voice.',
  coverImage: asset('hero.jpg'),
  sections: [
    // ── 1. Hero ──────────────────────────────────────────────────────────────
    {
      id: 'hero',
      type: 'hero',
      title: 'Words Which Describe Personality',
      emoji: '🧑‍🤝‍🧑',
      level: 'B1',
      subtitle:
        'Describe people and character traits, then practise comparatives, superlatives and the Passive Voice.',
      imageSrc: asset('hero.jpg'),
      goals: [
        'Learn adjectives to describe character and personality',
        'Read and talk about people using personality words',
        'Compare people with comparative and superlative adjectives',
        'Understand and use the Passive Voice in basic tenses',
      ],
      words: [
        'ambitious',
        'caring',
        'considerate',
        'creative',
        'enthusiastic',
        'sociable',
        'stubborn',
        'arrogant',
        'bossy',
        'impatient',
        'shy',
        'sensitive',
        'talkative',
        'determined',
        'rude',
        'lazy',
      ],
      functionalLanguage: [
        'She is more ambitious than her brother.',
        'He is the most creative person in the class.',
        'Tom is friendlier than Jack.',
        'This book was written by a famous author.',
        'The work is done every day.',
        "He's a bit shy, but he's very thoughtful.",
      ],
    },

    // ── 2. The table of words (vocabulary categories) ────────────────────────
    {
      id: 'personality-table',
      type: 'vocabulary-categories',
      title: 'Adjectives to describe character and personality',
      emoji: '🗂️',
      categories: [
        {
          label: 'Positive traits',
          color: 'green',
          words: [
            { word: 'ambitious', definition: 'wanting to succeed and achieve a lot' },
            { word: 'caring', definition: 'kind and wanting to help people' },
            { word: 'considerate', definition: "thinking about other people's feelings" },
            { word: 'creative', definition: 'good at making or designing new things' },
            { word: 'enthusiastic', definition: 'showing a lot of interest and excitement' },
            { word: 'charming', definition: 'pleasant and attractive to other people' },
            { word: 'sociable', definition: 'friendly and enjoying being with people' },
            { word: 'determined', definition: 'not giving up until you reach your goal' },
            { word: 'sincere', definition: 'honest and saying what you really feel' },
            { word: 'thoughtful', definition: 'kind and thinking about what others need' },
          ],
        },
        {
          label: 'Negative traits',
          color: 'orange',
          words: [
            { word: 'aggressive', definition: 'angry and ready to attack or argue' },
            { word: 'arrogant', definition: 'thinking you are better than everyone else' },
            { word: 'bossy', definition: 'always telling other people what to do' },
            { word: 'careless', definition: 'not paying attention; making mistakes' },
            { word: 'stubborn', definition: 'refusing to change your mind or ideas' },
            { word: 'impatient', definition: 'not able to wait calmly' },
            { word: 'bad-tempered', definition: 'getting angry very easily' },
            { word: 'rude', definition: 'not polite to other people' },
            { word: 'lazy', definition: 'not wanting to work or make an effort' },
            { word: 'mean', definition: 'unkind and not wanting to share' },
          ],
        },
        {
          label: 'Neutral / mixed traits',
          color: 'blue',
          words: [
            { word: 'shy', definition: 'nervous about meeting or talking to people' },
            { word: 'sensitive', definition: "easily affected by feelings; aware of others' feelings" },
            { word: 'talkative', definition: 'talking a lot' },
            { word: 'cautious', definition: 'careful, so that you avoid mistakes' },
            { word: 'reserved', definition: 'quiet and not showing feelings easily' },
            { word: 'curious', definition: 'wanting to know or learn things' },
            { word: 'introverted', definition: 'quiet and enjoying time alone' },
            { word: 'extroverted', definition: 'outgoing and lively' },
          ],
        },
      ],
    },

    // ── 3. Exercise 1 — match word and definition ────────────────────────────
    {
      id: 'vocab-match',
      type: 'vocabulary-match',
      title: 'Exercise 1: Match the words with their definitions',
      emoji: '✅',
      items: [
        { word: 'ambitious', definition: 'wanting to succeed and achieve a lot' },
        { word: 'stubborn', definition: 'refusing to change your mind' },
        { word: 'considerate', definition: "thinking about other people's feelings" },
        { word: 'talkative', definition: 'talking a lot' },
        { word: 'lazy', definition: 'not wanting to work or make an effort' },
        { word: 'shy', definition: 'nervous about meeting or talking to people' },
      ],
    },

    // ── 4. Exercise 2 — fill the gaps with adjectives ────────────────────────
    {
      id: 'vocab-fill-gaps',
      type: 'fill-gaps',
      title: 'Exercise 2: Complete the sentences',
      emoji: '🧩',
      instruction: 'Use the adjectives from the box to complete the sentences.',
      wordBank: ['bossy', 'creative', 'rude', 'caring', 'impatient', 'arrogant'],
      questions: [
        {
          sentence: 'My sister loves painting and writing songs. She is very ___.',
          hint: 'good at making new things',
          answer: 'creative',
        },
        {
          sentence: "He always tells everyone what to do. He's so ___!",
          hint: 'telling people what to do',
          answer: 'bossy',
        },
        {
          sentence: 'A good nurse is patient and ___ towards the patients.',
          hint: 'kind and helpful',
          answer: 'caring',
        },
        {
          sentence: "She never says 'please' or 'thank you'. That's really ___.",
          hint: 'not polite',
          answer: 'rude',
        },
        {
          sentence: "He hates waiting and gets angry in queues. He's very ___.",
          hint: 'cannot wait calmly',
          answer: 'impatient',
        },
        {
          sentence: 'He thinks he is better than everyone else. He is so ___.',
          hint: 'thinks he is the best',
          answer: 'arrogant',
        },
      ],
    },

    // ── 5. Exercise 3 — choose the correct adjective ─────────────────────────
    {
      id: 'vocab-quiz',
      type: 'quiz-select',
      title: 'Exercise 3: Choose the correct adjective',
      emoji: '🎯',
      instruction: 'Read each description and choose the adjective that fits best.',
      questions: [
        {
          sentence: 'Someone who enjoys parties and loves meeting new people is ___.',
          options: ['sociable', 'shy'],
          answer: 'sociable',
        },
        {
          sentence: "Someone who keeps trying and never gives up is ___.",
          options: ['lazy', 'determined'],
          answer: 'determined',
        },
        {
          sentence: 'Someone who never tells lies and means what they say is ___.',
          options: ['sincere', 'dishonest'],
          answer: 'sincere',
        },
        {
          sentence: 'Someone who is careful and avoids taking risks is ___.',
          options: ['cautious', 'careless'],
          answer: 'cautious',
        },
        {
          sentence: 'Someone who wants to learn about everything is ___.',
          options: ['curious', 'rude'],
          answer: 'curious',
        },
        {
          sentence: 'Someone who gets upset very easily is ___.',
          options: ['sensitive', 'bossy'],
          answer: 'sensitive',
        },
      ],
    },

    // ── 6. Exercise 4 — match the situation to the adjective ─────────────────
    {
      id: 'vocab-situation-match',
      type: 'sentence-match',
      title: 'Exercise 4: Which adjective describes the person?',
      emoji: '🔗',
      items: [
        { problem: 'Mia always shares her things and helps her friends.', answer: 'caring' },
        { problem: 'Leo refuses to listen and never changes his mind.', answer: 'stubborn' },
        { problem: 'Anna talks from morning to night and never stops.', answer: 'talkative' },
        { problem: 'Sam wants to be a CEO and works very hard for it.', answer: 'ambitious' },
        { problem: 'Tom does nothing all day and avoids work.', answer: 'lazy' },
        { problem: 'Eva remembers your birthday and asks how you feel.', answer: 'thoughtful' },
      ],
    },

    // ── 7. Exercise 5 — true / false meanings ────────────────────────────────
    {
      id: 'vocab-true-false',
      type: 'true-false-quiz',
      title: 'Exercise 5: True or False?',
      emoji: '🤔',
      statements: [
        { statement: 'An "enthusiastic" person shows a lot of interest and excitement.', answer: true },
        { statement: 'A "considerate" person never thinks about other people.', answer: false },
        { statement: 'An "extroverted" person is outgoing and lively.', answer: true },
        { statement: 'A "reserved" person talks a lot and shows all their feelings.', answer: false },
        { statement: 'A "bad-tempered" person gets angry very easily.', answer: true },
        { statement: 'A "creative" person is good at making new things.', answer: true },
        { statement: 'An "arrogant" person is humble and modest.', answer: false },
      ],
    },

    // ── 8. Exercise 6 — opposites ────────────────────────────────────────────
    {
      id: 'vocab-opposites',
      type: 'quiz-select',
      title: 'Exercise 6: Find the opposite',
      emoji: '↔️',
      instruction: 'Choose the adjective that is the opposite of the word in bold.',
      questions: [
        { sentence: 'The opposite of GENEROUS is ___.', options: ['mean', 'caring'], answer: 'mean' },
        { sentence: 'The opposite of POLITE is ___.', options: ['rude', 'sincere'], answer: 'rude' },
        { sentence: 'The opposite of HARD-WORKING is ___.', options: ['lazy', 'determined'], answer: 'lazy' },
        { sentence: 'The opposite of EXTROVERTED is ___.', options: ['introverted', 'sociable'], answer: 'introverted' },
        { sentence: 'The opposite of MODEST is ___.', options: ['arrogant', 'shy'], answer: 'arrogant' },
        { sentence: 'The opposite of PATIENT is ___.', options: ['impatient', 'cautious'], answer: 'impatient' },
      ],
    },

    // ── 9. Reading text using the new words ──────────────────────────────────
    {
      id: 'reading-text',
      type: 'email-reading',
      title: 'Reading: My family and friends',
      emoji: '📖',
      email: {
        subject: 'A message from Olivia: the people in my life',
        body: [
          'Hi! You asked me to describe the people I spend most of my time with, so here they are.',
          'My older sister Emma is the most ambitious person I know. She is determined and never gives up, and she is also very creative — she paints and writes songs in her free time. Sometimes she can be a little bossy and impatient, but she is always caring when I have a problem.',
          'My best friend Daniel is completely different. He is quiet and quite shy with new people, and he is more reserved than my sister. However, once you know him, he is really sociable and talkative. He is the most considerate friend I have ever had, and he is never rude or arrogant.',
          'My younger brother Max is energetic and curious about everything, but he can be careless and a bit lazy with his homework! He is also very sensitive, so I try to be thoughtful when I talk to him.',
        ],
        closing: ['Write back soon and tell me about your family!', 'Olivia'],
      },
      questions: [
        {
          question: 'How does Olivia describe her sister Emma?',
          sampleAnswer:
            'Emma is the most ambitious person she knows. She is determined and creative, but sometimes bossy and impatient. She is always caring.',
        },
        {
          question: 'Why is Daniel different from Emma?',
          sampleAnswer:
            'Daniel is quiet and shy with new people and more reserved than Emma, but once you know him he is sociable, talkative and very considerate.',
        },
        {
          question: 'What are the good and bad points of her brother Max?',
          sampleAnswer:
            'Max is energetic and curious, but he can be careless and a bit lazy with his homework. He is also very sensitive.',
        },
        {
          question: 'Which person are you most similar to, and why?',
          sampleAnswer:
            'Students answer freely, for example: I am most similar to Daniel because I am shy with new people but talkative with friends.',
        },
      ],
    },

    // ── 10. Grammar — Comparatives & Superlatives ────────────────────────────
    {
      id: 'grammar-comparatives',
      type: 'grammar-tabs',
      title: 'Comparing people: comparatives & superlatives',
      emoji: '📊',
      imageSrc: asset('grammar-comparatives.jpg'),
      tabs: [
        {
          label: 'Short adjectives',
          use: 'One-syllable adjectives (and two-syllable adjectives ending in -y).',
          rules: [
            'Comparative: adjective + -er + than (old → older than).',
            'Superlative: the + adjective + -est (old → the oldest).',
            'Adjectives ending in -y: change y to i (happy → happier → the happiest).',
            'Double the final consonant after one vowel (big → bigger → the biggest).',
          ],
          examples: [
            'Tom is taller than Jack.',
            'Anna is friendlier than her sister.',
            'This is the biggest room in the house.',
          ],
        },
        {
          label: 'Long adjectives',
          use: 'Adjectives with two or more syllables (ambitious, creative, considerate).',
          rules: [
            'Comparative: more + adjective + than.',
            'Superlative: the most + adjective.',
            'Do NOT add -er / -est to long adjectives.',
          ],
          examples: [
            'She is more ambitious than her brother.',
            'He is more considerate than his friends.',
            'She is the most creative person in the class.',
          ],
        },
        {
          label: 'Irregular',
          use: 'A few common adjectives have irregular forms — learn them by heart.',
          rules: [
            'good → better → the best',
            'bad → worse → the worst',
            'far → further → the furthest',
          ],
          examples: [
            'Her idea is better than mine.',
            'Today is the worst day of the week.',
          ],
        },
      ],
      highlights: ['-er', '-est', 'than', 'more', 'the most', 'better', 'the best', 'worse', 'the worst'],
    },

    // ── 11. Comparatives Exercise 1 — fill the gaps ──────────────────────────
    {
      id: 'comparatives-fill',
      type: 'fill-gaps',
      title: 'Comparatives — Exercise 1: Complete the sentences',
      emoji: '✏️',
      instruction:
        'Write the comparative form of the adjective in brackets. Remember: short adjective + -er + than, or more + long adjective + than.',
      questions: [
        { sentence: 'My brother is ___ (tall) than me.', hint: 'short adjective + -er', answer: 'taller' },
        { sentence: 'This book is ___ (interesting) than that one.', hint: 'more + long adjective', answer: 'more interesting' },
        { sentence: 'She is ___ (happy) now than last year.', hint: 'y → i + -er', answer: 'happier' },
        { sentence: 'Cats are ___ (independent) than dogs.', hint: 'more + long adjective', answer: 'more independent' },
        { sentence: 'My new phone is ___ (good) than my old one.', hint: 'irregular', answer: 'better' },
        { sentence: 'Today the weather is ___ (bad) than yesterday.', hint: 'irregular', answer: 'worse' },
      ],
    },

    // ── 12. Comparatives Exercise 2 — choose comparative or superlative ──────
    {
      id: 'comparatives-quiz',
      type: 'quiz-select',
      title: 'Comparatives — Exercise 2: Choose the correct form',
      emoji: '🎓',
      instruction: 'Choose the correct comparative or superlative form.',
      questions: [
        {
          sentence: 'Emma is the [more ambitious / most ambitious] person I know.',
          options: ['more ambitious', 'most ambitious'],
          answer: 'most ambitious',
        },
        {
          sentence: 'Daniel is [shyer / shyest] than his brother.',
          options: ['shyer', 'shyest'],
          answer: 'shyer',
        },
        {
          sentence: 'This is the [funnier / funniest] film of the year.',
          options: ['funnier', 'funniest'],
          answer: 'funniest',
        },
        {
          sentence: 'My sister is [more creative / creativer] than me.',
          options: ['more creative', 'creativer'],
          answer: 'more creative',
        },
        {
          sentence: 'It was the [worse / worst] day of my life.',
          options: ['worse', 'worst'],
          answer: 'worst',
        },
        {
          sentence: 'Mount Everest is the [higher / highest] mountain in the world.',
          options: ['higher', 'highest'],
          answer: 'highest',
        },
      ],
    },

    // ── 13. Comparatives Exercise 3 — build the sentence ─────────────────────
    {
      id: 'comparatives-builder',
      type: 'sentence-builder',
      title: 'Comparatives — Exercise 3: Put the words in order',
      emoji: '🔤',
      prompt: 'Arrange the chunks to make correct comparative and superlative sentences.',
      sentences: [
        {
          chunks: ['than', 'Anna', 'her sister', 'is more sociable'],
          correctOrder: ['Anna', 'is more sociable', 'than', 'her sister'],
        },
        {
          chunks: ['in the team', 'is', 'the most determined', 'Sam', 'player'],
          correctOrder: ['Sam', 'is', 'the most determined', 'player', 'in the team'],
        },
        {
          chunks: ['than', 'is', 'my old laptop', 'this laptop', 'faster'],
          correctOrder: ['this laptop', 'is', 'faster', 'than', 'my old laptop'],
        },
        {
          chunks: ['the best', 'this', 'restaurant', 'is', 'in town'],
          correctOrder: ['this', 'is', 'the best', 'restaurant', 'in town'],
        },
      ],
    },

    // ── 14. Comparatives Exercise 4 — correct the mistakes ───────────────────
    {
      id: 'comparatives-errors',
      type: 'error-correction',
      title: 'Comparatives — Exercise 4: Correct the mistakes',
      emoji: '🔧',
      instruction: 'Each sentence has one mistake with a comparative or superlative. Rewrite it correctly.',
      example: {
        sentence: 'She is more taller than me.',
        correction: 'She is taller than me.',
      },
      tasks: [
        { sentence: 'He is the most lazy person in the class.', answer: 'He is the laziest person in the class.' },
        { sentence: 'My sister is more friendly than yours.', answer: 'My sister is friendlier than yours.' },
        { sentence: 'This is the baddest film I have ever seen.', answer: 'This is the worst film I have ever seen.' },
        { sentence: 'Tom is more clever that Jack.', answer: 'Tom is cleverer than Jack.' },
        { sentence: 'She is the more creative student in the group.', answer: 'She is the most creative student in the group.' },
      ],
    },

    // ── 15. Grammar — Passive Voice ──────────────────────────────────────────
    {
      id: 'grammar-passive',
      type: 'grammar-tabs',
      title: 'The Passive Voice (basic tenses)',
      emoji: '🔄',
      imageSrc: asset('grammar-passive.jpg'),
      tabs: [
        {
          label: 'What & why',
          use: 'Use the Passive when the action is more important than who does it, or when we do not know who does it.',
          rules: [
            'Form: subject + the correct form of "to be" + past participle (V3).',
            'Active: Shakespeare wrote this play. → Passive: This play was written by Shakespeare.',
            'The object of the active sentence becomes the subject of the passive sentence.',
            'Use "by + person/thing" only if you want to say who did the action.',
          ],
          examples: [
            'Active: They make these cars in Japan.',
            'Passive: These cars are made in Japan.',
          ],
        },
        {
          label: 'Present Simple',
          use: 'am / is / are + past participle (V3).',
          rules: [
            'Positive: The room is cleaned every day.',
            'Negative: The room is not cleaned every day.',
            'Question: Is the room cleaned every day?',
          ],
          examples: [
            'English is spoken all over the world.',
            'These products are not sold in Europe.',
          ],
        },
        {
          label: 'Past Simple',
          use: 'was / were + past participle (V3).',
          rules: [
            'Positive: The letter was sent yesterday.',
            'Negative: The letters were not sent yesterday.',
            'Question: Was the letter sent yesterday?',
          ],
          examples: [
            'America was discovered in 1492.',
            'The windows were broken last night.',
          ],
        },
        {
          label: 'Future / will',
          use: 'will be + past participle (V3).',
          rules: [
            'Positive: The work will be finished tomorrow.',
            'Negative: The work will not be finished tomorrow.',
            'Question: Will the work be finished tomorrow?',
          ],
          examples: [
            'The results will be announced next week.',
            'A new bridge will be built here.',
          ],
        },
      ],
      highlights: ['am / is / are + V3', 'was / were + V3', 'will be + V3', 'by', 'past participle'],
    },

    // ── 16. Passive Exercise 1 — identify active or passive ──────────────────
    {
      id: 'passive-identify',
      type: 'quiz-select',
      title: 'Passive — Exercise 1: Active or Passive?',
      emoji: '🔍',
      instruction: 'Decide whether each sentence is in the Active or the Passive voice.',
      options: ['Active', 'Passive'],
      questions: [
        { sentence: 'The Mona Lisa was painted by Leonardo da Vinci.', answer: 'Passive' },
        { sentence: 'My mum makes a cake every Sunday.', answer: 'Active' },
        { sentence: 'These shoes are made in Italy.', answer: 'Passive' },
        { sentence: 'The students finished the project.', answer: 'Active' },
        { sentence: 'The new school will be opened next year.', answer: 'Passive' },
        { sentence: 'Someone stole my bike yesterday.', answer: 'Active' },
      ],
    },

    // ── 17. Passive Exercise 2 — complete with the correct form ──────────────
    {
      id: 'passive-fill',
      type: 'fill-gaps',
      title: 'Passive — Exercise 2: Complete the passive sentences',
      emoji: '✏️',
      instruction:
        'Complete each sentence with the correct passive form: am/is/are, was/were, or will be + past participle.',
      questions: [
        { sentence: 'This office ___ (clean) every morning.', hint: 'Present Simple passive', answer: 'is cleaned' },
        { sentence: 'The bridge ___ (build) in 1995.', hint: 'Past Simple passive', answer: 'was built' },
        { sentence: 'Millions of emails ___ (send) every day.', hint: 'Present Simple passive (plural)', answer: 'are sent' },
        { sentence: 'The winners ___ (announce) tomorrow.', hint: 'Future passive (will be)', answer: 'will be announced' },
        { sentence: 'The cakes ___ (eat) at the party last night.', hint: 'Past Simple passive (plural)', answer: 'were eaten' },
        { sentence: 'A new hospital ___ (open) next month.', hint: 'Future passive (will be)', answer: 'will be opened' },
      ],
    },

    // ── 18. Passive Exercise 3 — change active to passive (builder) ──────────
    {
      id: 'passive-transform',
      type: 'grammar-practice',
      title: 'Passive — Exercise 3: Change active into passive',
      emoji: '🔁',
      activityATenseChoices: ['Active', 'Passive'],
      activityA: [
        { sentence: 'The dog was found by a little boy.', answer: 'Passive' },
        { sentence: 'They speak English in Canada.', answer: 'Active' },
        { sentence: 'The house was built 100 years ago.', answer: 'Passive' },
        { sentence: 'Our teacher gives us a lot of homework.', answer: 'Active' },
        { sentence: 'The cars are washed every weekend.', answer: 'Passive' },
        { sentence: 'A famous chef will cook the dinner.', answer: 'Active' },
      ],
      activityB: [
        { sentence: 'Active: People speak Spanish in Mexico. → Passive: Spanish ___ in Mexico.', answer: 'is spoken' },
        { sentence: 'Active: Edison invented the light bulb. → Passive: The light bulb ___ by Edison.', answer: 'was invented' },
        { sentence: 'Active: They will build a new stadium. → Passive: A new stadium ___.', answer: 'will be built' },
        { sentence: 'Active: The cleaner cleans the rooms. → Passive: The rooms ___ by the cleaner.', answer: 'are cleaned' },
        { sentence: 'Active: Someone broke the window. → Passive: The window ___.', answer: 'was broken' },
        { sentence: 'Active: A doctor will examine the patients. → Passive: The patients ___ by a doctor.', answer: 'will be examined' },
      ],
      activityC: [
        {
          sentence: 'This song [wrote / was written] by a young musician.',
          options: ['wrote', 'was written'],
          answer: 'was written',
        },
        {
          sentence: 'Rice [is grown / grows] in China.',
          options: ['is grown', 'grows'],
          answer: 'is grown',
        },
        {
          sentence: 'The letters [were sent / sent] last week.',
          options: ['were sent', 'sent'],
          answer: 'were sent',
        },
        {
          sentence: 'The match [will be played / will play] on Sunday.',
          options: ['will be played', 'will play'],
          answer: 'will be played',
        },
        {
          sentence: 'These toys [are made / make] in Germany.',
          options: ['are made', 'make'],
          answer: 'are made',
        },
      ],
    },

    // ── 19. Passive Exercise 4 — correct the mistakes ────────────────────────
    {
      id: 'passive-errors',
      type: 'error-correction',
      title: 'Passive — Exercise 4: Correct the mistakes',
      emoji: '🔧',
      instruction: 'Each sentence has one mistake with the Passive Voice. Rewrite it correctly.',
      example: {
        sentence: 'The cake was eat by the children.',
        correction: 'The cake was eaten by the children.',
      },
      tasks: [
        { sentence: 'English is speak in many countries.', answer: 'English is spoken in many countries.' },
        { sentence: 'The house was build in 1980.', answer: 'The house was built in 1980.' },
        { sentence: 'These cars are make in Japan.', answer: 'These cars are made in Japan.' },
        { sentence: 'The results will announced tomorrow.', answer: 'The results will be announced tomorrow.' },
        { sentence: 'The windows was cleaned yesterday.', answer: 'The windows were cleaned yesterday.' },
      ],
    },

    // ── 20. Results checklist ────────────────────────────────────────────────
    {
      id: 'results',
      type: 'results-checklist',
      title: 'Check your results!',
      emoji: '🏁',
      checklist: [
        'use adjectives to describe character and personality',
        'read and talk about people using the new words',
        'compare people with comparatives and superlatives',
        'understand how the Passive Voice is formed',
        'use the Passive Voice in the present, past and future',
      ],
    },
  ],
}

export default lesson
