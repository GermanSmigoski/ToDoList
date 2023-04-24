const { User } = require("../db");
const jwt = require("jsonwebtoken");
const randToken = require("rand-token");
const secretKey = randToken.generate(64);

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
        const newUser = User.findOrCreate({
          firstname,
          lastname,
          password,
          phonenumber,
          dateofbirth,
          image,
          email,
          gender,
        });
        const token = jwt.sign(
          { id: newUser.id, email: newUser.email },
          secretKey,
          { expiresIn: "1h" }
        );
        res.json({ token });
      }
    } catch (e) {
      res.status(404).send(e);
    }
  },
  userLogin: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "clave-secreta",
        { expiresIn: "1h" }
      );
      res.json({ token });
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  },
};
