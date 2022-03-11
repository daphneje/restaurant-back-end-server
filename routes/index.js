const express = require('express');
const app = express();
app.use(express.json());

const orderItemRoutes = require('./order-item.routes');
const orderRoutes = require('./order.routes');
const itemRoutes = require('./item.routes');

app.use(orderItemRoutes);
app.use(orderRoutes);
app.use(itemRoutes);

module.exports = app;