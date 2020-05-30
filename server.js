const express = require('express');
const db = "./data/car_dealer.db3"
const server = express();

server.use(express.json());

const PORT = 5000;

server.get("/", (req, res) => {
    res.status(200).send("Hello Antoinette")
})

server.get('/api/cars', (req, res) => {
    const newCar = req.body;
    res.status(200).send("New Car")
    console.log(newCar);
})

server.post('/api/cars', (req, res) => {
const newCar = req.body;
 res.status(201).send("Add New Car");
})

module.exports = server;