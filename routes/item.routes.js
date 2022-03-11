const express = require('express');
const router = express.Router();

// Import
const ItemController = require("../controllers/item.controller");

// Instantiate the class
const itemController = new ItemController();

// Invoke newItem() in orderItemController based on the route
router.post('/items', itemController.newItem);

// Retrieve Item details
router.get("/items/itemId/:itemId", itemController.itemDetails);

// Retrieve all Items
router.get("/items", itemController.getAllItems);

// Delete an Item  with id
// router.delete("/items/:itemId", itemController.delete);

module.exports = router;