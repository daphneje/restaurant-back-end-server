const express = require('express');
const router = express.Router();

// Import
const OrderController = require("../controllers/order.controller");

// Instantiate the class
const orderController = new OrderController();

// Invoke newOrderItem() in orderItemController based on the route
router.post('/orders', orderController.newOrder);

// Retrieve Order Item details
router.get("/orders/orderId/:orderId", orderController.orderDetails);

// Retrieve all Orders
router.get("/orders", orderController.getAllOrders);

// Delete an Order  with id
// router.delete("/orders/:orderId", orderController.delete);

module.exports = router;