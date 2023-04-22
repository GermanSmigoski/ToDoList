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
    try {
      const id = req.params.id;
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
};
