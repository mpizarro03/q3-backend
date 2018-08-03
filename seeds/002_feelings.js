
exports.seed = function(knex, Promise) {

  return knex('feelings').del()
    .then(function () {

      return knex('feelings').insert([
        {
          id: 1,
          name: 'Quality Time',
          description: 'Time spent in giving another person one\'s undivided attention in order to strengthen a relationship, especially with reference to working parents and their child or children.',
          is_loved: true,
          is_default: true
        },
        {
          id: 2,
          name: 'Sexual Intimacy',
          description: 'An emotional state that is often reserved for just one person. Ideally, sex in a loving relationship should be the physical embodiment of intimacy.',
          is_loved: true,
          is_default: false
        },
        {
          id: 3,
          name: 'Alone Time',
          description: 'I need a lot of time to myself so I can recharge for being social.',
          is_loved: true,
          is_default: false
        },
        {
          id: 4,
          name: 'Harsh Anger',
          description: 'Expression of intense anger reminds me of my abusive father',
          is_loved: false,
          is_default: true
        },
        {
          id: 5,
          name: 'Not Contributing',
          description: "It really makes me feel like you don't respect my time when you don't contribute to house hold chores, including administrative things like budgets etc",
          is_loved: false,
          is_default: false
        },
        {
          id: 6,
          name: 'Work Too Much',
          description: "I don't mind that you work a lot, but you stop taking care of your personal health when you are overworked, and part of taking care of others is taking care of yourself.",
          is_loved: false,
          is_default: false
        },
        {
          id: 7,
          name: 'Intimate Conversation',
          description: 'I enjoy it when we are able to talk about our feelings, and I feel no judgment because our emotional connection is strong.',
          is_loved: true,
          is_default: true
        },
        {
          id: 8,
          name: 'Harsh Anger',
          description: 'A strong feeling of annoyance, displeasure, or hostility.',
          is_loved: false,
          is_default: true
        },
        {
          id: 9,
          name: 'Passivity',
          description: 'Acceptance of what happens, without active response or resistance.',
          is_loved: false,
          is_default: true
        },
        {
          id: 10,
          name: 'Critical',
          description: 'Expressing adverse or disapproving comments or judgments',
          is_loved: false,
          is_default: true
      },
        {
          id: 11,
          name: 'No Voice',
          description: 'I feel like you don\'t hear what I\'m saying, or often that my opinion and wants and needs are not important.',
          is_loved: false,
          is_default: true
      },
        {
          id: 12,
          name: 'Unsolicited Advice',
          description: 'When you give me advice without my asking, I feel like you have no faith in my life choices and that you are judging me.',
          is_loved: false,
          is_default: true
        },
        {
          id: 13,
          name: 'Stonewalling',
          description: 'Delay or block (a request, process, or person) by refusing to answer questions or by giving evasive replies.',
          is_loved: false,
          is_default: true
        },
        {
          id: 14,
          name: 'Defensive',
          description: 'When you are very anxious to challenge or avoid criticism, I feel like it\'s impossible to communicate with you.',
          is_loved: false,
          is_default: true
        },
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('feelings_id_seq', (SELECT MAX(id) FROM feelings))"
      )})
}
