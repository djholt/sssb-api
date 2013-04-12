var mongoose = require('mongoose'),
    Comet = mongoose.model('Comet')

var pageOptions = function (req) {
  var page = req.param('page') > 0 ? req.param('page') - 1 : 0
  var perPage = 100
  return {
    skip: page * perPage,
    limit: perPage
  }
}

exports.index = function (req, res) {
  console.log('Loading comets#index')
  Comet.find({}, null, pageOptions(req), function (err, comets) {
    if (err) {
      res.send(err)
    } else {
      res.send(comets)
    }
  })
}

exports.show = function (req, res) {
  console.log('Loading comets#show with ID', req.params.comet)
  Comet.findOne({ _id: req.params.comet }, function (err, comet) {
    if (err) {
      res.send(err)
    } else {
      res.send(comet)
    }
  })
}

exports.create = function (req, res) {
  console.log('Loading comets#create')
  Comet.create(req.body, function (err, comet) {
    if (err) {
      res.send(err)
    } else {
      res.send(comet)
    }
  })
}

exports.update = function (req, res) {
  console.log('Loading comets#update with ID', req.params.comet)
  Comet.findOneAndUpdate({ _id: req.params.comet }, req.body, function (err, comet) {
    if (err) {
      res.send(err)
    } else {
      res.send(comet)
    }
  })
}

exports.destroy = function (req, res) {
  console.log('Loading comets#destroy with ID', req.params.comet)
  Comet.findOneAndRemove({ _id: req.params.comet }, function (err, comet) {
    if (err) {
      res.send(err)
    } else {
      res.send(comet)
    }
  })
}
