const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json


app.use('/professional', professionalRoutes);

app.listen(8080);