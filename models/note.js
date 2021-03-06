const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  userid:{
    type: String,
    required: true
  },  
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  smokes: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
