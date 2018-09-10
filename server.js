const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); //starts the app execution

app.use(bodyParser.json());
