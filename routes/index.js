const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const { testConnection } = require('../models');
testConnection();

const corsOptions = {
  origin: ["http://localhost:3000", "https://polar-brushlands-46080.herokuapp.com/"]
};

app.use(cors(corsOptions));

app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to restaurant application back-end server." });
});

const orderItemRoutes = require('./order-item.routes');
const orderRoutes = require('./order.routes');
const itemRoutes = require('./item.routes');
const itemCategoryRoutes = require('./item-category.routes');

app.use(orderItemRoutes);
app.use(orderRoutes);
app.use(itemRoutes);
app.use(itemCategoryRoutes);

module.exports = app;