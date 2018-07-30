const express = require('express')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const couplesRoutes = require('./routes/couples.js')
const feelingsRoutes = require('./routes/feelings.js')
const receivedScoresRoutes = require('./routes/received_scores.js')
const sentScoresRoutes = require('./routes/sent_scores.js')
const usersRoutes = require('./routes/users.js')
// const getAllCouples = require('./routes/couples.js')
const getAllFeelingsRoutes = require('./routes/feelings.js')


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// const routes = require('./routes/routes.js')

app.use(express.static('public'))

app.use('/api/users',usersRoutes)
app.use('/api/couples',couplesRoutes)
app.use('/api/feelings', getAllFeelingsRoutes)
// app.use('/api/couples', getAllCouples)
app.use('/api/users/:user_id/feelings',feelingsRoutes)
app.use('/api/users/:user_id/received_scores',receivedScoresRoutes)
app.use('/api/users/:user_id/sent_scores',sentScoresRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

// catch all error route
app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Page not found' }})
})

//route for listening on the port
const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
