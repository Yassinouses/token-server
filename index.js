const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

function keepAppRunning() {
  setInterval(
    () => {
      https.get(
        `${process.env.RENDER_EXTERNAL_URL}/ping`,
        //  "https://c1de82b2-aea7-4333-b3a6-14348c1d0f1b-00-cihd67ki3snb.riker.replit.dev/"
        (resp) => {
          if (resp.statusCode === 200) {
            console.log("Ping successful");
          } else {
            console.error("Ping failed");
          }
        },
      );
    },
    5 * 60 * 1000,
  ); // 5 minutes in milliseconds
}
const headerss = {
  "Host": "api.timemovies.net",
  "accept": "application/json",
  "ai": "60129f949ea4ea03d6598c06",
  "x-b": "1052",
  "x-t": process.env.TOKEN
};

const data1 = {
  "phoneNumber": null,
  "tenantId": null,
  "displayName": "Maria Bel",
  "isAnonymous": false,
  "email": "marianebel175@gmail.com",
  "providerData": [
    {
      "email": "marianebel175@gmail.com",
      "providerId": "google.com",
      "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocK-rYF5SLI7sqsq4WaoPNn7QEI6wCYBrTvODXlFRfyg=s96-c",
      "phoneNumber": null,
      "displayName": "Maria Bel",
      "uid": "105425574080139416537"
    }
  ],
  "emailVerified": true,
  "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocK-rYF5SLI7sqsq4WaoPNn7QEI6wCYBrTvODXlFRfyg=s96-c",
  "providerId": "firebase",
  "metadata": {
    "lastSignInTime": 1701936345730,
    "creationTime": 1700392515168
  },
  "uid": "6gB4REYZZMfLG1QbltoxaCtez2y1"
};

app.post('/get-token', async (req, res) => {
  try {
    const response = await axios.post('https://api.timemovies.net/api/v3.5/app/auth/login', data1, { headers: headerss });
    const mytoken = response.data.result;
    res.json({ token: mytoken });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching the token.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  keepAppRunning();
});
