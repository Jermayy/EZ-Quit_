const mongoose =require ('mongoose');
 
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    smokes: {
        type: Number,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;