const knex = require('../knex')

const getFeelings = (user_id,is_loved)=> {
  return knex('users_feelings')
  .where({user_id: user_id, is_loved: is_loved})
  .join('feelings',"feeling_id", "feelings.id")
  .then( (feelings)=> {
    if (!feelings) {
      return { status: 404, errors: `Could not find user feelings` }
    }
    return feelings
  })
}

const createFeelings = (feelings) => {
  //make subqueries a variable that is called into this function. 
    //SELECT from("FEELINGS") WHERE is_default = true
    //loop through feelings, [{}, {}, {}]
    //if feelings[i].name doesn't match anything from the SELECT, then INSERT into the table
  const name = feelings.name
  const description = feeling.description
  const is_loved = feeling.is_loved
  const is_default = feeling.is_default
  const newFeeling = {
    name: name,
    description: description,
    is_loved: is_loved,
    is_default: is_default
  }
  return Knex('users_feelings')
    .insert(newFeeling)

}
//
//
// const updateFeelings = () => {
//
// }

module.exports = {
  getFeelings,
  // createFeelings,
  // updateFeelings
}
