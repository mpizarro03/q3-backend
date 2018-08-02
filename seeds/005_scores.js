exports.seed = function(knex, Promise) {

  return knex('scores').del()
    .then(function () {

      return knex('scores').insert([
        {id: 1, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:1 , score: 7, feedback: "lorem ipsum" },
        {id: 2, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:2 , score: 7, feedback: "lorem ipsum" },
        {id: 3, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:3 , score: 7, feedback: "lorem ipsum" },
        {id: 4, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:4 , score: 7, feedback: "lorem ipsum" },
        {id: 5, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:5 , score: 7, feedback: "lorem ipsum" },
        {id: 6, couple_id: 1, from_user_id: 1 , to_user_id: 2, users_feelings_id:6 , score: 7, feedback: "lorem ipsum" },
        
        {id: 7, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:7 , score: 7, feedback: "lorem ipsum" },
        {id: 8, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:8 , score: 7, feedback: "lorem ipsum" },
        {id: 9, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:9 , score: 7, feedback: "lorem ipsum" },
        {id: 10, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:10 , score: 7, feedback: "lorem ipsum" },
        {id: 11, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:11 , score: 7, feedback: "lorem ipsum" },
        {id: 12, couple_id: 1, from_user_id: 2 , to_user_id: 1, users_feelings_id:12, score: 7, feedback: "lorem ipsum" },
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('scores_id_seq', (SELECT MAX(id) FROM scores));"
      );
    });
};
