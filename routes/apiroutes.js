const router = require('express').Router();
const fs = require('fs');
const { writeToFile } = require('../helpers/fsUtils');


// router.post('/notes', function(req, res) {
//     const userNotes = req.body;
//     console.log(userNotes);
//     res.json(userNotes);
// })


// router.get('/api/notes', function(req, res) {
// fs.readFile('./db/db.json', (err, data) => {
//     if (err) throw err;
//     dbData = JSON.parse(data);
//     res.send(dbData);
//     });
// });

router.post('/notes', function(req, res) {
const userNotes = req.body;

console.log(userNotes);

fs.readFile('../db/db.json', (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    dbData.push(userNotes);
    console.log(dbData);
    // let number = 1;
    // dbData.forEach((note, index) => {
    //     note.id = number;
    //     number++;
    //     return dbData;
    // });
    console.log(dbData);
    stringData = JSON.stringify(dbData);
    fs.writeFile('../db/db.json', stringData, (err, data) => {
        if (err) throw err;
    });
});
res.send("Note saved");
});


module.exports = router;