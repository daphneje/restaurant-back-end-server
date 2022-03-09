const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class OrderItem extends Model {}

  OrderItem.init(
    {
      orderItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "order_item_id",
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "order_id",
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "item_id",
      },

      itemTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "item_title",
      },
      itemUnitPrice: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: "item_unit_price",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "quantity",
      },
      specialRequest: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "special_request",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "status",
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
      modelName: "OrderItem",
      tableName: "order_items",
    }
  );

  return OrderItem;
};
