const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

const arr = process.env.links.split(",");

for (let link of arr) {
  server = async () => {
    try {
      const res = await axios.get(link);
      console.log(`Status: ${res.status}`);
      console.log("Body: ", res.data, " from ", link);
    } catch (err) {
      console.error(err);
    }
  };
  server();
  setInterval(server, 300000);
}

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Server running on port ${port}`));
