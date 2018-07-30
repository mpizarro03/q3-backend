const knex = require('../knex')

const createCouple = (couple) => {

  return knex('couples')
    .insert(couple)
    .then(function(data){
      return data
    })
    .catch((err)=> {
      return err
    })

}

const deleteCouple = (couple_id) => {
    return knex('couples')
      .where('id', couple_id)
      .del()
      .then(function(data){
        return data
      })
      .catch((err)=> {
        return err
      })
}

module.exports = {
  createCouple,
  deleteCouple,
}
