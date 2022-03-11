const { Item } = require("../models");

module.exports = {
  // if set up admin, we can call to create new item in database
  newItem: async (itemCategoryId, createItem) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Input data - format
    // {
    //   "itemCategoryId": 1,
    //   "createItem": {
    //       "title": "foodName",
    //       "description": "food description", 
    //       "unitPrice": "10.00",
    //       "image": "../assests/foodimage"
    //   }
    // }

    console.log(`itemCategoryId: ${itemCategoryId}`);
    console.log(`createItem.title: ${createItem.title}`);
    console.log(`createItem.description: ${createItem.description}`);
    console.log(`createItem.unitPrice: ${createItem.unitPrice}`);
    console.log(`createItem.image: ${createItem.image}`);

    const item = await Item.create(
      {
        itemCategoryId: itemCategoryId,
        title: createItem.title,
        description: createItem.description,
        unitPrice: createItem.unitPrice,
        image: createItem.image
      }
    );

      console.log(item);
      
      result.data = item;
      result.status = 200;
      result.message = "Item created";
      return result;
  },

  itemDetails: async (itemId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const item = await Item.findByPk(itemId);

    if (!item) {
        result.message = `Item with itemId:${itemId} not found.`;
        result.status = 404;
        return result;
      }

    if (item) {
        result.message = `Item with itemId:${itemId} found.`;
        result.data = item    
        result.status = 200;
        return result;
    }
  },

  getAllItems: async () => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const items = await Item.findAll();

    if (!items) {
        result.message = "No existing item found.";
        result.status = 404;
        return result;
      }

        result.message = "List of all items generated.";
        result.data = items    
        result.status = 200;
        return result;

  }
};
