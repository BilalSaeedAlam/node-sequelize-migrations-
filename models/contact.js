
// **
// Sequelize Define Method | Function Method
// **
const {  DataTypes } = require('sequelize');
const sequelize = require("./index")

const Contact = sequelize.define('Contact', {
  // Model attributes are defined here
  permenentAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currentAddress: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName:"Contacts",
//   timestamps:false
});

// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true

module.exports = Contact