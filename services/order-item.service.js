const { Order, OrderItem } = require("../models");

module.exports = {
  newOrderItem: async (orderId, createOrderItem) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Input data - format
    // {
    //   "orderId": 2,
    //   "createOrderItem": {
    //       "itemId": 45,
    //       "itemTitle": "Spaghetti Carbonara",
    //       "itemUnitPrice": "9.90",
    //       "quantity": 1,
    //       "specialRequest": "No onions",
    //       "status": "ongoing"
    //   }
    // }

    // console.log(`orderId: ${orderId}`);
    // console.log(`createOrderItem.itemId: ${createOrderItem.itemId}`);
    // console.log(`createOrderItem.itemTitle: ${createOrderItem.itemTitle}`);
    // console.log(`createOrderItem.itemUnitPrice: ${createOrderItem.itemUnitPrice}`);
    // console.log(`createOrderItem.quantity: ${createOrderItem.quantity}`);
    // console.log(`createOrderItem.specialRequest: ${createOrderItem.specialRequest}`);
    // console.log(`createOrderItem.status: ${createOrderItem.status}`);

    // const order = await Order.findByPk(orderId);

    // if (!order) {
    //   result.message = `Order ID ${orderId} is not found, order item cannot be added.`;
    //   result.data = 'Not applicable';      
    //   result.status = 404;
    //   return result;
    // }

    const orderItem = await OrderItem.create(
      {
        orderId: orderId,
        itemId: createOrderItem.itemId,
        itemTitle: createOrderItem.itemTitle,
        itemUnitPrice: createOrderItem.itemUnitPrice,
        quantity: createOrderItem.quantity,
        specialRequest: createOrderItem.specialRequest,
        status: createOrderItem.status
      }
    );

      console.log(orderItem);
      
      result.data = orderItem;
      result.status = 200;
      result.message = "Order Item created";
      return result;
  },

  orderItemDetails: async (orderItemId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const orderItem = await OrderItem.findByPk(orderItemId);

    if (!orderItem) {
        result.message = `Order Item with OrderItemId:${orderItemId} not found.`;
        result.status = 404;
        return result;
      }

    if (orderItem) {
        result.message = `Order Item with OrderItemId:${orderItemId} found.`;
        result.data = orderItem    
        result.status = 200;
        return result;
    }
  },

  orderItemsInOrder: async (orderId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const order = await OrderItem.findAll(
      {
        where: { orderId: orderId}
      }
    );

    console.log(`order: ${order}`);
    if (order.length <= 0) {
        result.message = `Order OrderId:${orderId} not found.`;
        result.status = 404;
        return result;
      }

    if (order) {
        result.message = `Order items in Order OrderId:${orderId} found.`;
        result.data = order    
        result.status = 200;
        return result;
    }
  }
};
