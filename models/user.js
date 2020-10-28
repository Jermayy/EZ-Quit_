var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  notes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId 
     }],
    default: []
  },
});

UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.addNote = function (note){
  this.notes.push(mongoose.Types.ObjectId(note._id));
  return this.save();
}



var User = mongoose.model("User", UserSchema);
module.exports = User;
