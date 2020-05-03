const axios = require("axios");
const token = require("token")

const api = {
  getUser(username, cb) {
    axios.get(`https://api.github.com/users/${username}`, token.config)
      .then(response => {
        console.log(response.data);
    
        cb(response);

      })
  }
};

module.exports = api;