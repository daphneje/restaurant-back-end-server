// Import
const itemService = require("../services/item.service");

class ItemController {
  async newItem(req, res, next) {
    try{
    // Consume the service layer
    const result = await itemService.newItem(req.body.itemCategoryId, req.body.createItem);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async itemDetails(req,res,next) {
    try{
    const result = await itemService.itemDetails(req.params.itemId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async getAllItems(req,res,next) {
    try{
    const result = await itemService.getAllItems()
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

}

module.exports = ItemController;
