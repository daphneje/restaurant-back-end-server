const express = require('express');
const router = express.Router();

// Import
const OrderController = require("../controllers/order.controller");

// Instantiate the class
const orderController = new OrderController();

// Invoke newOrder() in orderItemController based on the route
router.post('/orders', orderController.newOrder);

// Retrieve Order details with orderId
router.get("/orders/orderId/:orderId", orderController.orderDetails);

// Retrieve all Orders
router.get("/orders", orderController.getAllOrders);

// Retrieve Order details with tableId
// router.get("/orders/tableId/:tableId", orderController.getOrderByTableId);

// Delete an Order with id
// router.delete("/orders/:orderId", orderController.delete);

module.exports = router;