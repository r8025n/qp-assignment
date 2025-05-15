const express = require('express')
const bodyParser = require('body-parser');
// var morgan = require('morgan');
// var cookieParser = require('cookie-parser');
var path = require('path');
// const helmet = require("helmet");
const cors = require('cors');
const process = require('process');
const dotenv = require('dotenv');

let routes = require("./src/routes")

if(process.env.NODE_ENV){
    dotenv.config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`
    })
}

const app = express();

// app.use(cors());
// app.use(helmet());

app.use("", routes)

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`server is listening at port: ${port}`);
})