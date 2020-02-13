const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/public/parrots.html'));
});

app.listen(PORT, () => console.log(`Server listens on Port: ${PORT}`));
