const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Item extends Model {}

  Item.init(
    {
      itemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "item_id",
      },
      itemCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "item_category_id",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "title",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "description",
      },
      unitPrice: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: "unit_price",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "image",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "items",
    }
  );

  return Item;
};
