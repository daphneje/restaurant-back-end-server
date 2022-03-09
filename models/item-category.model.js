const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class ItemCategory extends Model {}

  ItemCategory.init(
    {
      itemCategoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "item_category_id",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "title",
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
      modelName: "ItemCategory",
      tableName: "item_categories",
    }
  );

  return ItemCategory;
};
