const express = require('express');
const app = express();
app.use(express.json());

const orderItemRoutes = require('./order-item.routes');
const orderRoutes = require('./order.routes');
const itemRoutes = require('./item.routes');
const itemCategoryRoutes = require('./item-category.routes');

app.use(orderItemRoutes);
app.use(orderRoutes);
app.use(itemRoutes);
app.use(itemCategoryRoutes);

module.exports = app;