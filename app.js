const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo');
const session = require('express-session')
const flash = require('connect-flash');
const methodOverride = require('method-override');
const pageRoute = require('../smartEDU/routes/pageRoutes')
const courseRoute = require('../smartEDU/routes/courseRoute')
const categoryRoute = require('../smartEDU/routes/categoryRoute')
const userRoute = require('../smartEDU/routes/userRoute')


const app = express()

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db').then(()=> {
  console.log('DB connected')
})


//Template Engine
app.set('view engine', 'ejs')


//Global Variable

global.userIN = null


// Middlewares

app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'my_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db'})
}))
app.use(flash());
app.use((req, res, next)=> {
  res.locals.flashMessages = req.flash();
  next();
})
app.use('*', (req, res, next)=>{
  userIN = req.session.userID
  next()
})

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
//Routes
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)
app.use('/registers', pageRoute)
app.use('/contacts', pageRoute)
app.use('/pricings', pageRoute)
app.use('/blog', pageRoute)

const port = 5000

app.listen(port, ()=> {
  console.log(`Server start on port ${port}`)
})
