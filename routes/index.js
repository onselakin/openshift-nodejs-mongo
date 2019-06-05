const express = require('express')
const MongoClient = require('mongodb').MongoClient

const router = express.Router()

router.get('/', (req, res) => {
    MongoClient.connect('mongodb://dbuser:dbpass@mongodb/sampledb')
        .then(client => res.render('index', { title: 'Sample App', mongoConnected: true, env: process.env }))
        .catch(client => res.render('index', { title: 'Sample App', mongoConnected: false, env: process.env }))
})

module.exports = router