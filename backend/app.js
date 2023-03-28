const express = require('express');

const app = express();
app.use(express.json());

const product = require('./routes/productRoutes');
const trip = require('./routes/tripRoutes');
const order = require('./routes/orderRoutes');

app.use('/api', product);
app.use('/api', trip);
app.use('/api', order);

module.exports = app;