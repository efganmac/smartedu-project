const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const pageRoute = require('../smartEDU/routes/pageRoutes')
const courseRoute = require('../smartEDU/routes/courseRoute')
const categoryRoute = require('../smartEDU/routes/categoryRoute')



const app = express()

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db').then(()=> {
  console.log('DB connected')
})


//Template Engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)

const port = 5000

app.listen(port, ()=> {
  console.log(`Server start on port ${port}`)
})
