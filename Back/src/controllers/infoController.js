const data = require("../infoPrueba");
const { List, User } = require("../db");

module.exports = {
  loadInfo: async (req, res) => {
    try {
      let infoList = await List.findAll();
      let infoUser = await User.findAll();
      if (!infoList || !infoUser) {
        let user = data.map((user) => user.user).flat();
        await User.bulkCreate(user);

        let list = data.map((list) => list.list).flat();
        await List.bulkCreate(list);
      }
      res.status(200).send("Database charged");
    } catch (e) {
      res.status(404).send('hola');
    }
  },
};
