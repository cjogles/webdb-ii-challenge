const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
});

const router = express.Route();

router.get('/', (res, req) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json({error: 'failed to retrieve cars'});
        });
});

module.exports = router;