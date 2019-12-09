const express = require('express');  //require express to start server 
const Datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();  //create the application
const port = process.env.PORT || 3000  //port equals port or 3000

app.listen(port, console.log('listening at port '+port))  //listen at port of choosing. syntax for local is app.listen(3001, console.log('listening at 3001')).
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    console.log('request to post: ' , data);
    const timeStamp = Date.now();
    data.timestamp = timeStamp  //add timestamp to our data
    database.insert(data);  //insert data into db file
    response.json(data);  //send response to user of their data
});

app.get("/api", (request, response) => {
    console.log('request to get database');
    database.find({}, (error, data) => {
        if(error){
            response.end();
            return;
        }
        response.json(data);
    })
})

app.get("/weather/:latlon", async (request, response) => {
    console.log(request.params);
    const api_key = process.env.API_KEY;
    const latlon = request.params.latlon.split(',');
    const weather_URL = 'https://api.darksky.net/forecast/'+api_key+'/'+latlon[0]+','+latlon[1];
    const weather_Response = await fetch(weather_URL);
    const weather_data = await weather_Response.json();

    const airQuality_URL = 'https://api.openaq.org/v1/latest?coordinates='+latlon[0]+','+latlon[1];
    const airQuality_Response = await fetch(airQuality_URL);
    const airQuality_data = await airQuality_Response.json();

    const data = {
        weather: weather_data,
        airQuality : airQuality_data
    }
    
    response.json(data);
})

