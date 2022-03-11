// Import
const itemCategoryService = require("../services/item-category.service");

class ItemCategoryController {
  async itemCategoryDetails(req,res,next) {
    try{
    const result = await itemCategoryService.itemCategoryDetails(req.params.itemCategoryId)
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

  async getAllItemCategories(req,res,next) {
    try{
    const result = await itemCategoryService.getAllItemCategories()
    res.status(result.status);
    console.log (result);

    //Return results
    return res.json({data: result.data, message: result.message});
    } catch (error) {
    return res.status(500).json(error);
    }
  }

}

module.exports = ItemCategoryController;
