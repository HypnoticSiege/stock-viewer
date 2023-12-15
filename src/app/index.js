const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const port = process.env.PORT || 3000;

const AAPL = require('../../data/AAPL.json');
const JPM = require('../../data/JPM.json');
const TSLA = require('../../data/TSLA.json');

const app = express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static('public'))
    .use('/assets', express.static(__dirname + 'public/'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, 'views')));
express.static(path.join(__dirname, "./public"));

app.listen(port, function () {
    console.log(`[INFO] Express Server started! Listening on port ${port}`);
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/:ticker', async function (req, res) {
    let ticker = req.params.ticker;
    let data = [];

    if (ticker == 'AAPL') {
        AAPL.results.forEach(e => {
            data.push(e.c);
        });
    } else if (ticker == 'JPM') {
        JPM.results.forEach(e => {
            data.push(e.c);
        });
    } else if (ticker == 'TSLA') {
        TSLA.results.forEach(e => {
            data.push(e.c);
        });
    }

    res.render('chart', {
        data: data,
        ticker: ticker
    });
})