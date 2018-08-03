exports.seed = function(knex, Promise) {

  return knex('scores').del()
    .then(function () {

      return knex('scores').insert([
        {id: 1, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:1 , score: 10, feedback: "You made me feel appreciated this week, by taking on extra chores around the house without being asked or asking if I needed help with anything." },
        {id: 2, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:2 , score: 9, feedback: "You took a longer lunch the other day, so you could meet me at our favorite tea house in Boulder. That really meant a lot to me." },
        {id: 3, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:3 , score: 7, feedback: "I really like when you get give me a gentel touch or kiss in the morning." },

        {id: 4, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:8 , score: 2, feedback: "When I tell you about my day, you make this 'sigh' sound where you sound annoyed with me." },
        {id: 5, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:9 , score: 10, feedback: "You didn't stand up to your mom this week, when she asked what we were doing for the holidays. We planned a vacation and you eluded to her that we don't have any plans. Now I'm going to have to tell her we aren't coming home to see her. Great." },
        {id: 6, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:10 , score: 9, feedback: "I didn't like it when you disapproved of my solo hiking trip." },

        {id: 7, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:1 , score: 2, feedback: "I really like it when we went for a walk at Boulder Creek on Monday." },

        {id: 8, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id: 7, score: 7, feedback: "I liked that you surpised me at work during lunch yesterday, that made my day." },

        {id: 9, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id: 5 , score: 10, feedback: "I loved that you took the initiative every day this week." },

        {id: 10, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:11 , score: 4, feedback: "I didn't like it when you made plans for us Friday night without asking if I was available, and I had to re-arrange my plans." },
        {id: 11, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:12, score: 3, feedback: "I didn't like it when you told me how to fold my clothes. You have your way, I have mine." },
        {id: 12, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:7 , score: 4, feedback: "lorem ipsum" },

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('scores_id_seq', (SELECT MAX(id) FROM scores));"
      );
    });
};
