import axios from "axios";

export default {
  // Gets all notes
  getNotes: function () {
    return axios.get("/api/notes");
  },

  // Gets the post with the given id
  //   getPost: function(id) {
  //     return axios.get("/api/posts/" + id);
  //   },

  // Deletes the post with the given id
  deleteNote: function (id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a post to the database
  saveNote: function (noteData) {
    return axios.post("/api/notes", noteData);
  },
};
