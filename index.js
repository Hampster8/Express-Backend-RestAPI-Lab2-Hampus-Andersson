
const express = require('express');

const app = express();
const PORT = process.env.PORT || 1234;
const morgan = require('morgan');

// middleware morgan
app.use(morgan('dev'));

const api = require('./routes/api'); // external route to our own api. our own module.
app.use(express.json()); // enables use of json
app.use('/api', api); // endpoint for our api
app.use(express.static('public')); // public will be the client side of our webapp.


app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});