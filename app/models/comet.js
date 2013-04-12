var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var CometSchema = new Schema({
  name: String,
  inclination: Number,
  perihelion_distance: Number,
  aphelion_distance: Number,
  time_of_perihelion: Date,
  orbital_period: Number,
  orbit_class: String,
  object_diameter: Number,
  geometric_albedo: Number,
  rotation_period: Number
})

mongoose.model('Comet', CometSchema)
