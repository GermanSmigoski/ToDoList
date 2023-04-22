const { List } = require("../db");

module.exports = {
  getList: async (req, res) => {
    try {
      let allLists = List.findAll();
      res.status(200).send(allLists);
    } catch (e) {
      res.status(404).send(e);
    }
  },
  postList: async (req, res) => {
    let { title, content, date } = req.body;
    try {
      if (!title || !content || !date) {
        return "Falta ingresar datos";
      } else {
        let newList = List.findOrCreate({
          title,
          content,
          date,
        });
        res.status(200).send(newList);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
