const router = require('express').Router();
const fs = require('fs');
const { readAndAppend, readData, writeToFile} = require('../db/fsUtils');
const { v4: uuidv4 } = require('uuid')

router.get("/notes", (req, res) => {
    readData() 
    .then(data => {
        console.log(data)
        res.json(JSON.parse(data))
    })
    .catch(res => console.log(res))
})

router.put("/notes/:id", (req, res) => {
    readAndAppend({id:uuidv4(), ...req.body}, "db/db.json");
    res.json(req.body);
})

router.post("/notes", (req, res) => {
    readAndAppend(req.body, "db/db.json");
    res.json(req.body);
})

module.exports = router;