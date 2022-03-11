const express = require('express');
const router = express.Router();

// Import
const OrderItemController = require("../controllers/order-item.controller");

// Instantiate the class
const orderItemController = new OrderItemController();

// Invoke newOrderItem() in orderItemController based on the route
router.post('/orderItems', orderItemController.newOrderItem);

// Retrieve Order Item details
router.get("/orderItems/orderItemId/:orderItemId", orderItemController.orderItemDetails);

// Retrieve all Order Items in an Order
router.get("/orderItems/orderId/:orderId", orderItemController.orderItemsInOrder);

// Delete an Order Item with id
// router.delete("/orderItems/:orderItemId", orderItemController.delete);

module.exports = router;