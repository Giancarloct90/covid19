const express = require('express');
const app = express();
const axios = require('axios');


app.get('/', async (req, res) => {
    try {
        let data = await axios.get('https://corona-api.com/timeline');
        let countries = await axios.get('https://corona-api.com/countries');
        // console.log(data.data.data[0]);
        res.render('home', {
            total: data.data.data[0],
            countries: countries.data.data
        });
    } catch (e) {
        console.log('Trying to get all data', e);
    }

});
module.exports = app;