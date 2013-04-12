var mongoose = require('mongoose'),
    Asteroid = mongoose.model('Asteroid')

var pageOptions = function (req) {
  var page = req.param('page') > 0 ? req.param('page') - 1 : 0
  var perPage = 100
  return {
    skip: page * perPage,
    limit: perPage
  }
}

exports.index = function (req, res) {
  console.log('Loading asteroids#index')
  Asteroid.find({}, null, pageOptions(req), function (err, asteroids) {
    if (err) {
      res.send(err)
    } else {
      res.send(asteroids)
    }
  })
}

exports.show = function (req, res) {
  console.log('Loading asteroids#show with ID', req.params.asteroid)
  Asteroid.findOne({ _id: req.params.asteroid }, function (err, asteroid) {
    if (err) {
      res.send(err)
    } else {
      res.send(asteroid)
    }
  })
}

exports.create = function (req, res) {
  console.log('Loading asteroids#create')
  Asteroid.create(req.body, function (err, asteroid) {
    if (err) {
      res.send(err)
    } else {
      res.send(asteroid)
    }
  })
}

exports.update = function (req, res) {
  console.log('Loading asteroids#update with ID', req.params.asteroid)
  Asteroid.findOneAndUpdate({ _id: req.params.asteroid }, req.body, function (err, asteroid) {
    if (err) {
      res.send(err)
    } else {
      res.send(asteroid)
    }
  })
}

exports.destroy = function (req, res) {
  console.log('Loading asteroids#destroy with ID', req.params.asteroid)
  Asteroid.findOneAndRemove({ _id: req.params.asteroid }, function (err, asteroid) {
    if (err) {
      res.send(err)
    } else {
      res.send(asteroid)
    }
  })
}
