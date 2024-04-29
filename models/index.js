const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("node_sequelize", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: true, // To stop logging info in cosole
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

// Modals
db.User = require("./user")(sequelize, DataTypes, Model);
db.Contact = require("./contact")(sequelize, DataTypes, Model);
db.UserContacts = require("./userContacts")(
  sequelize,
  DataTypes,
  db.User,
  db.Contact
);
db.Educaton = require("./education")(sequelize, DataTypes, Model);

// Relations One to One
// db.User.hasOne(db.Contact, { foreignKey: "user_id", as: "contactDetails" });
// db.Contact.belongsTo(db.User, { foreignKey: "user_id", as: "userDetails" });

// Relations One to Many
db.User.hasMany(db.Contact, { foreignKey: "user_id", as: "contactDetails" });
db.Contact.belongsTo(db.User, { foreignKey: "user_id", as: "userDetails" });

db.Contact.hasMany(db.Educaton, {
  foreignKey: "contact_id",
  as: "educationDetails",
});
db.Educaton.belongsTo(db.Contact, {
  foreignKey: "contact_id",
  as: "contactDetails",
});

// Relations Many to Many
// db.User.belongsToMany(db.Contact, {
//   through: db.UserContacts,
//   foreignKey: "user_id",
// });
// db.Contact.belongsToMany(db.User, {
//   through: db.UserContacts,
//   foreignKey: "contact_id",
// });

db.sequelize.sync({ force: false }).then(() => {
  console.log("All models were synchronized successfully.");
});
module.exports = db;
