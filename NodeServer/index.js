const express = require('express');  //require express to start server 
const Datastore = require('nedb');

const app = express();  //create the application

app.listen(3001, console.log('listening at 3001'))  //listen at port of choosing
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timeStamp = Date.now();
    data.timestamp = timeStamp
    database.insert(data);
    console.log('i got a request');
    response.json(data);
});

app.get("/api", (request, response) => {
    console.log('request made');
    database.find({}, (error, data) => {
        if(error){
            response.end();
            return;
        }
        response.json(data);
    })
})