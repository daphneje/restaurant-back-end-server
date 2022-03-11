// Import
const orderService = require("../services/order.service");

class OrderController {
  async newOrder(req, res, next) {
    try{
    // Consume the service layer
    const result = await orderService.newOrder(req.body.tableId, req.body.createOrder);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async orderDetails(req,res,next) {
    try{
    const result = await orderService.orderDetails(req.params.orderId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async getAllOrders(req,res,next) {
    try{
    const result = await orderService.getAllOrders()
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

}

module.exports = OrderController;
