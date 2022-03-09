const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Order extends Model {}

  Order.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "order_id",
      },
      tableId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "table_id",
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date_time",
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "restaurant_id",
      },
      billAmount: {
        type: DataTypes.NUMBER,
        allowNull: true,
        field: "unit_price",
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
      modelName: "Order",
      tableName: "orders",
    }
  );

  return Order;
};
