"use strict";
const config = require('./_config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 4040;

dotenv.config();

mongoose.connect(
    process.env.DB_KEY,
    () => console.log('Database Connection successful.')
);

const register = require('./routes/register');
const login = require('./routes/login');
const test = require('./routes/test');

app.use(express.json());
app.use('/api', register);
app.use('/api', login);
app.use('/api', test);


app.listen(port, () => console.log(`Server app started on port ${port}!`));