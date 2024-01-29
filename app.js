const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

// Function to send a GET request to your API
const menualServer = async () => {
  try {
    const response = await axios.get(
      "https://treading-bot-pcvz.onrender.com/users/get-user-count"
    );
    console.log(`Status: ${response.status}`);
    console.log("Body: ", response.data, " from menual server");
  } catch (err) {
    console.error(err);
  }
};

const kevalServer = async () => {
  try {
    const response = await axios.get(
      "https://algo-ang.onrender.com/users/get-user-count"
    );
    console.log(`Status: ${response.status}`);
    console.log("Body: ", response.data, " form keval server");
  } catch (err) {
    console.error(err);
  }
};

const jayveerServer = async () => {
  try {
    const response = await axios.get(
      "https://ma-jayveer.onrender.com/users/get-user-count"
    );
    console.log(`Status: ${response.status}`);
    console.log("Body: ", response.data, " form jayveer server");
  } catch (err) {
    console.error(err);
  }
};

let count = 0;

app.get("/", (req, res) => {
  count++;
  res.send(`got the request no ${count}`);
});

// Send the first request when the app starts
menualServer();
kevalServer();
jayveerServer();

// Then send a request every 10 minutes
setInterval(menualServer, 600000);
setInterval(kevalServer, 590000);
setInterval(jayveerServer, 610000);
// setInterval(printTime, 2000);

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Server running on port ${port}`));
