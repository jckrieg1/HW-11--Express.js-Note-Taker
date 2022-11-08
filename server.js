
const express = require('express');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');
const app = express();
const PORT = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.use('/api', apiroutes);
app.use('/', htmlroutes);


app.listen(PORT, function () {
    console.log('Server listening on port: ${PORT}');
});
