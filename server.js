'use strict';

const express = require("express");
const http = require('http');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');

var app = express();

app.use('/', express.static('client/'));

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var server = http.createServer(app);
server.listen('8080', function () {
    console.log('HTTP server listening on port 8080');
});