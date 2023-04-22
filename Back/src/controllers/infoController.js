const { users, lists } = require("../infoPrueba");
const { List, User } = require("../db");

module.exports = {
  loadInfo: async (req, res) => {
    try {
      let infoList = List.findAll();
      let infoUser = User.findAll();
      if (!infoList || !infoUser) {
        let user = users.map((user) => user).flat();
        let dataUser = await User.bulkCreate(user);

        let list = lists.map((list) => list).flat();
        let dataList = await List.bulkCreate(list);
      }
      res.send(200).json("Base de datos cargada");
    } catch (e) {
      res.status(404).send(e);
    }
  },
};
