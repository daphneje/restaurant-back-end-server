const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Admin extends Model {}

  Admin.init(
    {
      adminId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "admin_id",
      },
      orderItemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "order_item_id",
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
      modelName: "Admin",
      tableName: "admin",
    }
  );

  return Admin;
};
