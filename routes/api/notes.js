const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router
.route("/NoteList")
.get(notesController.findAll)
.delete(notesController.remove);


router
.route("/NewNote")
.post(notesController.create);