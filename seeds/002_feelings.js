
exports.seed = function(knex, Promise) {

  return knex('feelings').del()
    .then(function () {

      return knex('feelings').insert([
        {
          id: 1,
          name: 'Appreciation',
          description: 'The recognition and enjoyment of the good qualities of someone or something.',
          is_loved: true,
          is_default: true
        },
        {
          id: 2,
          name: 'Quality Time',
          description: 'Time spent in giving another person one\'s undivided attention in order to strengthen a relationship, especially with reference to working parents and their child or children.',
          is_loved: true,
          is_default: true
        },
        {
          id: 3,
          name: 'Affection',
          description: 'A gentle feeling of fondness or liking.',
          is_loved: true,
          is_default: true
        },
        {
          id: 4,
          name: 'Adoration',
          description: 'Deep love and respect.',
          is_loved: true,
          is_default: true
        },
        {
          id: 5,
          name: 'Sexual Intimacy',
          description: 'An intimate act, especially sexual intercourse.',
          is_loved: true,
          is_default: true
        },
        {
          id: 6,
          name: 'Recreation Together',
          description: 'Going out hiking with my partner, enjoying active time outside together.',
          is_loved: true,
          is_default: true
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
