const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const helmet = require("helmet");
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const process = require('process');

const routes = require('./src/routes');

// Load env vars based on NODE_ENV
if (process.env.NODE_ENV) {
    dotenv.config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`
    });
}else{
    dotenv.config();
}

const app = express();

// Middleware setup
// app.use(cors());
// app.use(helmet());
// app.use(bodyParser.json()); // if needed

app.use('', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
  });

module.exports = app;