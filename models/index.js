const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('node_sequelize', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db = {};
  db.sequelize = Sequelize;
  db.sequelize = sequelize;
  db.user = require("./user")(sequelize, DataTypes, Model)
  db.contact = require("./contact")(sequelize, DataTypes)
  db.sequelize.sync({force:true})

  module.exports = db