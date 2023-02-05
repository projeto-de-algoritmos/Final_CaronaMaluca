const express = require('express');
const cors = require('cors')
const zipcodes = require('zipcodes');
const { findShortestPath } = require('./graph');
const { cities } = require('./database/states');

const app = express();
app.use(cors());

/* ********** Local by ZipCode ********** */
app.get('/local/zipcode/:zip_code', (request, response, next) => {
    console.log('Get Local by ZipCode');
    const { zip_code } = request.params;
    try {
        var local = zipcodes.lookup(zip_code);
        response.json(local);
    } catch (error) {
        console.log('Get Local by ZipCode(ERROR): ');
        next(error);
    }
});


/* ********** Distance by ZipCodes ********** */
app.get('/distance/origin/:origin/destiny/:destiny', (request, response, next) => {
    console.log('Get Distance by ZipCode');
    const { origin, destiny } = request.params;
    try {
        var dist = zipcodes.distance(origin, destiny);
        var kilo = zipcodes.toKilometers(dist);
        response.json(kilo);
    } catch (error) {
        console.log('Get Destination by ZipCodes(ERROR): ');
        next(error);
    }
});

/* ********** Lookup by Name ********** */
app.get('/local/name/:name/state/:state', (request, response, next) => {
    console.log('Get Lookup by Name');
    const { name, state } = request.params;
    try {
        var zip_code = zipcodes.lookupByName(name, state);
        response.json(zip_code[0]);
    } catch (error) {
        console.log('Get Lookup by Name(ERROR): ');
        next(error);
    }
});

/* ********** Get Short path by Dijkstra ********** */
app.get('/shortpath/start/:zipcodestart/end/:zipcodeend', (request, response, next) => {
    console.log('Get Shortest Path');
    const { zipcodestart, zipcodeend } = request.params;
    try {
        var result = findShortestPath(zipcodestart, zipcodeend);
        response.json(result);
    } catch (error) {
        console.log('Get Shortest Path(ERROR): ');
        next(error);
    }
});

app.get('/database/cities', (request, response, next) => {
    console.log('Get all cities');
    try {
        response.json(cities);
    } catch (error) {
        console.log('Get all cities(ERROR): ');
        next(error);
    }
})

app.listen(8080, () => {
    console.log('Listening in 8080')
})
