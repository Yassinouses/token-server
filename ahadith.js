const axios = require('axios');
const { Stream } = require('stream');
const striptags = require('striptags');

async function fetchHadith() {
    const url = 'https://dorar.net/hadith/api?new_app=1&full=1&q=تبسمك في=w&page=1';
    const headers = {
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
        'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; SM-G955N Build/NRD90M.G955NKSU1AQDC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36',
        'X-Requested-With': 'com.zad.hadith',
        Stream : true,
    };

    try {
        
        
        const response = await axios.get(url, { headers });
        const firstHadith = response.data;
        console.log('First Hadith:', firstHadith)
        
       // const firstHadith = response.data.ahadith[0];
        /*const cleanedHadith = striptags(firstHadith.hadith); // Remove HTML tags
        
        console.log('First Hadith:', cleanedHadith);
        console.log('Rawi:', firstHadith.rawi);
        console.log('Degree:', firstHadith.degree);
        console.log('Source:', firstHadith.source);*/

        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchHadith();
