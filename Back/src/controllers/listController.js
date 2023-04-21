const { List } = require("../db");

module.exports = {
  getList: async () => {
    let listInfo = await List.findAll();
    return listInfo;
  },
  postList: async (title, content, date) => {
    if (!title || !content || !date) {
      return "falta ingresar datos";
    } else {
      let newList = List.findOrCreate({
        title,
        content,
        date,
      });
      return newList;
    }
  },
};
