const express = require('express');
const path = require('path');
const Generator = require('./generator');

// Constants
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/secret', (req, res) => {
    Generator.createBitcoin();

    res.sendFile(path.join(__dirname, 'secret.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
