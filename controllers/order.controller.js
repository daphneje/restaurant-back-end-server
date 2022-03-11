// Import
const orderService = require("../services/order.service");

class OrderController {
  async newOrder(req, res, next) {

    // Consume the service layer
    const result = await orderService.newOrder(req.body.tableId, req.body.createOrder);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }

  async orderDetails(req,res,next) {
    const result = await orderService.orderDetails(req.params.orderId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
  }

  async getAllOrders(req,res,next) {
    const result = await orderService.getAllOrders()
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
  }

}

module.exports = OrderController;
