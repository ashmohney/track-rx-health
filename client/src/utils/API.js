import axios from "axios";

export default {
  // Gets all meds
  getMeds: function() {
    return axios.get("/api/meds");
  },
  // Gets the one med with the given id
  getMed: function(id) {
    return axios.get("/api/meds/" + id);
  },
  // Deletes the one med with the given id
  deleteMeds: function(id) {
    return axios.delete("/api/meds/" + id);
  },
  // Saves a med to the database
  saveMeds: function(medsData) {
    return axios.post("/api/meds", medsData);
  }
};
