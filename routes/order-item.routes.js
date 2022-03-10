const express = require('express');
const router = express.Router();

// Import
const OrderItemController = require("../controllers/order-item.controller");

// Instantiate the class
const orderItemController = new OrderItemController();

// Invoke newOrderItem() in orderItemController based on the route
router.post('/orderItem/newOrderItem', orderItemController.newOrderItem);

// Retrieve Order Item details
router.get("/orderItem/:orderItemId", orderItemController.orderItemDetails);

// Delete an Order Ittem with id
// router.delete("/orderItem/:orderItemId", orderItemController.delete);

module.exports = router;