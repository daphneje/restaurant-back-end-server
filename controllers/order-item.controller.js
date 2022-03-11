// Import
const orderItemService = require("../services/order-item.service");

class OrderItemController {
  async newOrderItem(req, res, next) {
    try{
    // Consume the service layer
    const result = await orderItemService.newOrderItem(req.body.orderId, req.body.createOrderItem);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async orderItemDetails(req,res,next) {
    try{
    const result = await orderItemService.orderItemDetails(req.params.orderItemId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async orderItemsInOrder(req,res,next) {
    try{
    const result = await orderItemService.orderItemsInOrder(req.params.orderId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

}

module.exports = OrderItemController;
