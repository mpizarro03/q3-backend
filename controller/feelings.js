const model = require('../models/feelings')


let loved = []
let unloved = []

const getAllFeelings = (req, res, next) => {
  model.getAllFeelings()
  .then((result)=>{
    res.send(result)

    // for(let i = 0; i < result.length; i++) {
    //   if(result[i]['is_loved'] === true && result[i]['is_default'] === true) {
    //     loved.push(result[i])
    //   }
    //   else if(result[i]['is_loved'] === false && result[i]['is_default'] === true) {
    //     unloved.push(result[i])
    //   }
    // }
    // console.log(loved, "LOVED")
    // console.log(unloved, "UNLOVED")
  })
}

const getFeelings = (req, res, next) => {
  const {user_id, type } = req.params
  const is_loved = type === "loved" ? true : false;
  model.getFeelings(user_id, is_loved).then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })


}


const createFeelings = (req, res, next) => {

  model.createFeelings(req.body)
}

const updateFeelings = (req, res, next) => {

}

module.exports = {
  getFeelings,
  createFeelings,
  getAllFeelings,
  // updateFeelings
}
