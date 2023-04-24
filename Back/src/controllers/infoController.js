const { List, User } = require("../db");

const newUser = {
  firstName: "Juan",
  lastName: "Pérez",
  phoneNumber: "1234567890",
  password: "contraseña123",
  dateOfBirth: "1990-01-01",
  email: "juan.perez@example.com",
  gender: "male",
};

const newList = {
  title: "Cosas para hacer 2023",
  content: "-pasear al perro cortar el cesped",
  date: "2023-04-22",
};
module.exports = {
  loadInfo: async (req, res) => {
    try {
      User.create(newUser);
      List.create(newList);
      res.status(200).send("Database charged");
    } catch (e) {
      res.status(404).send("hola");
    }
  },
};
