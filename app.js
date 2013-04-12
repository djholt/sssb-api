var express = require('express'),
    Resource = require('express-resource'),
    mongoose = require('mongoose')

// connect to MongoDB
mongoose.connect('mongodb://localhost/sssb')

// load models
require('./app/models/asteroid')
require('./app/models/comet')

// create the app
var app = express()

// configure the app
app.configure(function () {
  app.use(express.bodyParser())
})

// define resourceful routes
app.resource('asteroids', require('./app/controllers/asteroids'))
app.resource('comets', require('./app/controllers/comets'))

// start the app
app.listen(3000)

console.log('Listening on port 3000')
