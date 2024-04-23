const { Sequelize, Op, where } = require("sequelize");
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

// QUERY USER
var queryUser = async (req, res) => {
  // Craete Data with specific fields
  //   const user = await User.create(
  //     {
  //       firstName: "Bilal",
  //       lastName: "Ahmed",
  //     },
  //     { fields: ["lastName"] }
  //   );
  const user = await User.findAll({
    // attributes: [
    //"firstName",
    //["lastName", "last_name"],
    // [Sequelize.fn("COUNT", Sequelize.col("firstName")), "count"],
    // ],
    //*********************************/
    // attributes: { exclude: ["lastName"] },
    // attributes: {
    //   include: ["id"],
    // },
    /**********************************/
    // where: {
    //   id: {
    //     [Op.gt]: 3,
    //   },
    // [Op.or]: [{ id: { [Op.gt]: 0 } }, { lastName: "Alam" }],
    //},
    /***********************************/
    // order: [
    //   // Will escape title and validate DESC against a list of valid direction parameters
    //   ["firstName", "DESC"],
    // ],
    /***********************************/
    // group: "lastName",
    /***********************************/
    // offset: 3,
    // limit: 3,
  });
  res.status(200).json({ data: user });
};

// FINDERS
var finderUser = async (req, res) => {
  const id = req.params.id;
  //************************ */
  // FIND ALL
  // const user = await User.findAll({
  //   where: {
  //     lastName: "Alam",
  //   },
  // });
  //************************ */
  // FIND ONE
  // const user = await User.findOne({
  //   where: {
  //     lastName: "Alam",
  //   },
  // });
  //************************ */
  // FIND BY PK
  // const user = await User.findByPk(1);
  //************************ */
  // FIND BY CREATE
  const [user, created] = await User.findOrCreate({
    where: { firstName: "Bilal" },
    defaults: {
      lastName: "Alam",
    },
  });
  res.status(200).json({ data: user, created: created });
};

// GET SET VITUALS
var getSetVirtuals = async (req, res) => {
  const user = await User.findAll({});
  res.status(200).json({ data: user });
};
module.exports = {
  addUser,
  getUsers,
  getUserById,
  postUsers,
  deleteUserById,
  updateUserById,
  queryUser,
  finderUser,
  getSetVirtuals,
};
