var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var AsteroidSchema = new Schema({
  name: String,
  inclination: Number,
  semimajor_axis: Number,
  perihelion_distance: Number,
  aphelion_distance: Number,
  orbital_period: Number,
  object_diameter: Number,
  geometric_albedo: Number,
  rotation_period: Number
})

mongoose.model('Asteroid', AsteroidSchema)
