 const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://aeproductsourcesite.alicdn.com/product/description/stdmobile/v2/en_US/desc.json',
  params: {
    productId: '1005005753960148',
    key: 'Sfca9e41f13d74cd39ae94232f42126c0H.json',
    token: 'e421250b743253294cb51dbf2b0a06ce',
    _lang: 'en_US',
    _systemLang: 'en_US',
    _currency: 'USD',
    _city: '',
    _state: '',
    _saasRegion: 'aeg',
    locale: 'en_US'
  },
  headers: {
    'Host': 'aeproductsourcesite.alicdn.com',
    'vv': '33|80003968|4G|aeproductsourcesite.alicdn.com|0|0',
    'rid': '4CWR17Ix',
    'rts': 'gkgCPHgh|403|200',
    'p': 'Detail',
    'scenario': 'Detail',
    'global_abtest': '{"st_27724":"1584","st_31453":"1616","st_501712":"1740","st_502320":"1722","st_502861":"2077","st_502930":"2103","st_503071":"2129","st_503094":"2265","st_503545":"2493","st_503550":"2483","st_503626":"2473"}',
    'accept-encoding': 'gzip',
    'user-agent': 'okhttp/4.9.0'
  }
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });