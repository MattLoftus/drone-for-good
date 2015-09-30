var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  location: String,
  latitude: Number,
  longitude: Number,
  description: String,
  expirationDate: Date,
  title: String,
  seeker: {
    type: Number,
    required: true,
    // ref: User

  },
  pilot:{
    type: Number,
    // ref: User
  }
});

//this may not be necessary
// ProjectSchema.pre('save', function(next){
//
//   next();
// });

module.exports = mongoose.model('Project', ProjectSchema);


// Mongoose comes with the .create and .findOne methods already in the box.
// These are used in the projectController so we didn't need to write them and they
// won't exist in written format.
