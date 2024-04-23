// **
// Modal with Class Method | Extand Modal
// **
// const {  DataTypes, Model } = require('sequelize');
// const sequelize = require("./index")

module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("firstName");
          return rawValue ? rawValue.toUpperCase() : null;
        },
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
          throw new Error("Do not try to set the `fullName` value!");
        },
      },
      favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: "green",
      },
      age: DataTypes.INTEGER,
      cash: DataTypes.INTEGER,
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "User", // We need to choose the model name
    }
  );

  // the defined model is the class itself
  console.log(User === sequelize.models.User); // true
  return User;
  // module.exports = User
};

// **
// Sequelize Define Method
// **
// const {  DataTypes } = require('sequelize');
// const sequelize = require("./index")

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   tableName:"users",
// //   timestamps:false
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// module.exports = User
