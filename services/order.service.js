const { Order, OrderItem } = require("../models");

module.exports = {
  newOrder: async (tableId, createOrder) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Input data - format
    // {
    //   "tableId": 2,
    //   "createOrder": {
    //       "restaurantId": 1,
    //       "billAmount": "",
    //       "status": "pending"
    //   }
    // }

    console.log(`tableId: ${tableId}`);
    console.log(`createOrder.restaurantId: ${createOrder.restaurantId}`);
    console.log(`createOrder.billAmount: ${createOrder.billAmount}`);
    console.log(`createOrder.status: ${createOrder.status}`);

    const order = await Order.create(
      {
        tableId: tableId,
        restaurantId: createOrder.restaurantId,
        billAmount: createOrder.billAmount,
        status: createOrder.status
      }
    );

      console.log(order);
      
      result.data = order;
      result.status = 200;
      result.message = "Order created";
      return result;
  },

  orderDetails: async (orderId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const order = await Order.findByPk(orderId);

    if (!order) {
        result.message = `Order with OrderId:${orderId} not found.`;
        result.status = 404;
        return result;
      }

    if (order) {
        result.message = 'Order with OrderId:${orderId} found.';
        result.data = order    
        result.status = 200;
        return result;
    }
  },

  getAllOrders: async () => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const orders = await Order.findAll();

    if (!orders) {
        result.message = "No existing order found.";
        result.status = 404;
        return result;
      }

        result.message = "List of all orders generated.";
        result.data = orders    
        result.status = 200;
        return result;

  }
};
