const { User } = require("../db");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let allUsers = await User.findAll();
      res.status(200).send(allUsers);
    } catch (e) {
      res.status(404).send(e);
    }
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne({
        where: { id: id },
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
  postUser: async (req, res) => {
    let {
      firstname,
      lastname,
      phonenumber,
      password,
      dateofbirth,
      image,
      email,
      gender,
    } = req.body;
    try {
      if (
        !firstname ||
        !lastname ||
        !phonenumber ||
        !password ||
        !dateofbirth ||
        !image ||
        !email ||
        !gender
      ) {
        return "Falta ingresar Datos";
      } else {
        let newUser = User.findOrCreate({
          firstname,
          lastname,
          password,
          phonenumber,
          dateofbirth,
          image,
          email,
          gender,
        });
      }
      res.status(200).send(newUser);
    } catch (e) {
      res.status(404).send(e);
    }
  },
};
