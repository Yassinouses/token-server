const express = require('express');
const axios = require('axios');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

if (!process.env.RENDER_EXTERNAL_URL || !process.env.TOKEN) {
  console.error('RENDER_EXTERNAL_URL and TOKEN must be defined in environment variables.');
  process.exit(1);
}

function keepAppRunning() {
  setInterval(
    () => {
      https.get(
        `${process.env.RENDER_EXTERNAL_URL}/ping`,
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
  );
}


app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Ping successful" });
});


const headerss = {
  "Host": "api.timemovies.net",
  "accept": "application/json",
  "ai": "60129f949ea4ea03d6598c06",
  "x-b": "1052",
  "x-t": process.env.TOKEN
};

const data1 = {
  // ... your existing data1 object ...
};

app.post('/get-token', async (req, res) => {
  try {
    console.log('----------------------------a new token was generated-------------------------------');
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
