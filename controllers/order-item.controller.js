// Import
const orderItemService = require("../services/order-item.service");

class OrderItemController {
  async newOrderItem(req, res, next) {

    console.log(typeof req.body.orderId);
    if (typeof req.body.orderId !== "number") {
      res.status(400); // bad request
      return res.json({ message: "Incorrect request data" });
    }

    // Consume the service layer
    const result = await orderItemService.newOrderItem(req.body.orderId, req.body.createOrderItem);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }

  async orderItemDetails(req,res,next) {
    const result = await orderItemService.orderItemDetails(req.params.orderItemId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
  }

}

module.exports = OrderItemController;
