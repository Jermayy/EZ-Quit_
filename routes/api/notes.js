const Note = require("../../models/note");
const express = require("express");
const router = express.Router();
const passport = require('passport');


//Get all notes
router.get("/notes", async (req, res) => {
  console.log(req.user);
  const allNotes = await Note.find({userid: req.user._id});
  res.json(allNotes);
});

//Add note
router.post("/notes", async (req, res) => {
  console.log("post route");
  const newNote = await Note.create({
    userid: req.user._id,
    date: req.body.date,
    time: req.body.time,
    smokes: req.body.smoke,
    note: req.body.note,
  });
  console.log("log #2");
  // req.user.addNote(newNote);

  console.log("log #3 after add note to user");
  res.json(newNote);
});

// find single note by ID
router.get("/notes/:id", async (req, res)=>{
const note = await Note.findById(req.params.id);
console.log(note);
return res.json(note)
})

//Delete Note
router.delete("/notes/:id", async (req, res) => {
  console.log('delete route hit')
  const result = await Note.deleteOne({ _id: req.params.id });
  console.log(result);
  return res.json(result)
  


});

module.exports = router;
