import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/NoteList");
  },
  
  // Gets the post with the given id
//   getPost: function(id) {
//     return axios.get("/api/posts/" + id);
//   },

  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/NoteList/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/NewNote", postData);
  }
};
