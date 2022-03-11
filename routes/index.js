const express = require('express');
const app = express();
app.use(express.json());

const orderItemRoutes = require('./order-item.routes');
const orderRoutes = require('./order.routes');

app.use(orderItemRoutes);
app.use(orderRoutes);

module.exports = app;