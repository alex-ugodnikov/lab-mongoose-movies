const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const Celebrity = require('../models/Celebrity.model');
const dbConnect = require('../config/db.config.js');


const celebrities = [
    {name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'Yeah'},
    {name: 'Tom Cruise2', occupation: 'actor', catchPhrase: 'Yeah'},
    {name: 'Steven Spilberg', occupation: 'director', catchPhrase: 'Yeah'}
];


Celebrity.create(celebrities)
.then(celebsFromDb => console.log(`Succesfully created, ${celebrities.length}`))
.catch(err => console.log('Error creating celebrity', err));

