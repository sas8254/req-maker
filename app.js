const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

// Function to send a GET request to your API
const sendRequest = async () => {
  try {
    const response = await axios.get(
      "https://treading-bot-pcvz.onrender.com/users/get-user-count"
    );
    console.log(`Status: ${response.status}`);
    console.log("Body: ", response.data);
  } catch (err) {
    console.error(err);
  }
};

const sendRequest1 = async () => {
  try {
    const response = await axios.get(
      "https://algo-trade-rp59.onrender.com/users/get-user-count"
    );
    console.log(`Status: ${response.status}`);
    console.log("Body: ", response.data, " form auto trade");
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
sendRequest();
sendRequest1();


const printTime = () => {
  let time = new Date().toISOString();
  console.log(time);
};

// Then send a request every 10 minutes
setInterval(sendRequest, 600000);
setInterval(sendRequest1, 590000);
// setInterval(printTime, 2000);


const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Server running on port ${port}`));
