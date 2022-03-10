const { Order, OrderItem } = require("../models");

module.exports = {
  newOrderItem: async (orderId, createOrderItem) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    console.log(orderId);
    console.log(createOrderItem);

    const order = await Order.findByPk(orderId);

    if (!order) {
      result.message = `Order ID ${orderId} is not found.`;
      result.status = 404;
      return result;
    }

    const orderItem = await OrderItem.create({
      orderId: orderId,
      itemTitle: createOrderItem.itemTitle,
      itemUnitPrice: createOrderItem.itemUnitPrice,
      quantity: createOrderItem.quantity,
      specialRequest: rcreateOrderItem.specialRequest,
      status: createOrderItem.status
    });

      // console.log(orderItem.itemTitle);
      if (orderItem) {
      result.data = orderItem;
      result.status = 200;
      result.message = "Order Item created";
      return result;
    }
  },

  orderItemDetails: async (orderItemId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const orderItem = await OrderItem.findByPk(orderItemId);

    if (!orderItem) {
        result.message = `Order Item with OrderItemId ${orderItemId} not found.`;
        result.status = 404;
        return result;
      }

    if (orderItem) {
        result.message = 'Order Item Found';
        result.data=orderItem    
        result.status = 200;
        return result;
    }
  }
};
