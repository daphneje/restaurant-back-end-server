const express = require('express');
const router = express.Router();

// Import
const ItemCategoryController = require("../controllers/item-category.controller");

// Instantiate the class
const itemCategoryController = new ItemCategoryController();

// Retrieve Item Category details
router.get("/itemCategories/itemCategoryId/:itemCategoryId", itemCategoryController.itemCategoryDetails);

// Retrieve all Items
router.get("/itemCategories", itemCategoryController.getAllItemCategories);

module.exports = router;