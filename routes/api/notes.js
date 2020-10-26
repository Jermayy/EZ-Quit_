const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router
.route("/")
.get(notesController.findAll)
.delete(notesController.remove);


router
.route("/notes")
.post(notesController.create);

module.exports = router;