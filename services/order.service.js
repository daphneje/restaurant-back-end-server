const { Order } = require("../models");

module.exports = {
  newOrder: async (tableId, createOrder) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Input data - format
    // {
    //   "tableId": 3,
    //   "createOrder": {
    //       "restaurantId": 1,
    //       "noOfPax": 5,
    //       "billAmount": "0", //  (Value must be number else omit line)
    //       "status": "Pending"
    //   }
    // }

    console.log(`tableId: ${tableId}`);
    console.log(`createOrder.restaurantId: ${createOrder.restaurantId}`);
    console.log(`createOrder.noOfPax: ${createOrder.noOfPax}`);
    console.log(`createOrder.billAmount: ${createOrder.billAmount}`);
    console.log(`createOrder.status: ${createOrder.status}`);

    const order = await Order.create(
      {
        tableId: tableId,
        restaurantId: createOrder.restaurantId,
        noOfPax: createOrder.noOfPax,
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
        result.message = `Order with orderId:${orderId} not found.`;
        result.status = 404;
        return result;
      }

    if (order) {
        result.message = `Order with orderId:${orderId} found.`;
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

  // getOrderByTableId: async (tableId) => {
  //   let result = {
  //     message: null,
  //     status: null,
  //     data: null,
  //   };

  //   const order = await Order.findOne({
  //     where: {
  //       tableId: tableId
  //     }
  //   });

  //   if (!order) {
  //       result.message = `Order with tableId:${tableId} not found.`;
  //       result.status = 404;
  //       return result;
  //     }

  //   if (order) {
  //       result.message = `Order with tableId:${tableId} found.`;
  //       result.data = order    
  //       result.status = 200;
  //       return result;
  //   }
  // }


};
