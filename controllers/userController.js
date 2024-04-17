var db = require("../models");
var User = db.User;

var addUser = async (req, res) => {
  const jane = await User.create({ firstName: "Bilal", lastName: "Ahmed" });
  // const jane = User.build({ firstName: "Jane" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName); // "Jane"
  // await jane.save();
  console.log("Jane was saved to the database!");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = {
  addUser,
};
