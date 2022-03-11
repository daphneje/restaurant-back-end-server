const { ItemCategory } = require("../models");

module.exports = {
  itemCategoryDetails: async (itemCategoryId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const itemCategory = await ItemCategory.findByPk(itemCategoryId);

    if (!itemCategory) {
        result.message = `Item Category with itemCategoryId:${itemCategoryId} not found.`;
        result.status = 404;
        return result;
      }

    if (itemCategory) {
        result.message = `Item Category with itemCategoryId:${itemCategoryId} found.`;
        result.data = itemCategory    
        result.status = 200;
        return result;
    }
  },

  getAllItemCategories: async () => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const itemCategories = await ItemCategory.findAll();

    if (!itemCategories) {
        result.message = "No existing item found.";
        result.status = 404;
        return result;
      }

        result.message = "List of all Item Categories generated.";
        result.data = itemCategories    
        result.status = 200;
        return result;

  }
};
