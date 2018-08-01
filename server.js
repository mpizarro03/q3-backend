const express = require('express')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors =  require('cors')

const staticFeelingsRoutes = require('./routes/static_feelings.js')
const couplesRoutes = require('./routes/couples.js')
const feelingsRoutes = require('./routes/feelings.js')
const receivedScoresRoutes = require('./routes/received_scores.js')
const sentScoresRoutes = require('./routes/sent_scores.js')
const usersRoutes = require('./routes/users.js')
const allFeelingsRoutes = require('./routes/all_feelings.js')


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use(cors())

app.use('/api/users',usersRoutes)
app.use('/api/couples',couplesRoutes)
app.use('/api/static_feelings', staticFeelingsRoutes)
app.use('/api/feelings', allFeelingsRoutes)
app.use('/api/users/:user_id/feelings', feelingsRoutes)
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
