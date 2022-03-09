// Import sequelize

const { Sequelize } = require("sequelize");


// DB Connection Configuration

process.env.HEROKU_POSTGRESQL_BRONZE_URL =
  "postgres://fgdzjnamuxrojs:60d3573dd688017ebc4c57bdee942092081cc056f58372b4c758e742288c041a@ec2-18-214-140-149.compute-1.amazonaws.com:5432/d2r9hhkecejfbl";

const sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  host: "ec2-18-214-140-149.compute-1.amazonaws.com",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


// Test connection function

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}


//Import models

const Table = require("./table.model")(sequelize);
const Order = require("./order.model")(sequelize);
const OrderItem = require("./order-item.model")(sequelize);
const Admin = require("./admin.model")(sequelize);
const ItemCategory = require("./item-category.model")(sequelize);
const Item = require("./item.model")(sequelize);


//Create associations 
  
Order.belongsTo(Table, {
    foreignKey: "table_id",
  });
  
OrderItem.belongsTo(Order, {
    foreignKey: "order_id",
  });

Item.belongsTo(ItemCategory, {
    foreignKey: "item_category_id",
});

Admin.belongsTo(OrderItem, {
    foreignKey: "order_item_id",
  });


// Exports (remember enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Table,
  Order,
  OrderItem,
  Admin,
  ItemCategory,
  Item,
};
