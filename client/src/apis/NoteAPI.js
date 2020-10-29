import axios from "axios";
export default {
  async getNotes() {
    return axios.get("/api/notes");
  },

  async addNote(note) {
    return axios.post("/api/notes", note);
  },

  async getSingleNote(id) {
    return axios.get("/api/notes/" + id);
  },

  async deleteNote(id) {
    return axios.delete("/api/notes/" + id);
  },
};
