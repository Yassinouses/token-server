const axios = require('axios'); // Ensure axios is imported

const headerss = {
  "Host": "api.timemovies.net",
  "accept": "application/json",
  "ai": "60129f949ea4ea03d6598c06",
  "x-b": "1052",
  "x-t": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU5ZWU0NDgzMmM3ZGZiOTI3Y2JkOTciLCJuYW1lIjoiTWFyaWEgQmVsIiwiZW1haWwiOiJtYXJpYW5lYmVsMTc1QGdtYWlsLmNvbSIsImRhdGFfbGFuZyI6bnVsbCwiYXBwX2xhbmciOm51bGwsInN0cmVhbV9xdWFsaXR5IjoiMjQwcCIsImRvd25sb2FkX3F1YWxpdHkiOiIyNDBwIiwiaXNfdmlwIjpmYWxzZSwidmlwX3RvIjpudWxsLCJ2aXBfcGxhbiI6bnVsbCwiaXNfZ29vZ2xlX3BsYXkiOmZhbHNlLCJpc19yZXF1ZXN0Ijp0cnVlLCJpc19zdHJlYW0iOnRydWUsImlzX2Rvd25sb2FkIjp0cnVlLCJpc19zdXNwZW5kZWQiOmZhbHNlLCJzdGF0dXMiOjAsInNlYXNvbl9vcmRlciI6LTEsImlzX2VwaXNvZGVfdGh1bWIiOnRydWUsInN1YnRpdGxlX2xhbmciOiJhcmEiLCJpc19kb3dubG9hZF93aWZpX29ubHkiOmZhbHNlLCJkb3dubG9hZF9saW1pdCI6MSwiaXNfZG93bmxvYWRfY29tcGxldGVkX25vdGlmaWNhdGlvbiI6dHJ1ZSwiaXNfZG93bmxvYWRfY29tcGxldGVkX25vdGlmaWNhdGlvbl9zb3VuZCI6dHJ1ZSwiaWF0IjoxNzAyODQyMjcyLCJleHAiOjE3MDM0NDcwNzJ9.FHnrdc4Znio5OfqyRFKdFzywp2QWPfA_Gde2w1YqazA"
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

axios.post('https://api.timemovies.net/api/v3.5/app/auth/login', data1, { headers: headerss })
  .then(response1 => {
    console.log(response1.data.result); // Should output the desired response object
  })
  .catch(error => {
    console.error('Error:', error); // Catch and log any errors
  });
