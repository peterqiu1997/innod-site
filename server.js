'use strict';
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;
process.env.PWD = process.cwd()
const server = app.listen(port)

// middleware
app.use(compression());
app.use(express.static(process.env.PWD + '/public'));
