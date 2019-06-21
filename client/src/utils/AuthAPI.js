import axios from "axios";

export default {
  userCreateAccount: function(accountData) {
    return axios.post("/createaccount", accountData);
  },
  userLogin: function(loginData) {
    return axios.post("/login", loginData);
  },
  userLogout: function() {
    return axios.get("/logout");
  },
  isAuthenticated: function() {
    return axios.get("/isauth");
  },
  getCurrentUser: function() {
    return axios.get("/getcurrentuser");
  }
};
