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

// GET ALL USERS
var getUsers = async (req, res) => {
  const users = await User.findAll({});
  res.status(200).json({ data: users });
};

// GET USER BY ID
var getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json({ data: user });
};

// CREATE NEW USER
var postUsers = async (req, res) => {
  let data = req.body;
  if (data.length > 1) {
    const user = User.bulkCreate(data);
    res.status(200).json({ data: user });
  } else {
    const user = await User.create(data);
    res.status(200).json({ data: user });
  }
};

// DELETE USER BY ID
var deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({ data: user });
};

// UPDATE USER BY ID
var updateUserById = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const user = await User.update(updatedData, {
    where: {
      id: id,
    },
  });
  res.status(200).json({ data: user });
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  postUsers,
  deleteUserById,
  updateUserById,
};
