import type { Lesson } from '../types/lesson'

const asset = (file: string) => `/assets/culture-shock-rules/${file}`

const lesson: Lesson = {
  id: 'culture-shock-rules',
  title: 'Culture Shock: Rules Around the World',
  level: 'B1',
  topic: 'Culture and customs',
  description:
    'Unusual customs, public behaviour, and rules around the world, with modals for permission, prohibition, necessity, and advice.',
  coverImage: asset('hero-dictionary.jpg'),
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Culture Shock: Rules Around the World',
      emoji: '🌍',
      level: 'B1',
      subtitle:
        'Talk about cultures, unusual rules, manners, and public behaviour in different countries.',
      imageSrc: asset('hero-dictionary.jpg'),
      goals: [
        "Read an article about other countries' cultures",
        'Learn and practise how to use modals correctly',
        'Learn new vocabulary related to culture, rules, and manners',
        'Discuss culture shock and unusual rules around the world',
      ],
      words: [
        'chew gum',
        'feed wild animals',
        'hammer nails',
        'chopsticks',
        'kitchen utensils',
        'tip the waiter',
        'tap water',
        'sacred places',
        'culture shock',
        'custom',
        'rule',
        'law',
        'forbidden',
        'allowed',
        'polite',
        'rude',
        'embarrassing',
        'slurp',
        'bottled water',
        'make noise',
        'in a hurry',
        'public behaviour',
      ],
      functionalLanguage: [
        "You shouldn't make noise when eating soup.",
        "You can't smoke in any restaurants or bars.",
        'You can drink the tap water.',
        "You mustn't wear shorts when visiting sacred places.",
        'You should always use utensils.',
        "You don't have to tip in some countries.",
      ],
    },
    {
      id: 'grammar-modals',
      type: 'grammar-tabs',
      title: 'Modals for rules, permission and necessity',
      emoji: '📖',
      imageSrc: asset('grammar-modals.jpg'),
      tabs: [
        {
          label: 'Must / have to',
          rules: [
            'Use must or have to to talk about obligation and necessity.',
            'Use the infinitive without to after must.',
            'Use have to when a rule or situation makes something necessary.',
          ],
          examples: [
            'I have to study tonight.',
            'Workers must wear safety jackets.',
          ],
          use: 'Obligation and necessity.',
        },
        {
          label: "Mustn't",
          rules: [
            "Use mustn't to say that something is not permitted.",
            "Mustn't is stronger than shouldn't.",
            'Use the infinitive without to after must not.',
          ],
          examples: ["You mustn't forget to write it."],
          use: 'Prohibition.',
        },
        {
          label: "Can / can't",
          rules: [
            'Use can to talk about permission.',
            "Use can't to say that something is not permitted.",
            'Use the same form for all persons.',
          ],
          examples: [
            'Can we work outside? Yes, you can.',
            "He can't take more than two pizzas.",
          ],
          use: 'Permission and prohibition.',
        },
        {
          label: "Need to / needn't",
          rules: [
            'Need to means something is necessary.',
            "Needn't means there is no obligation.",
            'Use the infinitive after need to and need not.',
          ],
          examples: [
            'My doctor says I need to relax more.',
            "Cans of soup needn't be kept in the fridge.",
          ],
          use: 'Necessity and no obligation.',
        },
        {
          label: "Should / shouldn't",
          rules: [
            'Use should and should not to give advice.',
            'Use should to say something is a good idea.',
            "Use shouldn't to say something is a bad idea.",
          ],
          examples: [
            'You should always use utensils.',
            "You shouldn't make noise when eating soup.",
          ],
          use: 'Advice and good or bad ideas.',
        },
      ],
      highlights: [
        'must',
        'have to',
        "mustn't",
        'can',
        "can't",
        'need to',
        "needn't",
        'should',
        "shouldn't",
      ],
    },
    {
      id: 'culture-facts-quiz',
      type: 'quiz-select',
      title: 'Quiz time!',
      emoji: '❓',
      imageSrc: asset('warmup-cultures.jpg'),
      instruction:
        'Choose the best answer. Then discuss the questions below with your partner.',
      questions: [
        {
          sentence: 'In Italy, roses are the best flowers to take to a dinner party.',
          options: ['true', 'false'],
          answer: 'false',
        },
        {
          sentence: 'In which country is showing up half an hour late considered rude?',
          options: ['Italy', 'Switzerland'],
          answer: 'Switzerland',
        },
        {
          sentence:
            'In India, if you are invited to your friend\'s house, which is the best way to eat?',
          options: ['using your right hand only', 'using a spoon'],
          answer: 'using your right hand only',
        },
        {
          sentence:
            'In which country do students knock on their desks after a very good lecture?',
          options: ['Germany', 'Thailand'],
          answer: 'Germany',
        },
        {
          sentence: 'How do most Spanish speakers write their full names?',
          options: [
            "father's last name only",
            "father's last name followed by mother's last name",
          ],
          answer: "father's last name followed by mother's last name",
        },
        {
          sentence: 'Discussion: Which fact impressed you the most?',
          options: [
            'I can answer this with my partner',
            'I need more examples first',
          ],
          answer: 'I can answer this with my partner',
        },
        {
          sentence: 'Discussion: Name one interesting fact about your country.',
          options: [
            'I can answer this with my partner',
            'I need more examples first',
          ],
          answer: 'I can answer this with my partner',
        },
      ],
    },
    {
      id: 'party-types',
      type: 'vocabulary-match',
      title: 'Party types and definitions',
      emoji: '🎉',
      imageSrc: asset('party-types.jpg'),
      items: [
        {
          word: 'barbecue / BBQ party',
          definition:
            "We had a party in Jamie's backyard. We ate grilled vegetables and some snacks.",
        },
        {
          word: 'formal party',
          definition:
            "It was Nick's birthday party. We were wearing nice suits and beautiful dresses.",
        },
        {
          word: 'housewarming party',
          definition:
            'My cousins have just moved to a new house. They had a great party yesterday to celebrate.',
        },
        {
          word: 'soft drinks',
          definition:
            'I prefer drinking sweet, fizzy, refreshing and alcohol-free drinks, for example Coke or Pepsi.',
        },
        {
          word: 'dinner party',
          definition:
            'We were sitting at the table and eating. The food was really delicious.',
        },
      ],
    },
    {
      id: 'modal-practice',
      type: 'quiz-select',
      title: 'Fill in the gaps with modals',
      emoji: '✅',
      imageSrc: asset('grammar-practice.jpg'),
      instruction:
        'Choose the best modal verb. Use the word box for the first five sentences, then practise should and should not.',
      options: ["don't have to", 'should', 'can', 'must', 'need'],
      questions: [
        {
          sentence: "It's too late. I ___ go home now.",
          answer: 'must',
        },
        {
          sentence: 'Are you sure? But you ___ go to school tomorrow.',
          answer: "don't have to",
        },
        {
          sentence: "Yep, you're right. But I ___ get some sleep.",
          answer: 'should',
        },
        {
          sentence: 'My coach says I ___ to relax more before competitions.',
          answer: 'need',
        },
        {
          sentence: 'I ___ give you a ride home on my motorbike. Hop on!',
          answer: 'can',
        },
        {
          sentence: 'You ___ relax more.',
          options: ['should', "shouldn't"],
          answer: 'should',
        },
        {
          sentence: 'You ___ eat so much cake.',
          options: ['should', "shouldn't"],
          answer: "shouldn't",
        },
        {
          sentence: 'You ___ have an eye test.',
          options: ['should', "shouldn't"],
          answer: 'should',
        },
        {
          sentence: 'You ___ use your phone all day.',
          options: ['should', "shouldn't"],
          answer: "shouldn't",
        },
        {
          sentence: 'You ___ have some fun.',
          options: ['should', "shouldn't"],
          answer: 'should',
        },
        {
          sentence: 'You ___ watch TV all night.',
          options: ['should', "shouldn't"],
          answer: "shouldn't",
        },
        {
          sentence: 'He ___ study harder.',
          options: ['should', 'must not', "needn't"],
          answer: 'should',
        },
        {
          sentence: 'She ___ make noise after 10 pm.',
          options: ["mustn't", 'should', "needn't"],
          answer: "mustn't",
        },
        {
          sentence: 'They ___ eat less hamburgers and French fries.',
          options: ['should', "can't", 'need to'],
          answer: 'should',
        },
        {
          sentence: 'She ___ visit a doctor.',
          options: ['should', "mustn't", "needn't"],
          answer: 'should',
        },
        {
          sentence: 'She ___ have a rest.',
          options: ['should', "can't", 'must'],
          answer: 'should',
        },
        {
          sentence: 'Kids ___ eat too much sugar.',
          options: ["shouldn't", 'must', 'can'],
          answer: "shouldn't",
        },
      ],
      explanations: [
        { term: 'must / have to', meaning: 'obligation' },
        { term: "mustn't / can't", meaning: 'prohibition' },
        { term: "needn't / don't have to", meaning: 'no obligation' },
        { term: 'should / should not', meaning: 'advice' },
      ],
    },
    {
      id: 'rules-vocabulary',
      type: 'picture-vocabulary',
      title: 'Label the pictures and complete the sentences',
      emoji: '🧩',
      imageSrc: asset('vocabulary-rules.jpg'),
      instruction:
        'Use the numbered picture set to label the actions and objects, then complete the sentences.',
      wordBank: [
        'chew gum',
        'feed wild animals',
        'tip the waiter',
        'hammer nails',
        'chopsticks',
        'kitchen utensils',
      ],
      cards: [
        { label: 'Picture 1', answer: 'chew gum', image: asset('chew-gum.jpg') },
        { label: 'Picture 2', answer: 'feed wild animals', image: asset('feed-wild-animals.jpg') },
        { label: 'Picture 3', answer: 'hammer nails', image: asset('hammer-nails.jpg') },
        { label: 'Picture 4', answer: 'chopsticks', image: asset('chopsticks.jpg') },
        { label: 'Picture 5', answer: 'kitchen utensils', image: asset('kitchen-utensils.jpg') },
        { label: 'Picture 6', answer: 'tip the waiter', image: asset('tip-waiter.jpg') },
      ],
      gapInstruction: 'Complete the sentences with the words from the box.',
      gapWordBank: [
        'chopsticks',
        'tap water',
        'chewing gum',
        'hammering nails',
        'sacred places',
        'tip the waiter',
      ],
      gaps: [
        {
          sentence: "His worst habit is ___, it's so annoying!",
          answer: 'chewing gum',
        },
        {
          sentence: "I've visited lots of churches and other ___ in Italy.",
          answer: 'sacred places',
        },
        {
          sentence:
            "You should avoid drinking ___, it's usually treated with chemicals.",
          answer: 'tap water',
        },
        {
          sentence: 'Please, stop ___! I have a headache.',
          answer: 'hammering nails',
        },
        {
          sentence: 'Did you ___? He provided a really great service.',
          answer: 'tip the waiter',
        },
        {
          sentence: 'Oh no, they forgot to give me ___! How should I eat my sushi?',
          answer: 'chopsticks',
        },
      ],
    },
    {
      id: 'prediction',
      type: 'quiz-select',
      title: 'Before reading: true or false?',
      emoji: '🔮',
      imageSrc: asset('prediction-true-false.jpg'),
      instruction:
        'Predict whether these statements are true or false. Read the article next, then come back and check.',
      options: ['true', 'false'],
      questions: [
        {
          sentence: 'In Singapore, women are not allowed to drive a car.',
          answer: 'false',
        },
        {
          sentence: "In Germany, it's forbidden to buy or chew gum.",
          answer: 'false',
        },
        {
          sentence:
            "In Saudi Arabia, unmarried women can't get a visa to visit other countries.",
          answer: 'true',
        },
        {
          sentence: 'In South Korea, you should eat your rice with chopsticks.',
          answer: 'false',
        },
        {
          sentence: 'In Italy, you must order a cappuccino after 11 am.',
          answer: 'false',
        },
        {
          sentence: "In Germany, you can't wash your car on the street.",
          answer: 'true',
        },
      ],
    },
    {
      id: 'rules-article',
      type: 'country-article',
      title: 'Rules around the world',
      emoji: '🗺️',
      instruction:
        'Read the lesson text and notice how the modal verbs express rules, advice, permission, and prohibition.',
      note:
        'This article is lesson text for language practice. Some cultural or legal claims may be simplified or outdated, so do not use them as current travel or legal advice.',
      countries: [
        {
          name: 'Saudi Arabia',
          imageSrc: asset('saudi-arabia.jpg'),
          facts: [
            'Women are not allowed to drive cars.',
            "Unmarried women can't get a visa to visit other countries.",
            'Even foreign women must cover their whole body and all their hair while going out.',
            'Foreign women can wear what they like only inside special foreign buildings.',
          ],
        },
        {
          name: 'Singapore',
          imageSrc: asset('singapore.jpg'),
          facts: [
            "It's forbidden to buy or chew gum.",
            'A person cannot get through passport control if he or she is dressed really messily.',
            "You mustn't feed wild birds or cats.",
            "You can't buy fireworks.",
          ],
        },
        {
          name: 'Germany',
          imageSrc: asset('germany.jpg'),
          facts: [
            'You can drive at any speed on the highway.',
            'You should call your colleagues by their family names.',
            "You mustn't play loud music or hammer nails between noon and 3 pm.",
            "You can't wash your car on the street.",
            "You can't have a shower after 22:00.",
          ],
        },
        {
          name: 'South Korea',
          imageSrc: asset('south-korea.jpg'),
          facts: [
            "You shouldn't write someone's name with red ink.",
            "You shouldn't eat your rice with chopsticks.",
            "You don't have to tip.",
            "You shouldn't eat while you are walking.",
            "You shouldn't pick up your bowl while you are eating.",
            "You shouldn't make noise when you are eating noodles.",
            'You should always use utensils.',
          ],
        },
        {
          name: 'Italy',
          imageSrc: asset('italy.jpg'),
          facts: [
            'You should not overtip. Waiters in Italy generally have normal salaries, so they do not expect big tips from customers.',
            "You shouldn't order a cappuccino after 11 am.",
            "You mustn't wear shorts, a crop top or flip-flops when visiting sacred places.",
            "You can't stop a taxi on the street. You have to make a call or go to special stops and wait for it.",
          ],
        },
      ],
    },
    {
      id: 'country-match',
      type: 'sentence-match',
      title: 'Match the rules with the countries',
      emoji: '🌐',
      imageSrc: asset('tic-tac-toe-countries.jpg'),
      items: [
        {
          problem:
            "You mustn't wear shorts, a crop top or flip-flops when visiting sacred places.",
          answer: 'Italy',
        },
        {
          problem: 'You should always use utensils.',
          answer: 'South Korea',
        },
        {
          problem:
            "You mustn't play loud music or hammer nails between noon and 3 pm.",
          answer: 'Germany',
        },
        {
          problem: "You mustn't feed wild birds or cats.",
          answer: 'Singapore',
        },
        {
          problem:
            'All women must cover their whole body and all their hair while going out.',
          answer: 'Saudi Arabia',
        },
      ],
    },
    {
      id: 'article-gap-fill',
      type: 'quiz-select',
      title: 'Read again and choose the correct option',
      emoji: '📝',
      imageSrc: asset('modal-choice.jpg'),
      instruction:
        'Complete the article extracts with the correct modal verb.',
      options: ['must', "can't", 'can', "mustn't", "shouldn't"],
      questions: [
        {
          sentence:
            'Saudi Arabia: Even foreign women ___ cover their whole body and all their hair while going out.',
          answer: 'must',
        },
        {
          sentence: "Singapore: You ___ buy or chew gum.",
          answer: "can't",
        },
        {
          sentence: "Singapore: You ___ buy fireworks.",
          answer: "can't",
        },
        {
          sentence: 'Germany: You ___ drive at any speed on the highway.',
          answer: 'can',
        },
        {
          sentence:
            "Germany: You ___ play loud music or hammer nails between noon and 3 pm.",
          answer: "mustn't",
        },
        {
          sentence:
            "South Korea: You ___ write someone's name with red ink.",
          answer: "shouldn't",
        },
        {
          sentence:
            'South Korea: You ___ pick up your bowl while you are eating.',
          answer: "shouldn't",
        },
        {
          sentence:
            "Italy: You ___ wear shorts, a crop top or flip-flops when visiting sacred places.",
          answer: "mustn't",
        },
        {
          sentence: "Italy: You ___ stop a taxi on the street.",
          answer: "can't",
        },
      ],
    },
    {
      id: 'dialogue-culture-shock',
      type: 'dialogue-gap-fill',
      title: 'Complete the dialogue',
      emoji: '💬',
      imageSrc: asset('dialogue-culture-shock.jpg'),
      instruction:
        'Choose words from the bank to complete Billy and Amalia\'s conversation about culture shock.',
      characters: [
        { name: 'Billy', colorClass: 'bg-orange-100 text-orange-900 ring-orange-200' },
        { name: 'Amalia', colorClass: 'bg-green-100 text-green-900 ring-green-200' },
      ],
      wordBank: [
        'Japan',
        'cultures',
        'embarrassing',
        'smoke',
        'make noise',
        'in a hurry',
        'slurped',
        "people's lives",
        'bottled water',
        'shocked by',
        'tap water',
        'interesting things',
        'culture shock',
      ],
      answers: [
        'cultures',
        "people's lives",
        'culture shock',
        'shocked by',
        'interesting things',
        'in a hurry',
        'smoke',
        'Japan',
        'slurped',
        'make noise',
        'embarrassing',
        'tap water',
        'bottled water',
      ],
      lines: [
        { speaker: 'Billy', text: 'Hey, Amalia! Why do you look so upset?' },
        { speaker: 'Amalia', text: "Hey! I'm not upset, I'm just thinking." },
        { speaker: 'Billy', text: "You're just thinking? Wow! That's a first for you!" },
        {
          speaker: 'Amalia',
          text:
            "Yeah, yeah. Really funny. I'm wondering about the differences between ___ and how other people, countries and cultures are different from us.",
        },
        {
          speaker: 'Billy',
          text:
            'Wow! You were not joking when you said that you were thinking. Have you ever travelled to another country before?',
        },
        {
          speaker: 'Amalia',
          text:
            'Only a few times, with my family. It was so interesting to see how ___ were different than my own.',
        },
        { speaker: 'Billy', text: 'So, you had ___?' },
        {
          speaker: 'Amalia',
          text:
            'I would not say culture shock. I was not ___ anything and I did not say "OH MY GOD!" about anything.',
        },
        {
          speaker: 'Billy',
          text: 'I understand. So, tell me, what were some ___ you have experienced?',
        },
        {
          speaker: 'Amalia',
          text:
            'Well, when I was in New York it was crazy how fast people moved. They were always ___. Run to the metro! Run to the cafe! Run with your coffee to work! I could not believe it.',
        },
        {
          speaker: 'Billy',
          text:
            'I have been to America before too. I did not go to New York but to the West Coast. Many people there do not smoke. I do not smoke, but everywhere I went people said to me "you cannot ___ in any restaurants or bars!"',
        },
        { speaker: 'Amalia', text: 'Why did they say that to you?' },
        {
          speaker: 'Billy',
          text:
            'I have no idea! I was not even in a restaurant or bar. I was walking on the street!',
        },
        {
          speaker: 'Amalia',
          text:
            'One time I was with my mom in ___ and we ordered some soup in a cafe. We enjoyed it very much but every time we ___, the people around us would stare and shake their heads!',
        },
        {
          speaker: 'Billy',
          text: "I know why! You shouldn't ___ when eating soup. It's really rude!",
        },
        {
          speaker: 'Amalia',
          text:
            'Our waitress explained that to us after we finished and after the other customers stared at us during our meal.',
        },
        { speaker: 'Billy', text: 'That sounds ___!' },
        { speaker: 'Amalia', text: 'It was!' },
        { speaker: 'Billy', text: 'When you were in Japan, did you drink ___?' },
        {
          speaker: 'Amalia',
          text:
            'Yeah, my mom and I drank it every day. I did not know it until we visited but you can drink the tap water there. It was very nice to be honest.',
        },
        {
          speaker: 'Billy',
          text:
            'Interesting. I prefer ___. I really like holding the bottle. Feels good in my hands.',
        },
        {
          speaker: 'Amalia',
          text:
            'Extra money feels good in my pockets because I prefer not to pay for bottled water.',
        },
      ],
    },
    {
      id: 'error-correction',
      type: 'error-correction',
      title: 'Correct the modal mistakes',
      emoji: '🔧',
      imageSrc: asset('advice-match.jpg'),
      instruction:
        'Rewrite each sentence with the correct modal grammar. Remember: modal verb + infinitive without to.',
      example: {
        sentence: 'I can to run very fast.',
        correction: 'I can run very fast.',
      },
      tasks: [
        {
          sentence: "Billy doesn't can speak French very well.",
          answer: "Billy can't speak French very well.",
        },
        {
          sentence: 'You must visiting your parents tonight.',
          answer: 'You must visit your parents tonight.',
        },
        {
          sentence: "You don't should gossip about your friend.",
          answer: "You shouldn't gossip about your friend.",
        },
        {
          sentence:
            "He needn't going shopping. There is enough food in the fridge.",
          answer:
            "He needn't go shopping. There is enough food in the fridge.",
        },
        {
          sentence: "She doesn't must post it on Instagram. It's private.",
          answer: "She mustn't post it on Instagram. It's private.",
        },
        {
          sentence: 'I have take my car to the service station.',
          answer: 'I have to take my car to the service station.',
        },
      ],
    },
    {
      id: 'final-writing',
      type: 'writing-task',
      title: 'Write about cultures and rules',
      emoji: '✍️',
      imageSrc: asset('travel-world.jpg'),
      prompt:
        'Write as many facts about other cultures as you can. Use modal verbs from the word bank.',
      wordBank: [
        'must',
        "mustn't",
        'can',
        "can't",
        'have to',
        "don't have to",
        'need to',
        "needn't",
        'should',
        "shouldn't",
      ],
      starter: 'In Japan, you can drink tap water.',
      modelAnswer:
        "In Japan, you can drink tap water. In Italy, you shouldn't order a cappuccino after 11 am. In South Korea, you shouldn't write someone's name with red ink. In Singapore, you can't buy chewing gum. In Germany, you mustn't make noise at certain times.",
    },
    {
      id: 'results',
      type: 'results-checklist',
      title: 'YOU ROCK!',
      emoji: '🏁',
      imageSrc: asset('final-success.jpg'),
      checklist: [
        "discuss other countries' cultures",
        'talk about unusual customs and public behaviour',
        'use must, have to, must not, can, cannot, need to, need not, should, and should not',
        'use new vocabulary related to rules and culture shock',
        'write short facts about cultures using modal verbs',
      ],
    },
  ],
}

export default lesson
