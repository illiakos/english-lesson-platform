import type { Lesson } from '../types/lesson'

const lesson: Lesson = {
  id: 'mystery-story',
  title: 'Mystery story',
  level: 'B1',
  topic: 'Narrative and Past Perfect',
  description:
    'Past Perfect storytelling, atmospheric vocabulary, campfire riddles, and narrative writing practice.',
  coverImage: '/assets/mystery-story/hero.jpg',
  sections: [
    {
      id: 'mystery-hero',
      type: 'hero',
      title: 'Mystery story',
      emoji: '🕵️‍♂️',
      level: 'B1',
      subtitle:
        'Learn how to tell gripping past stories using the Past Perfect tense and atmospheric vocabulary.',
      imageSrc: '/assets/mystery-story/hero.jpg',
      goals: [
        'learn and practise the past perfect',
        'revise the past forms of verbs',
        'learn how to tell stories in the past',
        'learn new vocabulary related to the topic',
      ],
      words: [
        'riverside',
        'wonder',
        'blow',
        'rub (eyes)',
        'splash',
        'to stretch',
        'flash',
        'hiss',
      ],
      functionalLanguage: [
        "It was late at night and I'd had a long and difficult day at work.",
        'When I woke up, the moon had moved behind a cloud and it was very dark and cold.',
      ],
    },
    {
      id: 'mystery-wordlist',
      type: 'wordlist',
      title: 'Vocabulary Focus',
      emoji: '📚',
      words: [
        'riverside',
        'wonder',
        'blow',
        'rub',
        'splash',
        'stretch',
        'flash',
        'hiss',
      ],
    },
    {
      id: 'mystery-phrasebox',
      type: 'phrasebox',
      title: 'Label the Pictures',
      emoji: '🖼️',
      options: ['riverside', 'hiss', 'blow', 'splash', 'flash', 'rub'],
      cards: [
        { image: '/assets/mystery-story/vocab-1.jpg', answer: 'blow' },
        { image: '/assets/mystery-story/vocab-2.jpg', answer: 'hiss' },
        { image: '/assets/mystery-story/vocab-3.jpg', answer: 'splash' },
        { image: '/assets/mystery-story/vocab-4.jpg', answer: 'rub' },
        { image: '/assets/mystery-story/vocab-5.jpg', answer: 'flash' },
        { image: '/assets/mystery-story/vocab-6.jpg', answer: 'riverside' },
      ],
    },
    {
      id: 'mystery-vocab-match',
      type: 'vocabulary-match',
      title: 'Match Words with Definitions',
      emoji: '🧠',
      items: [
        { word: 'a flash', definition: 'a sudden bright light that quickly disappears' },
        { word: 'to hiss', definition: 'to make a noise like a long "SSSSS" sound' },
        { word: 'to splash', definition: 'to strike a liquid' },
        { word: 'to stretch', definition: 'to spread over a large area' },
        { word: 'a riverside', definition: 'the land along the edges of a river' },
        { word: 'to blow', definition: 'to move and make currents of air' },
        { word: 'to wonder', definition: 'to feel great surprise at something' },
      ],
    },
    {
      id: 'mystery-warmup',
      type: 'warm-up-questions',
      title: 'Mystery & Strange Occurrences',
      emoji: '💬',
      images: [
        '/assets/mystery-story/warmup-1.jpg',
        '/assets/mystery-story/warmup-2.jpg',
      ],
      questions: [
        {
          question: 'Do you like mystery stories? Why?',
          hint: 'Think about suspense, plot twists, uncovering secrets, or detective work.',
        },
        {
          question: 'Has something mystical and strange ever happened to you?',
          hint: 'Recall an unexplainable event, an uncanny coincidence, or a strange dream.',
        },
        {
          question: 'Would you like to star in a mystery movie?',
          hint: "Consider if you'd like to play the brilliant detective, a witness, or the mysterious character.",
        },
        {
          question: 'Do you like walking along the riverside?',
          hint: 'Think about whether you find it peaceful or spooky when it grows dark.',
        },
        {
          question: 'Do you splash cold water on your face in the morning?',
          hint: 'Consider if it helps wake you up or if you prefer a gentler routine.',
        },
        {
          question: 'Do you like feeling the breeze blowing through the trees?',
          hint: 'Think about how it sounds in a thick, quiet forest.',
        },
      ],
    },
    {
      id: 'mystery-grammar-tabs',
      type: 'grammar-tabs',
      title: 'Understanding Past Perfect (Simple)',
      emoji: '⚡',
      tabs: [
        {
          label: 'Positive',
          rules: [
            'I/you/we/they/he/she/it + had + Ved (3rd form for irregular verbs)',
          ],
          examples: [
            'I had walked in the park.',
            'They had worked in a factory.',
            'She had learnt English.',
          ],
        },
        {
          label: 'Negative',
          rules: [
            "I/you/we/they/he/she/it + hadn't + Ved (3rd form for irregular verbs)",
          ],
          examples: [
            "I hadn't walked in the park.",
            "They hadn't worked in a factory.",
            "She hadn't learnt English.",
          ],
        },
        {
          label: 'Question',
          rules: [
            'Had + I/you/we/they/he/she/it + Ved (3rd form for irregular verbs)?',
          ],
          examples: [
            'Had I walked in the park?',
            'Had they worked in a factory?',
            'Had she learnt English?',
          ],
        },
      ],
      highlights: ['had', "hadn't", 'V-ed', '3rd form', 'time up to a certain point in the past'],
    },
    {
      id: 'mystery-grammar-practice',
      type: 'grammar-practice',
      title: 'Mastering Past Action Sequences',
      emoji: '✍️',
      activityATenseChoices: ['Present Simple', 'Past Simple', 'Past Perfect', 'Present Perfect'],
      activityA: [
        {
          sentence: 'The wave destroyed the sandcastle that we ___.',
          answer: 'Present Simple',
        },
        {
          sentence: "He wasn't hungry because he ___ anything all day.",
          answer: 'Present Simple',
        },
      ],
      activityB: [
        {
          sentence: 'After Yuki had ___ (finish) her work, we went to lunch.',
          answer: 'finished',
        },
        { sentence: 'After she had ___ (move) out, I found her pad.', answer: 'moved' },
        {
          sentence: "I hadn't ___ (eat) at that restaurant before today.",
          answer: 'eaten',
        },
        { sentence: 'They had ___ (be) in business together.', answer: 'been' },
        { sentence: 'We had ___ (spend) our holiday in Italy.', answer: 'spent' },
        {
          sentence: 'When they arrived the match had already ___ (start).',
          answer: 'started',
        },
        {
          sentence: 'They had ___ (ride) their bikes before they met us.',
          answer: 'ridden',
        },
      ],
      activityC: [
        {
          sentence:
            'She was tired because she [hadn\'t slept / didn\'t sleep] well the night before.',
          options: ["hadn't slept", "didn't sleep"],
          answer: "hadn't slept",
        },
        {
          sentence: 'He was late to work because he [had broken / broke] his bike.',
          options: ['had broken', 'broke'],
          answer: 'had broken',
        },
        {
          sentence:
            'My mother was worried because I [hadn\'t called / didn\'t call] her for a couple of days.',
          options: ["hadn't called", "didn't call"],
          answer: "hadn't called",
        },
        {
          sentence: 'My brother was angry because I [had lost / lost] his phone.',
          options: ['had lost', 'lost'],
          answer: 'had lost',
        },
        {
          sentence: 'She had never [seen / saw] a tiger before.',
          options: ['seen', 'saw'],
          answer: 'seen',
        },
        {
          sentence: 'He twisted his ankle because he [had fallen / fell] from the bike.',
          options: ['had fallen', 'fell'],
          answer: 'had fallen',
        },
      ],
    },
    {
      id: 'mystery-grammar-transformations',
      type: 'true-false-quiz',
      title: 'Sentence Transformations & Correcting Mistakes',
      emoji: '🛠️',
      statements: [
        {
          statement:
            "To make negative: 'She had slipped on a banana skin' becomes 'She hadn't slipped on a banana skin'.",
          answer: true,
        },
        {
          statement:
            "To make negative: 'He had had breakfast' becomes 'He hadn't had breakfast'.",
          answer: true,
        },
        {
          statement:
            "To make negative: 'Jamie had done his homework' becomes 'Jamie didn't do his homework'.",
          answer: false,
        },
        {
          statement:
            "To make interrogative: 'They had started the race well' becomes 'Had they started the race well?'.",
          answer: true,
        },
        {
          statement:
            "To make interrogative: 'She had made her decision before' becomes 'Did she have made her decision before?'.",
          answer: false,
        },
        {
          statement:
            "Error correction: 'Billy was very tired because he had studyed too much' contains a spelling mistake ('studied').",
          answer: true,
        },
        {
          statement:
            "Error correction: 'She watched YouTube after the lesson had finishes' is grammatically correct.",
          answer: false,
        },
        {
          statement:
            "Error correction: 'She didn't eaten at that restaurant before today' should be 'She hadn't eaten...'.",
          answer: true,
        },
      ],
    },
    {
      id: 'mystery-riddle-builder',
      type: 'sentence-builder',
      title: 'Order the Words to Solve the Riddle!',
      emoji: '🧩',
      prompt: 'Rearrange the mixed components to spell out the final solution discovered by Martha.',
      sentences: [
        {
          chunks: ['The', "horse's", 'name', 'is', 'Friday'],
          correctOrder: ['The', "horse's", 'name', 'is', 'Friday'],
        },
        {
          chunks: ['Martha', 'had', 'forgotten', 'to take', 'a sweater'],
          correctOrder: ['Martha', 'had', 'forgotten', 'to take', 'a sweater'],
        },
        {
          chunks: ['Sea monsters', 'do not', 'live', 'in the river'],
          correctOrder: ['Sea monsters', 'do not', 'live', 'in the river'],
        },
      ],
    },
    {
      id: 'mystery-reading',
      type: 'email-reading',
      title: "Campfire Tales: The Story of Martha's Riddle",
      emoji: '📖',
      email: {
        subject: "Jamie's Spooky Campfire Chronicle",
        body: [
          'Here we go... It was late at night and Martha had had a long and difficult day at work. While she was walking home, the moon moved behind the clouds and it was very dark and cold.',
          "Martha was walking along the riverside in the dark and she couldn't see anything. She rubbed her eyes but everything all around was dark and black. She could hear the wind blowing, the riverside flowing, and splashes of fish in the river. She even thought she had heard a hiss of a snake.",
          "Martha walked and walked, but she couldn't see anything. She had been walking for at least fifteen minutes when she saw a big flash of light! After the flash, she still couldn't see! But, she could see something in front of her! In front of her was...",
          "Out of the light walked a person dressed in a black robe! He looked like Death and he spoke to Martha. He said: 'Martha! I have a riddle for you! If you answer correctly, I will remove the darkness and you can go home! If you cannot answer the riddle, I will take your soul!'",
          "Martha agreed and listened to the riddle. The man in black said: 'A cowboy rides into town on Friday, stays for two days and leaves on Friday. Martha... How did he do it?'",
          'Martha thought for a long time... And finally answered... Correctly! The man in black removed the darkness and Martha could see again and find her way home. She had been so scared but was now happy to go home.',
        ],
        closing: ['The Secret Riddle Key Solution:', "The cowboy's horse was named Friday!"],
      },
      questions: [
        {
          question: "Is this Yuki's first time camping?",
          sampleAnswer: 'Yes, it is. She packed her bags but had forgotten to take a sweater.',
        },
        {
          question: 'Where was Martha walking?',
          sampleAnswer: 'She was walking along the riverside in the dark and cold night.',
        },
        {
          question: 'Why did she rub her eyes?',
          sampleAnswer:
            'Because everything all around her was dark and black, and she was trying to see through the darkness.',
        },
        {
          question: 'What did the person in a black robe say to Martha?',
          sampleAnswer:
            'He offered her a riddle to save her soul and remove the darkness so she could find her way home.',
        },
        {
          question: 'What happened next after the encounter?',
          sampleAnswer:
            'She thought carefully, answered correctly, and the man in black removed the darkness.',
        },
      ],
    },
    {
      id: 'mystery-writing',
      type: 'writing-task',
      title: 'Write a Scary Story in Past Perfect',
      emoji: '✍️',
      prompt:
        "Draft your own short narrative suspense story. Integrate at least three vocabulary terms from today's core wordlist alongside correct executions of the Past Perfect tense context.",
    },
    {
      id: 'mystery-results',
      type: 'results-checklist',
      title: 'Performance Outcomes',
      emoji: '🏆',
      checklist: [
        'tell mystery and narrative suspense stories in past time horizons',
        'correctly apply Past Perfect vs Past Simple context markers',
        'harness rich sensory imagery verbs such as hiss, flash, splash, and blow',
      ],
    },
  ],
}

export default lesson
