const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("node_sequelize", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false, // To stop logging info in cosole
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define User model
db.User = require("./user")(sequelize, DataTypes, Model);

// Define Contact model
db.Contact = require("./contact")(sequelize, DataTypes, Model);

db.sequelize.sync({ force: false }).then(() => {
  console.log("All models were synchronized successfully.");
});
module.exports = db;
