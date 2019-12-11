const express = require('express');
const helmet = require('helmet');
const server = express();
const carRoute = require('../cars/carRoute');
const db = require('../data/dbConfig');

server.use(express.json());
server.use(helmet());
server.use('/api/cars', carRoute);

server.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = server;