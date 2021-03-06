const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Table extends Model {}

  Table.init(
    {
      tableId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "table_id",
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
      modelName: "Table",
      tableName: "tables",
    }
  );

  return Table;
};
