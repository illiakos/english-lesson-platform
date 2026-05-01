import type { Lesson } from '../types/lesson'

const lesson: Lesson = {
  id: 'what-to-wear',
  title: 'What to wear?',
  level: 'B1',
  topic: 'Clothes and fashion',
  description: 'Learn B1 clothing vocabulary, describe outfits using Past and Future Continuous, and practise giving style advice.',
  coverImage: '/assets/what-to-wear/hero.jpg',
  sections: [

    // ── 1. HERO ────────────────────────────────────────────────────────────────
    {
      id: 'hero',
      type: 'hero',
      title: 'What to wear?',
      emoji: '👗',
      level: 'B1',
      subtitle: 'Clothes, outfits, patterns, materials, phrasal verbs, and tense practice.',
      imageSrc: '/assets/what-to-wear/hero.jpg',
      goals: [
        'Learn B1 vocabulary related to clothes and outfits',
        'Describe what someone was wearing in the past (Past Continuous)',
        'Describe what someone will be wearing in the future (Future Continuous)',
        'Use common clothing phrasal verbs',
        'Give simple advice about outfits',
      ],
      words: [
        'striped', 'checked', 'polka-dot', 'plain', 'floral',
        'cotton', 'wool', 'leather', 'silk',
        'tight', 'loose', 'baggy', 'sleeveless', 'V-neck',
        'smart', 'casual',
        'try on', 'dress up', 'take off', 'go with',
      ],
      functionalLanguage: [
        'I like your outfit.',
        'This scarf goes with your bag.',
        'She was wearing a plain white shirt.',
        'Yesterday at 7 PM, I was trying on a floral dress.',
        'This time tomorrow, I will be wearing a smart black suit.',
        'I\'m going to a party. What should I wear?',
      ],
    },

    // ── 2. VOCABULARY CATEGORIES ───────────────────────────────────────────────
    {
      id: 'vocab-categories',
      type: 'vocabulary-categories',
      title: 'Clothing vocabulary',
      emoji: '🧥',
      categories: [
        {
          label: 'Patterns',
          color: 'blue',
          words: [
            { word: 'striped', definition: 'with lines' },
            { word: 'checked', definition: 'with squares' },
            { word: 'polka-dot', definition: 'with dots' },
            { word: 'plain', definition: 'without a pattern' },
            { word: 'floral', definition: 'with flowers' },
          ],
        },
        {
          label: 'Materials',
          color: 'green',
          words: [
            { word: 'cotton', definition: 'soft natural fabric' },
            { word: 'wool', definition: 'warm material from sheep' },
            { word: 'leather', definition: 'material made from animal skin' },
            { word: 'silk', definition: 'smooth expensive fabric' },
          ],
        },
        {
          label: 'Style and fit',
          color: 'purple',
          words: [
            { word: 'tight', definition: 'close to the body' },
            { word: 'loose', definition: 'not tight' },
            { word: 'baggy', definition: 'very loose' },
            { word: 'sleeveless', definition: 'without sleeves' },
            { word: 'V-neck', definition: 'with a V-shaped neckline' },
            { word: 'smart', definition: 'elegant or formal' },
            { word: 'casual', definition: 'informal or everyday' },
          ],
        },
        {
          label: 'Phrasal verbs',
          color: 'orange',
          words: [
            { word: 'try on', definition: 'put clothes on to see if they fit' },
            { word: 'dress up', definition: 'wear special or elegant clothes' },
            { word: 'take off', definition: 'remove clothes' },
            { word: 'go with', definition: 'match something' },
          ],
        },
      ],
    },

    // ── 3. VOCABULARY MATCHING ─────────────────────────────────────────────────
    {
      id: 'vocab-match',
      type: 'vocabulary-match',
      title: 'Match the words with their definitions',
      emoji: '✅',
      items: [
        { word: 'striped', definition: 'with lines' },
        { word: 'checked', definition: 'with squares' },
        { word: 'polka-dot', definition: 'with dots' },
        { word: 'plain', definition: 'without a pattern' },
        { word: 'floral', definition: 'with flowers' },
        { word: 'tight', definition: 'close to the body' },
        { word: 'loose', definition: 'not tight' },
        { word: 'baggy', definition: 'very loose' },
        { word: 'sleeveless', definition: 'without sleeves' },
        { word: 'smart', definition: 'elegant or formal' },
        { word: 'casual', definition: 'informal or everyday' },
        { word: 'try on', definition: 'put clothes on to see if they fit' },
        { word: 'dress up', definition: 'wear special or elegant clothes' },
        { word: 'take off', definition: 'remove clothes' },
        { word: 'go with', definition: 'match something' },
      ],
    },

    // ── 4. PICTURE LABELING ────────────────────────────────────────────────────
    {
      id: 'picture-labeling',
      type: 'picture-labeling',
      title: 'Label the clothes',
      emoji: '✍️',
      instruction: 'Look at the pictures and choose the correct clothing phrase.',
      wordBank: [
        'leather jacket',
        'floral dress',
        'checked shirt',
        'plain T-shirt',
        'baggy jeans',
        'silk scarf',
        'smart suit',
        'white trainers',
        'sunglasses',
        'wool sweater',
      ],
      cards: [
        { image: '/assets/what-to-wear/clothes-1.jpg', answer: 'leather jacket' },
        { image: '/assets/what-to-wear/clothes-2.jpg', answer: 'floral dress' },
        { image: '/assets/what-to-wear/clothes-3.jpg', answer: 'checked shirt' },
        { image: '/assets/what-to-wear/clothes-4.jpg', answer: 'baggy jeans' },
        { image: '/assets/what-to-wear/clothes-5.jpg', answer: 'silk scarf' },
        { image: '/assets/what-to-wear/clothes-6.jpg', answer: 'smart suit' },
      ],
    },

    // ── 5. GRAMMAR TABS ────────────────────────────────────────────────────────
    {
      id: 'grammar-tabs',
      type: 'grammar-tabs',
      title: 'Grammar: Past Continuous and Future Continuous',
      emoji: '📖',
      imageSrc: '/assets/what-to-wear/grammar.jpg',
      tabs: [
        {
          label: 'Past Continuous',
          rules: [
            'Formula: was / were + V-ing',
            'Positive: I / He / She / It + was + V-ing',
            'Positive: You / We / They + were + V-ing',
            'Negative: I / He / She / It + wasn\'t + V-ing',
            'Negative: You / We / They + weren\'t + V-ing',
            'Question: Was / Were + subject + V-ing?',
          ],
          use: 'We use Past Continuous to describe an action in progress at a specific moment in the past. In this lesson, we use it to describe what someone was wearing or trying on.',
          examples: [
            'At 7 PM yesterday, I was trying on a floral dress.',
            'She was wearing a plain white shirt when I saw her.',
            'They were dressing up for the party.',
            'He wasn\'t wearing a jacket.',
            'Were you wearing sunglasses?',
          ],
        },
        {
          label: 'Future Continuous',
          rules: [
            'Formula: will be + V-ing',
            'Positive: Subject + will be + V-ing',
            'Negative: Subject + won\'t be + V-ing',
            'Question: Will + subject + be + V-ing?',
          ],
          use: 'We use Future Continuous to imagine an action in progress at a specific time in the future. In this lesson, we use it to describe what someone will be wearing at a future event.',
          examples: [
            'This time tomorrow, I will be wearing my silk pajamas.',
            'At the party on Friday, she will be wearing a smart black suit.',
            'Tomorrow evening, they will be trying on new outfits.',
            'I won\'t be wearing high heels.',
            'Will you be wearing a tie?',
          ],
        },
      ],
      highlights: ['was', 'were', 'will be', 'won\'t be', 'V-ing', 'wasn\'t', 'weren\'t'],
    },

    // ── 6. CHOOSE THE CORRECT TENSE ────────────────────────────────────────────
    {
      id: 'tense-choice',
      type: 'quiz-select',
      title: 'Choose the correct tense',
      emoji: '✅',
      instruction: 'Read the sentence and choose the correct tense.',
      options: ['Past Continuous', 'Future Continuous'],
      questions: [
        { sentence: 'Yesterday at 8 PM, I was trying on a jacket.', answer: 'Past Continuous' },
        { sentence: 'This time tomorrow, I will be wearing a suit.', answer: 'Future Continuous' },
        { sentence: 'When I saw him, he was wearing sunglasses.', answer: 'Past Continuous' },
        { sentence: 'At the wedding next week, she will be wearing a silk dress.', answer: 'Future Continuous' },
        { sentence: 'They were dressing up when I called them.', answer: 'Past Continuous' },
        { sentence: 'Tomorrow evening, we will be looking for new shoes.', answer: 'Future Continuous' },
      ],
      explanations: [
        { term: 'Past Continuous', meaning: 'in progress at a moment in the past' },
        { term: 'Future Continuous', meaning: 'in progress at a moment in the future' },
      ],
    },

    // ── 7. COMPLETE THE SENTENCES ──────────────────────────────────────────────
    {
      id: 'fill-gaps',
      type: 'fill-gaps',
      title: 'Complete the sentences',
      emoji: '✍️',
      instruction: 'Write the correct form of the verb.',
      questions: [
        { sentence: 'Yesterday at 7 PM, she ___ a floral dress.', hint: '(wear)', answer: 'was wearing' },
        { sentence: 'This time tomorrow, I ___ my new leather jacket.', hint: '(wear)', answer: 'will be wearing' },
        { sentence: 'When I met him, he ___ a checked shirt.', hint: '(wear)', answer: 'was wearing' },
        { sentence: 'At the party on Friday, they ___ smart clothes.', hint: '(wear)', answer: 'will be wearing' },
        { sentence: 'At 9 PM yesterday, we ___ on new outfits.', hint: '(try)', answer: 'were trying' },
        { sentence: 'Tomorrow morning, he ___ off his old coat.', hint: '(take)', answer: 'will be taking' },
        { sentence: 'She ___ up for the wedding when I arrived.', hint: '(dress)', answer: 'was dressing' },
        { sentence: 'Next Saturday, they ___ for a formal dinner.', hint: '(dress up)', answer: 'will be dressing up' },
      ],
    },

    // ── 8. PHRASAL VERBS PRACTICE ──────────────────────────────────────────────
    {
      id: 'phrasal-verbs',
      type: 'quiz-select',
      title: 'Choose the correct phrasal verb',
      emoji: '🧙‍♂️',
      instruction: 'Choose the correct phrasal verb to complete each sentence.',
      options: ['try on', 'dress up', 'take off', 'go with'],
      questions: [
        { sentence: 'I want to ___ this jacket before I buy it.', answer: 'try on' },
        { sentence: 'These shoes ___ your dress.', answer: 'go with' },
        { sentence: 'Please ___ your coat. It\'s warm inside.', answer: 'take off' },
        { sentence: 'We need to ___ for the wedding.', answer: 'dress up' },
        { sentence: 'This scarf doesn\'t ___ my bag.', answer: 'go with' },
        { sentence: 'She always likes to ___ before a party.', answer: 'dress up' },
        { sentence: 'He decided to ___ the checked shirt in the shop.', answer: 'try on' },
        { sentence: 'You should ___ your sunglasses indoors.', answer: 'take off' },
      ],
      explanations: [
        { term: 'try on', meaning: 'test clothes' },
        { term: 'dress up', meaning: 'wear special clothes' },
        { term: 'take off', meaning: 'remove' },
        { term: 'go with', meaning: 'match' },
      ],
    },

    // ── 9. SENTENCE BUILDER ────────────────────────────────────────────────────
    {
      id: 'sentence-builder',
      type: 'sentence-builder',
      title: 'Build the sentences',
      emoji: '🧙‍♂️',
      prompt: 'Click the chunks in the correct order to build each sentence.',
      sentences: [
        {
          chunks: ['at 7 PM', 'Yesterday', 'a floral dress', 'I', 'was trying on'],
          correctOrder: ['Yesterday', 'at 7 PM', 'I', 'was trying on', 'a floral dress'],
        },
        {
          chunks: ['when I saw her', 'a plain white shirt', 'She', 'was wearing'],
          correctOrder: ['She', 'was wearing', 'a plain white shirt', 'when I saw her'],
        },
        {
          chunks: ['my silk pajamas', 'This time tomorrow', 'will be wearing', 'I'],
          correctOrder: ['This time tomorrow', 'I', 'will be wearing', 'my silk pajamas'],
        },
        {
          chunks: ['a smart black suit', 'she', 'will be wearing', 'At the party'],
          correctOrder: ['At the party', 'she', 'will be wearing', 'a smart black suit'],
        },
        {
          chunks: ['your dress', 'go with', 'These shoes'],
          correctOrder: ['These shoes', 'go with', 'your dress'],
        },
        {
          chunks: ['your coat', 'You should', 'take off'],
          correctOrder: ['You should', 'take off', 'your coat'],
        },
      ],
    },

    // ── 10. MATCH QUESTIONS WITH PICTURES ──────────────────────────────────────
    {
      id: 'image-match',
      type: 'image-match',
      title: 'Match the questions with the pictures',
      emoji: '💼',
      instruction: 'Match each question with the correct picture.',
      pairs: [
        {
          question: 'What colors look good on you?',
          image: '/assets/what-to-wear/question-1.jpg',
          label: 'Colourful outfits',
        },
        {
          question: 'Have you ever made your own clothes?',
          image: '/assets/what-to-wear/question-2.jpg',
          label: 'Sewing & making',
        },
        {
          question: 'What is your shoe size?',
          image: '/assets/what-to-wear/question-3.jpg',
          label: 'Shoes',
        },
        {
          question: 'Do you sometimes wear a hat?',
          image: '/assets/what-to-wear/question-4.jpg',
          label: 'Person with hat',
        },
        {
          question: 'Do you often buy clothes online?',
          image: '/assets/what-to-wear/question-5.jpg',
          label: 'Online shopping',
        },
      ],
    },

    // ── 11. DIALOGUE READING ───────────────────────────────────────────────────
    {
      id: 'dialogue-reading',
      type: 'dialogue-reading',
      title: 'Read the dialogue and check your guesses',
      emoji: '🎧',
      imageSrc: '/assets/what-to-wear/dialogue.jpg',
      characters: [
        { name: 'Michelle', colorClass: 'bg-orange-100 text-orange-900 ring-orange-200' },
        { name: 'Sam', colorClass: 'bg-green-100 text-green-900 ring-green-200' },
      ],
      lines: [
        { speaker: 'Michelle', text: 'Hey Sam, what\'s going on?' },
        { speaker: 'Sam', text: 'Hey Michelle. I\'m choosing an outfit for a party.' },
        { speaker: 'Michelle', text: 'Nice! Actually, I\'m going to a wedding party next week. What should I wear?' },
        { speaker: 'Sam', text: 'Is it formal or informal?' },
        { speaker: 'Michelle', text: 'Formal, I think. Yesterday at 7 PM, I was trying on a silk dress, but it looked too serious.' },
        { speaker: 'Sam', text: 'Then maybe don\'t wear a business suit. You could wear a floral dress with a small leather bag.' },
        { speaker: 'Michelle', text: 'That sounds better. I was also looking at a plain white dress.' },
        { speaker: 'Sam', text: 'A white dress? For a wedding? Maybe not. The bride will probably be wearing white.' },
        { speaker: 'Michelle', text: 'Good point. This time next week, I will be standing near the dance floor, so I need something comfortable.' },
        { speaker: 'Sam', text: 'Exactly. You will be dancing, talking to people, and taking photos. Wear something smart but comfortable.' },
        { speaker: 'Michelle', text: 'What about a floral dress, low heels, and a silk scarf?' },
        { speaker: 'Sam', text: 'Perfect. The scarf goes with the dress.' },
        { speaker: 'Michelle', text: 'And what about you? What will you be wearing at your party?' },
        { speaker: 'Sam', text: 'I\'ll be wearing a checked shirt, dark jeans, and a leather jacket.' },
        { speaker: 'Michelle', text: 'Casual but stylish. Nice!' },
      ],
      questions: [
        { question: 'Where is Michelle going next week?', sampleAnswer: 'To a wedding party.' },
        { question: 'What was Michelle trying on yesterday?', sampleAnswer: 'A silk dress.' },
        { question: 'Why should Michelle avoid a white dress?', sampleAnswer: 'Because the bride will probably be wearing white.' },
        { question: 'What outfit does Sam recommend?', sampleAnswer: 'A floral dress, low heels, and a silk scarf.' },
        { question: 'What will Sam be wearing?', sampleAnswer: 'A checked shirt, dark jeans, and a leather jacket.' },
      ],
    },

    // ── 12. WRITING TASK — WITNESS ─────────────────────────────────────────────
    {
      id: 'writing-witness',
      type: 'writing-task',
      title: 'The Witness',
      emoji: '✍️',
      imageSrc: '/assets/what-to-wear/witness.jpg',
      prompt: 'A fashion crime happened. You are a witness. Describe what the person was wearing when you saw them. Use Past Continuous, include at least 3 clothing words, 1 pattern, and 1 material.',
      wordBank: [
        'baggy checked hoodie',
        'plain denim jeans',
        'leather jacket',
        'sunglasses',
        'black boots',
        'striped T-shirt',
        'wool sweater',
      ],
      starter: 'Yesterday at 6 PM, I saw a suspicious person. He/She was wearing…',
      modelAnswer: 'Yesterday at 6 PM, I saw a suspicious person. He was wearing a baggy checked hoodie, plain denim jeans, and sunglasses. He was also wearing black leather boots.',
    },

    // ── 13. WRITING TASK — RED CARPET ──────────────────────────────────────────
    {
      id: 'writing-red-carpet',
      type: 'writing-task',
      title: 'The Red Carpet',
      emoji: '✍️',
      imageSrc: '/assets/what-to-wear/red-carpet.jpg',
      prompt: 'Imagine that next week you are at a party in Milan. Describe what you will be wearing. Use Future Continuous, include at least 3 clothing words, a material, and an accessory. Try to use "go with".',
      wordBank: [
        'red silk dress',
        'smart black suit',
        'high heels',
        'small leather bag',
        'silver earrings',
        'cotton shirt',
        'checked jacket',
        'sunglasses',
      ],
      starter: 'This time next week, I will be wearing…',
      modelAnswer: 'This time next week, I will be wearing a red silk dress and high heels. I will be holding a small leather bag. The bag will go with my silver earrings.',
    },

    // ── 14. ADVICE CARDS ───────────────────────────────────────────────────────
    {
      id: 'advice-cards',
      type: 'advice-cards',
      title: 'Give a piece of advice',
      emoji: '💼',
      functionalLanguage: [
        'You should wear…',
        'You shouldn\'t wear…',
        'You could wear…',
        'This would go with…',
        'Don\'t wear…',
      ],
      cards: [
        {
          situation: 'I\'m going to a job interview. What should I wear?',
          sampleAnswer: 'You should wear a smart suit or a plain shirt. You shouldn\'t wear shorts or casual clothes.',
        },
        {
          situation: 'I\'m going to a wedding party. What should I wear?',
          sampleAnswer: 'You could wear a floral dress or a smart suit. Don\'t wear white if you are not the bride.',
        },
        {
          situation: 'I\'m going to a housewarming party. What should I wear?',
          sampleAnswer: 'You could wear casual clothes, like jeans and a nice sweater. You don\'t need to dress up.',
        },
        {
          situation: 'I\'m going to a beach party. What should I wear?',
          sampleAnswer: 'You should wear sandals, sunglasses, and light clothes. A floral shirt or a loose dress would work well.',
        },
      ],
    },

    // ── 15. RESULTS CHECKLIST ──────────────────────────────────────────────────
    {
      id: 'results',
      type: 'results-checklist',
      title: 'Check your results!',
      emoji: '✅',
      checklist: [
        'describe clothes and outfits',
        'use B1 clothing vocabulary',
        'use Past Continuous to describe what someone was wearing',
        'use Future Continuous to describe what someone will be wearing',
        'use clothing phrasal verbs correctly',
        'give simple outfit advice',
      ],
    },

  ],
}

export default lesson
