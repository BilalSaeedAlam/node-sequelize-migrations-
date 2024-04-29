// **
// Sequelize Define Method | Function Method
// **
// const {  DataTypes } = require('sequelize');
// const sequelize = require("./index")

module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      // Model attributes are defined here
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grade: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      passing_year: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      contact_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Other model options go here
      tableName: "Educations",
      //   timestamps:false
    }
  );

  // `sequelize.define` also returns the model
  console.log(Education === sequelize.models.Education); // true
  return Education;

  // module.exports = Contact
};
