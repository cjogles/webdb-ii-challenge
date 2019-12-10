const express = require('express');
const helmet = require('helmet');

const carRouter = require('../cars/carRoute');

const server = express();

server.use(helmet());
server.use(json());

server.use(('/api/cars', carRouter));

module.exports = server;