import type { Lesson } from '../types/lesson'

const asset = (file: string) => `/assets/age-life-stages-dependent-prepositions/${file}`

const lesson: Lesson = {
  id: 'age-life-stages-dependent-prepositions',
  title: 'Age & Life Stages + Dependent Prepositions',
  level: 'B1',
  topic: 'Vocabulary & Grammar',
  description:
    'Learn words to describe people at different ages and life stages, then practise verb + preposition combinations (dependent prepositions).',
  coverImage: asset('hero.jpg'),
  sections: [
    // ── 1. Hero ──────────────────────────────────────────────────────────────
    {
      id: 'hero',
      type: 'hero',
      title: 'Age & Life Stages + Dependent Prepositions',
      emoji: '🧓',
      level: 'B1',
      subtitle:
        'Describe people at different ages, talk about life stages, and use verb + preposition combinations correctly.',
      imageSrc: asset('hero.jpg'),
      goals: [
        'Learn vocabulary to describe people at different ages',
        'Talk about life stages: childhood, teenage years, adulthood',
        'Understand and use dependent prepositions after verbs',
        'Practise choosing the right preposition in context',
      ],
      words: [
        'toddler',
        'adolescent',
        'middle-aged',
        'pensioner',
        'senior citizen',
        'belong to',
        'look forward to',
        'arrive at / in',
        'insist on',
        'complain about',
        'dream about',
        'apply for',
      ],
      functionalLanguage: [
        "She's in her early 20s.",
        'He became a pensioner at 67.',
        "I'm looking forward to seeing you.",
        'We arrived at the station too late.',
        'She complained about the noise.',
        'He insisted on coming with us.',
      ],
    },

    // ── 2. Warm-up questions ─────────────────────────────────────────────────
    {
      id: 'warm-up',
      type: 'warm-up-questions',
      title: 'Warm-up: Talk about age',
      emoji: '💬',
      images: [],
      questions: [
        {
          question: 'At what age do people in your country usually start working?',
          hint: 'Think about university, first jobs, and career starts.',
        },
        {
          question: 'What is the best age to get married? Why?',
          hint: 'Consider cultural expectations and personal freedom.',
        },
        {
          question: 'What do people usually do after they retire in your country?',
          hint: 'Think about hobbies, travel, family, volunteering.',
        },
        {
          question: 'Do you think "middle-aged" has a negative meaning? Why / why not?',
          hint: 'Think about how society views different age groups.',
        },
      ],
    },

    // ── 3. Age & Life Stages — vocabulary table ──────────────────────────────
    {
      id: 'age-vocabulary',
      type: 'vocabulary-categories',
      title: 'Age & Life Stages',
      emoji: '👶',
      categories: [
        {
          label: 'Childhood',
          color: 'green',
          words: [
            { word: 'a baby (0–1)', definition: 'a very young child who cannot walk or talk yet' },
            { word: 'a toddler (1–3)', definition: 'a young child who has just learnt to walk' },
            { word: 'a child (3–12)', definition: 'a young person, not yet a teenager' },
            { word: 'a preteen (10–12)', definition: 'a child just before the teenage years' },
          ],
        },
        {
          label: 'The Teenage Years',
          color: 'blue',
          words: [
            { word: 'a teenager / a teen (13–19)', definition: 'a person aged between 13 and 19' },
            {
              word: 'an adolescent (13–19)',
              definition: 'a teenager — the formal/scientific word',
            },
          ],
        },
        {
          label: 'Adulthood',
          color: 'orange',
          words: [
            { word: 'a young adult (18–25)', definition: 'a person who has just become an adult' },
            { word: 'in his/her 20s (20–29)', definition: 'aged between 20 and 29' },
            {
              word: 'in his/her early 20s (20–23)',
              definition: 'aged between 20 and 23',
            },
            {
              word: 'in his/her mid 20s (24–26)',
              definition: 'aged between 24 and 26',
            },
            {
              word: 'in his/her late 20s (27–29)',
              definition: 'aged between 27 and 29',
            },
            { word: 'middle-aged (45–65)', definition: 'no longer young, but not yet old' },
          ],
        },
        {
          label: 'Later Life',
          color: 'purple',
          words: [
            {
              word: 'retired / a pensioner (UK) (67+)',
              definition: 'a person who has stopped working and receives a pension',
            },
            {
              word: 'an elderly person / a senior citizen (75+)',
              definition: '"senior citizen" is a more polite way to say "old person"',
            },
          ],
        },
      ],
    },

    // ── 3. Exercise 1 — Age vocabulary match ────────────────────────────────
    {
      id: 'age-match',
      type: 'vocabulary-match',
      title: 'Exercise 1: Match the words with their definitions',
      emoji: '✅',
      items: [
        { word: 'toddler', definition: 'a young child who has just learnt to walk (1–3)' },
        { word: 'adolescent', definition: 'a teenager — the formal/scientific word (13–19)' },
        { word: 'middle-aged', definition: 'no longer young, but not yet old (45–65)' },
        { word: 'pensioner', definition: 'a person who has stopped working and receives a pension' },
        {
          word: 'senior citizen',
          definition: 'a polite way to refer to an old or elderly person',
        },
        { word: 'preteen', definition: 'a child just before the teenage years (10–12)' },
      ],
    },

    // ── 4. Exercise 2 — Choose the correct age word ──────────────────────────
    {
      id: 'age-quiz',
      type: 'quiz-select',
      title: 'Exercise 2: Choose the correct word',
      emoji: '🎯',
      instruction: 'Choose the word that best describes each person.',
      questions: [
        {
          sentence: 'Maria is 2 years old. She has just learnt to walk. She is a ___.',
          options: ['toddler', 'teenager', 'pensioner'],
          answer: 'toddler',
        },
        {
          sentence: 'David is 15 and goes to secondary school. He is a ___.',
          options: ['toddler', 'teenager', 'middle-aged man'],
          answer: 'teenager',
        },
        {
          sentence: 'Jane is 50 years old and still works full time. She is ___.',
          options: ['retired', 'middle-aged', 'a young adult'],
          answer: 'middle-aged',
        },
        {
          sentence: 'Robert is 70 and has stopped working. He is ___.',
          options: ['a toddler', 'a young adult', 'retired'],
          answer: 'retired',
        },
        {
          sentence: 'Sophie is 22. Which sentence is correct?',
          options: [
            "She's in her early 20s.",
            "She's in her late 20s.",
            "She's middle-aged.",
          ],
          answer: "She's in her early 20s.",
        },
        {
          sentence: "Tom is 28. Which phrase describes him best?",
          options: ["in his early 20s", "in his late 20s", "in his mid 20s"],
          answer: "in his late 20s",
        },
      ],
    },

    // ── 5. Exercise 3 — Life stages sentence match ───────────────────────────
    {
      id: 'life-stages-match',
      type: 'sentence-match',
      title: 'Exercise 3: Who is being described?',
      emoji: '🔗',
      items: [
        {
          problem: 'Lena is 1 year old. She has just started walking and says a few words.',
          answer: 'a toddler',
        },
        {
          problem: "Matt is 17. He goes to school and spends a lot of time with his friends.",
          answer: 'a teenager',
        },
        {
          problem: 'Carol is 52. She has a successful career and grown-up children.',
          answer: 'middle-aged',
        },
        {
          problem: 'George is 70. He stopped working two years ago and now travels a lot.',
          answer: 'retired',
        },
        {
          problem: "Sophie is 24. She recently finished university and started her first job.",
          answer: 'in her early 20s',
        },
        {
          problem: 'Peter is 80. He lives alone and receives a state pension.',
          answer: 'an elderly person',
        },
      ],
    },

    // ── 6. Grammar — Verb + Preposition reference ────────────────────────────
    {
      id: 'grammar-verb-preposition',
      type: 'grammar-tabs',
      title: 'Verb + Preposition: Dependent Prepositions',
      emoji: '📌',
      imageSrc: asset('grammar.jpg'),
      tabs: [
        {
          label: 'TO / FOR',
          use: 'Some verbs are always followed by a fixed preposition. These are called dependent prepositions.',
          rules: [
            'belong TO somebody — This book belongs to me.',
            'get married TO somebody — He got married to his boss.',
            'listen TO somebody — Listen to the teacher.',
            "look forward TO something — I'm looking forward to the weekend.",
            'say something TO somebody — She said nothing to me.',
            'talk TO somebody — I talked to the manager.',
            'write TO somebody — Write to me soon.',
            '---',
            'apply FOR something — I applied for the job.',
            'ask FOR something — Can I ask for some help?',
            "look FOR something — I'm looking for my keys.",
            'pay FOR something — He paid for the meal.',
            'wait FOR somebody/something — We waited for two hours.',
          ],
          examples: [
            "I'm looking forward to seeing you.",
            'She applied for a new job.',
            'We waited for the bus for 20 minutes.',
          ],
        },
        {
          label: 'AT / IN',
          use: 'Use AT for specific places/events; use IN for towns, cities, and countries.',
          rules: [
            'arrive AT a place or event — We arrived at the airport.',
            'look AT something/somebody — Look at this picture.',
            "laugh AT something/somebody — Don't laugh at me!",
            'shout AT somebody — Stop shouting at me!',
            'smile AT somebody — She smiled at him.',
            '---',
            'arrive IN a town/city/country — We arrived in London.',
            'believe IN something — Do you believe in magic?',
            'invest IN something — They want to invest in property.',
            'succeed IN something/doing — She succeeded in passing the exam.',
          ],
          examples: [
            'We arrived at the station too late.',
            'As soon as we arrived in Lisbon, we called our friends.',
            'Why are you shouting at me?',
          ],
        },
        {
          label: 'ON / OF / WITH / ABOUT',
          use: 'Four more very common prepositions that follow specific verbs.',
          rules: [
            'depend ON something — It depends on the weather.',
            'insist ON something — He insisted on paying.',
            'spend money ON something — I spent all my money on clothes.',
            '---',
            'remind somebody OF something — She reminds me of my mother.',
            "think OF something/doing — I'm thinking of moving.",
            '---',
            'agree WITH somebody — I agree with you.',
            "argue WITH somebody — Don't argue with me.",
            'compare something WITH something — Compare this price with that one.',
            '---',
            'argue ABOUT something — They argued about money.',
            'complain ABOUT something — I never complained about my salary.',
            'dream ABOUT something — I sometimes dream about that trip.',
            "talk ABOUT something — Let's talk about it.",
            "think ABOUT somebody/something — I'm thinking about you.",
          ],
          examples: [
            'She insists on coming with us.',
            'He reminds me of his father.',
            'I sometimes dream about travelling the world.',
          ],
        },
      ],
      highlights: ['to', 'for', 'at', 'in', 'on', 'of', 'with', 'about'],
    },

    // ── 6. Exercise 3 — Fill the gaps (prepositions) ─────────────────────────
    {
      id: 'preposition-fill',
      type: 'fill-gaps',
      title: 'Exercise 3: Complete the sentences with the correct preposition',
      emoji: '✏️',
      instruction: 'Write the correct dependent preposition in each gap.',
      wordBank: ['for', 'to', 'at', 'of', 'at', 'to', 'about', 'on', 'to', 'in'],
      questions: [
        {
          sentence: 'I waited ___ you for more than an hour.',
          hint: 'wait + ?',
          answer: 'for',
        },
        {
          sentence: "I'm looking forward ___ seeing you.",
          hint: 'look forward + ?',
          answer: 'to',
        },
        {
          sentence: 'We arrived ___ the station too late.',
          hint: 'arrive + ? (specific place)',
          answer: 'at',
        },
        {
          sentence: 'We are thinking ___ going on a trip to Venice.',
          hint: 'think + ?',
          answer: 'of',
        },
        {
          sentence: 'Why are you shouting ___ me?',
          hint: 'shout + ?',
          answer: 'at',
        },
        {
          sentence: 'This book belongs ___ me.',
          hint: 'belong + ?',
          answer: 'to',
        },
        {
          sentence: 'I never complained ___ my salary.',
          hint: 'complain + ?',
          answer: 'about',
        },
        {
          sentence: 'I spent all my money ___ clothes.',
          hint: 'spend money + ?',
          answer: 'on',
        },
        {
          sentence: 'He got married ___ his boss.',
          hint: 'get married + ?',
          answer: 'to',
        },
        {
          sentence: 'As soon as we arrived ___ Lisbon, we called our friends.',
          hint: 'arrive + ? (city)',
          answer: 'in',
        },
      ],
    },

    // ── 7. Exercise 4 — Multiple choice (prepositions) ───────────────────────
    {
      id: 'preposition-quiz',
      type: 'quiz-select',
      title: 'Exercise 4: Choose the correct preposition',
      emoji: '🎯',
      imageSrc: asset('quiz.jpg'),
      instruction: 'Choose the correct preposition to complete the sentence.',
      questions: [
        {
          sentence: 'She smiled ___ him, and he blushed.',
          options: ['to', 'at', 'on', 'of'],
          answer: 'at',
        },
        {
          sentence: 'He paid ___ the meal and she paid ___ the taxi.',
          options: ['to', 'for', '-', 'of'],
          answer: 'for',
        },
        {
          sentence: 'He said ___ me that I was stupid.',
          options: ['at', 'for', 'with', 'to'],
          answer: 'to',
        },
        {
          sentence: 'He insisted ___ coming with us.',
          options: ['in', 'at', 'on', 'about'],
          answer: 'on',
        },
        {
          sentence: 'We want to invest the money ___ a big house.',
          options: ['in', 'on', 'with', 'to'],
          answer: 'in',
        },
        {
          sentence: 'She reminds me ___ her mother.',
          options: ['about', 'in', 'with', 'of'],
          answer: 'of',
        },
        {
          sentence: 'I sometimes dream ___ that trip.',
          options: ['about', 'in', 'with', 'on'],
          answer: 'about',
        },
        {
          sentence: "Don't try to compare Rome ___ Paris. They're too different.",
          options: ['with', 'of', 'about', 'at'],
          answer: 'with',
        },
        {
          sentence: 'They were laughing ___ him.',
          options: ['to', 'of', 'at', 'in'],
          answer: 'at',
        },
        {
          sentence: "I'm going to apply ___ a new job.",
          options: ['of', 'with', 'in', 'for'],
          answer: 'for',
        },
      ],
    },

    // ── 8. Exercise 5 — True or False (dependent prepositions) ───────────────
    {
      id: 'preposition-true-false',
      type: 'true-false-quiz',
      title: 'Exercise 5: True or False?',
      emoji: '🤔',
      statements: [
        { statement: 'We say "arrive at the airport" (not "arrive in the airport").', answer: true },
        { statement: 'We say "arrive in London" (not "arrive at London").', answer: true },
        { statement: 'We say "listen to music" (not "listen at music").', answer: true },
        { statement: 'We say "wait at the bus" (not "wait for the bus").', answer: false },
        { statement: 'We say "look forward to the weekend".', answer: true },
        { statement: 'We say "belong at somebody".', answer: false },
        { statement: 'We say "complain about the noise".', answer: true },
        { statement: 'We say "insist in doing something".', answer: false },
      ],
    },

    // ── 9. Exercise 6 — Error correction ─────────────────────────────────────
    {
      id: 'preposition-errors',
      type: 'error-correction',
      title: 'Exercise 6: Correct the mistakes',
      emoji: '🔧',
      instruction:
        'Each sentence has one mistake with a dependent preposition. Rewrite the sentence correctly.',
      example: {
        sentence: 'I am looking forward for the holidays.',
        correction: 'I am looking forward to the holidays.',
      },
      tasks: [
        {
          sentence: 'She applied to the job but did not get it.',
          answer: 'She applied for the job but did not get it.',
        },
        {
          sentence: 'Stop shouting to me — I can hear you!',
          answer: 'Stop shouting at me — I can hear you!',
        },
        {
          sentence: 'He spent all his money for new clothes.',
          answer: 'He spent all his money on new clothes.',
        },
        {
          sentence: 'They arrived at Paris late at night.',
          answer: 'They arrived in Paris late at night.',
        },
        {
          sentence: 'I dream of becoming a doctor since I was a child.',
          answer: 'I dream about becoming a doctor since I was a child.',
        },
        {
          sentence: 'She reminded me about her sister.',
          answer: 'She reminded me of her sister.',
        },
      ],
    },

    // ── 10. Reading — email using age & preposition vocabulary ───────────────
    {
      id: 'reading-email',
      type: 'email-reading',
      title: 'Reading: A message from Laura',
      emoji: '📖',
      email: {
        subject: 'Catching up — how is everyone?',
        body: [
          "Hi Maria! It was great talking to you last week. I've been thinking about our conversation about family, so I thought I'd write to you and tell you about mine.",
          "My grandfather is 81 now — he's an elderly man but still very active. He retired at 67 and has never complained about being bored. He insists on cooking Sunday lunch every week and always looks forward to seeing the whole family together.",
          "My sister Emma is in her late 20s — she's 28 — and she's just applied for a new job in Paris. I'm so excited for her! She's always dreamed about living abroad. She got married to her partner last year and they're thinking of moving to France in the spring.",
          "My nephew Jake is a toddler — he just turned 2. He's at that wonderful age when he's curious about everything and keeps shouting at the dog! My brother spends all his free time with Jake and says he wouldn't change it for anything.",
        ],
        closing: ["Write back and tell me about your family!", "Laura"],
      },
      questions: [
        {
          question: "How does Laura describe her grandfather's retirement?",
          sampleAnswer:
            "He retired at 67, never complained about being bored, insists on cooking Sunday lunch, and looks forward to family gatherings.",
        },
        {
          question: "What are Emma's plans for the future?",
          sampleAnswer:
            "She applied for a new job in Paris, dreamed about living abroad, got married last year, and is thinking of moving to France.",
        },
        {
          question: "Find three verb + preposition combinations in the email and write them down.",
          sampleAnswer:
            "For example: insist on, look forward to, applied for, dreamed about, thinking of, got married to, complain about, spend time with.",
        },
        {
          question: "Tell your partner about your own family. Try to use some of the new vocabulary.",
          sampleAnswer:
            "Students answer freely using age words (toddler, middle-aged, retired, etc.) and dependent prepositions.",
        },
      ],
    },

    // ── 11. Sentence builder — dependent prepositions ─────────────────────────
    {
      id: 'preposition-builder',
      type: 'sentence-builder',
      title: 'Exercise 9: Put the words in order',
      emoji: '🔤',
      prompt: 'Arrange the chunks to make correct sentences with dependent prepositions.',
      sentences: [
        {
          chunks: ['to', 'She', 'her mother', 'reminds me', 'of'],
          correctOrder: ['She', 'reminds me', 'of', 'her mother'],
        },
        {
          chunks: ['forward', 'looking', "I'm", 'to', 'the weekend'],
          correctOrder: ["I'm", 'looking', 'forward', 'to', 'the weekend'],
        },
        {
          chunks: ['the station', 'We', 'arrived', 'at', 'too late'],
          correctOrder: ['We', 'arrived', 'at', 'the station', 'too late'],
        },
        {
          chunks: ['insisted', 'paying', 'He', 'on'],
          correctOrder: ['He', 'insisted', 'on', 'paying'],
        },
        {
          chunks: ['for', 'applied', 'the job', 'She', 'yesterday'],
          correctOrder: ['She', 'applied', 'for', 'the job', 'yesterday'],
        },
        {
          chunks: ['his money', 'spent', 'on', 'He', 'new clothes'],
          correctOrder: ['He', 'spent', 'his money', 'on', 'new clothes'],
        },
      ],
    },

    // ── 12. Writing task ──────────────────────────────────────────────────────
    {
      id: 'writing-task',
      type: 'writing-task',
      title: 'Writing: Tell us about someone you know',
      emoji: '✍️',
      prompt:
        "Write a short paragraph (60–80 words) about a person in your family or a friend. Describe their age and life stage, and use at least four verb + preposition combinations from today's lesson.",
      wordBank: [
        'belong to',
        'look forward to',
        'arrive at / in',
        'apply for',
        'insist on',
        'complain about',
        'dream about',
        'spend time with',
        'remind of',
        'believe in',
      ],
      starter: 'I want to tell you about my ______. He / She is ______...',
      modelAnswer:
        "I want to tell you about my uncle. He is in his early 50s and is middle-aged but still very energetic. He has always dreamed about travelling the world and recently applied for a job abroad. He never complains about his salary, even though he works very hard. He insists on cooking dinner every Sunday and always looks forward to spending time with the family.",
    },

    // ── 13. Results checklist ─────────────────────────────────────────────────
    {
      id: 'results',
      type: 'results-checklist',
      title: 'Check your results!',
      emoji: '🏁',
      imageSrc: asset('results.jpg'),
      checklist: [
        'use vocabulary to describe people at different ages and life stages',
        'talk about age using expressions like "in her early 20s" or "middle-aged"',
        'understand what dependent prepositions are',
        'use the correct preposition after common verbs (arrive at/in, listen to, apply for, etc.)',
        'recognise and correct preposition mistakes',
      ],
    },
  ],
}

export default lesson
