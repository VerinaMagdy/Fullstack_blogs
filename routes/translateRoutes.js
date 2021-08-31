const express = require('express');
//const axios = require("axios").default;
const Translate = require('../models/translate');
const router = express.Router();

let qs = require('qs')
let axios = require('axios')

const options = {
method: 'POST',
url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
data: qs.stringify({
q : 'Hello World!',
source : 'en',
target : 'it'
}),
headers: {
'content-type': 'application/x-www-form-urlencoded',
'accept-encoding': 'application/gzip',
'x-rapidapi-key': '{{YOUR_API_KEY}}',
'x-rapidapi-host':'google-translate1.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
console.log(response.data.data['translations'][0]['translatedText']);
}).catch(function (error) {
console.error(error);
});

module.exports = router;