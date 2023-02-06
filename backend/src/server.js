const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const zipcodes = require('zipcodes');
const { findShortestPath, get_knapsack_value } = require('./graph');
const { cities } = require('./database/states');
// const {get_knapsack_value} = require('')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/shortpath/start', (request, response, next) => {
    console.log('Get Shortest Path');
    const payload = request.body;
    const zipcodestart = payload.start
    const zipcodeend = payload.end
    const products = payload.products
    const maxWeight = payload.maxWeight
    try {
        var result = findShortestPath(zipcodestart, zipcodeend);
        var { answer, chosen_products, total_weight } = get_knapsack_value(products, maxWeight)
        console.log("get_knapsack_value", answer, chosen_products, total_weight)
        var obj = {
            answer: answer,
            chosen_products: chosen_products,
            total_weight: total_weight,
            result
        }
        response.json(obj);

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
