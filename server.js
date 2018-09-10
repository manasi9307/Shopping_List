const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); //starts the app execution

app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys').mongoURI;

//Connection to mongodb
mongoose
.connect(db)
.then(() => console.log("Connection established"))
.catch(err => console.log(err));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on ${port}`));
