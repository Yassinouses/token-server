const axios = require('axios');

const url = "https://nexra.aryahcr.cc/api/chat/gpt";

const headers = {
  "Content-Type": "application/json"
};

const data = {
  prompt: "generate me a image of fighting jet",
  messages: [
    {"role": "assistant", "content": "Hello! How are you today?"},
    {"role": "user", "content": ""},
    {"role": "assistant", "content": ""}
  ],
  model: "GPT-4",
  markdown: false
};

axios.post(url, data, { headers: headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });