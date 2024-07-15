const axios = require('axios');

async function makeGetRequest() {
    const url = 'https://dorar.net/api/m3lama/hadith01';
    const customHeaders = {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'dorar.net',
        Origin: 'http://localhost',
        Referer: 'http://localhost/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent':
            'Mozilla/5.0 (Linux; Android 7.1.2; SM-G955N Build/NRD90M.G955NKSU1AQDC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36',
        'X-Requested-With': 'com.zad.hadith',
    };

    try {
        const response = await axios.get(url, { headers: customHeaders });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to make the GET request
makeGetRequest();

