import type { Lesson } from '../types/lesson'

// TODO(assets): Add JPGs under public/assets/meeting-the-guests/
// hero-dinner-party.jpg, etiquette-rules.jpg, party-warmup.jpg, dinner-dialogue.jpg,
// vocabulary-dinner.jpg, advice-situations.jpg, final-success.jpg

const lesson: Lesson = {
  id: 'meeting-the-guests',
  title: 'Meeting the Guests',
  level: 'B1',
  topic: 'Social English',
  description:
    'Dinner party etiquette, polite advice, and social rules — practise should, must, have to, and softer B1 phrases.',
  coverImage: '/assets/meeting-the-guests/hero-dinner-party.jpg',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Meeting the Guests',
      emoji: '🍽️',
      level: 'B1',
      subtitle: 'Dinner party etiquette, polite advice, and social rules in English.',
      imageSrc: '/assets/meeting-the-guests/hero-dinner-party.jpg',
      goals: [
        'Talk about hosting guests and being a guest',
        'Use B1 vocabulary for dinner parties and etiquette',
        'Give advice using should, must, have to, and polite phrases',
        'Discuss cultural differences and awkward social situations',
        'Write and say polite advice in realistic situations',
      ],
      words: [
        'guest',
        'host',
        'etiquette',
        'manners',
        'small talk',
        'awkward situation',
        'personal question',
        'cultural difference',
        'main course',
        'compliment',
      ],
      functionalLanguage: [
        'You should wait for the host before you start eating.',
        'You shouldn’t ask personal questions about money.',
        'You mustn’t be rude to the host.',
        'You usually have to arrive on time.',
        'You don’t have to bring an expensive gift.',
        'It’s considered rude to open a window without asking.',
        'If I were you, I’d apologise and explain.',
        'You’re supposed to thank the host before you leave.',
      ],
    },
    {
      id: 'wordlist',
      type: 'wordlist',
      title: 'Dinner party and etiquette vocabulary',
      emoji: '📚',
      words: [
        'guest',
        'host',
        'hostess',
        'invitation',
        'etiquette',
        'manners',
        'polite',
        'impolite',
        'rude',
        'respectful',
        'inappropriate',
        'personal question',
        'arrive on time',
        'make small talk',
        'greet someone',
        'shake hands',
        'bring a gift',
        'starter',
        'main course',
        'dessert',
        'compliment the food',
        'thank the host',
        'leave early',
        'split the bill',
        'cultural difference',
        'awkward situation',
      ],
    },
    {
      id: 'grammar-tabs',
      type: 'grammar-tabs',
      title: 'Advice and obligation',
      emoji: '📖',
      imageSrc: '/assets/meeting-the-guests/etiquette-rules.jpg',
      tabs: [
        {
          label: 'Should / shouldn’t',
          rules: [
            'Use should to give advice or express an opinion.',
            'Use shouldn’t to say something is a bad idea.',
            'The form is the same for all persons.',
            'Use the infinitive without “to” after should.',
          ],
          examples: [
            'You should arrive on time.',
            'You shouldn’t ask people how much they earn.',
            'He should thank the host.',
            'They shouldn’t start eating before everyone is ready.',
          ],
        },
        {
          label: 'Must / mustn’t',
          rules: [
            'Use must for strong obligation or strong advice.',
            'Use mustn’t when something is prohibited or clearly wrong.',
            'Use the infinitive without “to” after must.',
            'Must can sound strong, so use it carefully in polite conversation.',
          ],
          examples: [
            'You must ask the host before opening the window.',
            'You mustn’t smoke at the dinner table.',
            'Guests must be respectful.',
            'You mustn’t make rude comments about the food.',
          ],
        },
        {
          label: 'Have to / don’t have to / polite alternatives',
          rules: [
            'Use have to for rules or external obligations.',
            'Use don’t have to when something is not necessary.',
            'In polite advice, B1 speakers often use softer phrases.',
          ],
          examples: [
            'You have to arrive before dinner starts.',
            'You don’t have to bring an expensive gift.',
            'It would be better to ask first.',
            'You’re supposed to wait for the host.',
            'If I were you, I’d apologise.',
            'It’s considered rude to ask personal questions.',
          ],
        },
      ],
      highlights: [
        'should',
        'shouldn’t',
        'must',
        'mustn’t',
        'have to',
        'don’t have to',
        'supposed to',
        'considered rude',
        'If I were you',
      ],
    },
    {
      id: 'warm-up',
      type: 'warm-up-questions',
      title: 'Before the dinner party',
      emoji: '💬',
      images: [
        '/assets/meeting-the-guests/party-warmup.jpg',
        '/assets/meeting-the-guests/etiquette-rules.jpg',
        '/assets/meeting-the-guests/vocabulary-dinner.jpg',
        '/assets/meeting-the-guests/hero-dinner-party.jpg',
      ],
      questions: [
        {
          question: 'What makes someone a good guest?',
          hint: 'A good guest is polite, arrives on time, thanks the host, and respects the rules of the house.',
        },
        {
          question: 'What makes someone a good host?',
          hint: 'A good host welcomes people, prepares food or drinks, and makes guests feel comfortable.',
        },
        {
          question: 'What topics should people avoid during dinner?',
          hint: 'People often avoid money, politics, religion, health problems, and very personal questions.',
        },
        {
          question: 'What can make a party awkward?',
          hint: 'Being late, asking rude questions, complaining about food, or ignoring other guests can make a party awkward.',
        },
      ],
    },
    {
      id: 'vocabulary-match',
      type: 'vocabulary-match',
      title: 'Match the words with the meanings',
      emoji: '🔗',
      items: [
        { word: 'etiquette', definition: 'accepted rules of polite behaviour' },
        { word: 'inappropriate', definition: 'not suitable for a situation' },
        { word: 'host', definition: 'a person who invites and looks after guests' },
        { word: 'guest', definition: 'a person invited to someone’s home or event' },
        { word: 'small talk', definition: 'polite conversation about simple topics' },
        { word: 'starter', definition: 'a small dish served before the main course' },
        { word: 'main course', definition: 'the biggest or most important part of a meal' },
        { word: 'dessert', definition: 'sweet food eaten at the end of a meal' },
        { word: 'awkward', definition: 'uncomfortable or embarrassing' },
        { word: 'personal question', definition: 'a question about private information' },
        { word: 'compliment', definition: 'to say something nice about someone or something' },
        { word: 'split the bill', definition: 'to share the cost of a meal' },
      ],
    },
    {
      id: 'grammar-quiz',
      type: 'quiz-select',
      title: 'Choose the best option',
      emoji: '✅',
      instruction: 'Choose the best word or phrase for each sentence.',
      questions: [
        {
          sentence: 'You ___ ask the host before opening the window.',
          options: ['should', 'mustn’t', 'don’t have to'],
          answer: 'should',
        },
        {
          sentence: 'You ___ ask people how much money they earn. It’s too personal.',
          options: ['should', 'shouldn’t', 'have to'],
          answer: 'shouldn’t',
        },
        {
          sentence: 'Guests ___ be respectful, even if they don’t like the food.',
          options: ['must', 'don’t have to', 'shouldn’t'],
          answer: 'must',
        },
        {
          sentence: 'You ___ bring an expensive gift. Something small is enough.',
          options: ['must', 'don’t have to', 'mustn’t'],
          answer: 'don’t have to',
        },
        {
          sentence: 'You ___ start eating before the host invites everyone to begin.',
          options: ['shouldn’t', 'don’t have to', 'should'],
          answer: 'shouldn’t',
        },
        {
          sentence: 'If you are going to be late, you ___ message the host.',
          options: ['should', 'mustn’t', 'don’t have to'],
          answer: 'should',
        },
        {
          sentence: 'In some cultures, you ___ take off your shoes when entering someone’s home.',
          options: ['have to', 'mustn’t', 'shouldn’t'],
          answer: 'have to',
        },
        {
          sentence: 'You ___ make negative comments about the food.',
          options: ['mustn’t', 'don’t have to', 'should'],
          answer: 'mustn’t',
        },
        {
          sentence: 'If I were you, I ___ apologise.',
          options: ['would', 'must', 'have'],
          answer: 'would',
        },
        {
          sentence: 'It’s considered rude ___ personal questions at dinner.',
          options: ['asking', 'to ask', 'ask'],
          answer: 'to ask',
        },
      ],
    },
    {
      id: 'sentence-match',
      type: 'sentence-match',
      title: 'Match the problem with the best advice',
      emoji: '🧩',
      items: [
        {
          problem: 'I don’t know anyone at the party.',
          answer: 'You should make small talk and introduce yourself.',
        },
        {
          problem: 'I’m going to be 20 minutes late.',
          answer: 'You should send the host a quick message.',
        },
        {
          problem: 'I don’t like the food.',
          answer: 'You shouldn’t complain. Just eat a little and be polite.',
        },
        {
          problem: 'I accidentally asked a rude question.',
          answer: 'You should apologise and change the topic.',
        },
        {
          problem: 'I want to open the window.',
          answer: 'You should ask the host first.',
        },
        {
          problem: 'I forgot to bring a gift.',
          answer: 'You don’t have to panic. You can thank the host warmly instead.',
        },
        {
          problem: 'I’m not sure when to leave.',
          answer: 'You should watch what other guests do and leave politely.',
        },
        {
          problem: 'The conversation is getting too personal.',
          answer: 'You should politely change the subject.',
        },
      ],
    },
    {
      id: 'dialogue',
      type: 'dialogue-reading',
      title: 'Read the dialogue: An awkward dinner party',
      emoji: '💬',
      imageSrc: '/assets/meeting-the-guests/dinner-dialogue.jpg',
      characters: [
        { name: 'Jamie', colorClass: 'bg-orange-100 text-orange-900 ring-orange-200' },
        { name: 'Amalia', colorClass: 'bg-green-100 text-green-900 ring-green-200' },
      ],
      lines: [
        {
          speaker: 'Amalia',
          text: 'Whoa, this dinner party looks much fancier than I expected.',
        },
        {
          speaker: 'Jamie',
          text: 'It is. Jeremy’s parents host a dinner like this every year. They’re known for being very generous.',
        },
        {
          speaker: 'Amalia',
          text: 'There must be at least eighty people here. Do they always invite this many guests?',
        },
        {
          speaker: 'Jamie',
          text: 'Pretty much. They enjoy bringing people together.',
        },
        {
          speaker: 'Amalia',
          text: 'I’m starving. I might start with that steak over there.',
        },
        {
          speaker: 'Jamie',
          text: 'Actually, you should wait until the host invites everyone to begin.',
        },
        {
          speaker: 'Amalia',
          text: 'Really? I didn’t know that. I usually just eat when I’m hungry.',
        },
        {
          speaker: 'Jamie',
          text: 'At a dinner party, it’s more polite to wait. Especially when someone else is hosting.',
        },
        {
          speaker: 'Amalia',
          text: 'Fair enough. By the way, do you think they’re rich? I want to ask how much money they make.',
        },
        {
          speaker: 'Jamie',
          text: 'Please don’t. That’s a very personal question. You shouldn’t ask people about money at dinner.',
        },
        {
          speaker: 'Amalia',
          text: 'But everyone is probably thinking about it.',
        },
        {
          speaker: 'Jamie',
          text: 'Maybe, but good manners mean knowing what not to say.',
        },
        {
          speaker: 'Amalia',
          text: 'Okay, okay. I’ll keep quiet. But it’s really hot in here. I’ll open the window.',
        },
        {
          speaker: 'Jamie',
          text: 'You’d better ask first. It might be considered impolite to change something in someone else’s home without permission.',
        },
        {
          speaker: 'Amalia',
          text: 'So many rules! What if I make another mistake?',
        },
        {
          speaker: 'Jamie',
          text: 'Then just apologise. People usually understand if you’re trying to be respectful.',
        },
        {
          speaker: 'Amalia',
          text: 'Alright. I’ll ask the host, compliment the food, and avoid talking about money.',
        },
        {
          speaker: 'Jamie',
          text: 'Perfect. Now you sound like a professional guest.',
        },
      ],
      questions: [],
    },
    {
      id: 'comprehension',
      type: 'quiz-select',
      title: 'Check your understanding',
      emoji: '📝',
      instruction: 'Choose the best answer for each question.',
      questions: [
        {
          sentence: 'Where are Jamie and Amalia?',
          options: ['at a dinner party', 'at school', 'at a restaurant job interview'],
          answer: 'at a dinner party',
        },
        {
          sentence: 'Why does Jamie tell Amalia to wait before eating?',
          options: [
            'because the food is cold',
            'because it is more polite to wait for the host',
            'because she cannot eat steak',
          ],
          answer: 'because it is more polite to wait for the host',
        },
        {
          sentence: 'What personal topic does Amalia want to ask about?',
          options: ['money', 'travel', 'school'],
          answer: 'money',
        },
        {
          sentence: 'What does Jamie say about opening the window?',
          options: [
            'Amalia must open it immediately',
            'Amalia should ask first',
            'Amalia should leave the party',
          ],
          answer: 'Amalia should ask first',
        },
        {
          sentence: 'What should Amalia do if she makes a mistake?',
          options: ['leave immediately', 'laugh at the host', 'apologise'],
          answer: 'apologise',
        },
        {
          sentence: 'What does Amalia decide to do?',
          options: [
            'ask about money',
            'compliment the food and avoid personal questions',
            'start eating immediately',
          ],
          answer: 'compliment the food and avoid personal questions',
        },
      ],
    },
    {
      id: 'fill-gaps',
      type: 'fill-gaps',
      title: 'Complete the useful phrases',
      emoji: '✍️',
      instruction: 'Use the word bank. Type the missing word or phrase in each gap.',
      wordBank: [
        'should',
        'shouldn’t',
        'must',
        'don’t have to',
        'considered rude',
        'ask first',
        'personal question',
        'apologise',
        'host',
        'polite',
      ],
      questions: [
        { sentence: 'You ___ wait until the host invites everyone to begin.', hint: '', answer: 'should' },
        { sentence: 'You ___ ask people about money at dinner.', hint: '', answer: 'shouldn’t' },
        { sentence: 'Asking about someone’s salary is a ___.', hint: '', answer: 'personal question' },
        { sentence: 'You’d better ___ before opening the window.', hint: '', answer: 'ask first' },
        {
          sentence: 'It might be ___ to change something in someone else’s home.',
          hint: '',
          answer: 'considered rude',
        },
        { sentence: 'If you make a mistake, you should ___.', hint: '', answer: 'apologise' },
        { sentence: 'A good guest tries to be ___.', hint: '', answer: 'polite' },
        { sentence: 'The ___ is the person who invites people.', hint: '', answer: 'host' },
        { sentence: 'You ___ bring an expensive gift.', hint: '', answer: 'don’t have to' },
        { sentence: 'Guests ___ be respectful.', hint: '', answer: 'must' },
      ],
    },
    {
      id: 'advice-cards',
      type: 'advice-cards',
      title: 'What should they do?',
      emoji: '💡',
      functionalLanguage: [
        'You should…',
        'You shouldn’t…',
        'You’d better…',
        'If I were you, I’d…',
        'It would be better to…',
        'You’re supposed to…',
        'You mustn’t…',
      ],
      cards: [
        {
          situation: 'You arrived 25 minutes late to a dinner party.',
          sampleAnswer:
            'You should apologise to the host and explain briefly. You shouldn’t act as if nothing happened.',
        },
        {
          situation: 'You don’t like the main course, but the host asks for your opinion.',
          sampleAnswer:
            'If I were you, I’d say something polite and focus on something positive. You shouldn’t criticise the food directly.',
        },
        {
          situation: 'You want to leave early because you feel tired.',
          sampleAnswer:
            'It would be better to thank the host and explain politely. You shouldn’t disappear without saying goodbye.',
        },
        {
          situation: 'Another guest asks you how much money you earn.',
          sampleAnswer:
            'You could smile and change the topic. You don’t have to answer personal questions.',
        },
        {
          situation: 'You accidentally opened a window and someone looks annoyed.',
          sampleAnswer:
            'You should apologise and ask if they would like you to close it.',
        },
        {
          situation: 'You forgot to bring a gift.',
          sampleAnswer:
            'You don’t have to bring something expensive, but you should thank the host warmly or send a message later.',
        },
      ],
    },
    {
      id: 'roleplay',
      type: 'writing-task',
      title: 'Roleplay: Be a polite guest',
      emoji: '🎭',
      imageSrc: '/assets/meeting-the-guests/final-success.jpg',
      prompt:
        'Imagine you are invited to a dinner party in London. Prepare short answers for the situations below.',
      wordBank: [
        'Thank you for inviting me.',
        "It's lovely to meet you.",
        'The food is delicious.',
        'Would it be okay if I opened the window?',
        "I'd rather not talk about that, if that's okay.",
        'Thank you for a wonderful evening.',
      ],
      prompts: [
        'Greet the host.',
        'Make small talk with another guest.',
        'Compliment the food.',
        'Ask politely if you can open the window.',
        'Refuse to answer a personal question politely.',
        'Say goodbye and thank the host.',
      ],
    },
    {
      id: 'results',
      type: 'results-checklist',
      title: 'You did it!',
      emoji: '✅',
      checklist: [
        'use B1 vocabulary about dinner parties and etiquette',
        'explain polite and impolite behaviour',
        'use should, shouldn’t, must, mustn’t, have to, and don’t have to',
        'give advice in a polite way',
        'discuss awkward social situations',
        'take part in a simple dinner party roleplay',
      ],
    },
  ],
}

export default lesson
