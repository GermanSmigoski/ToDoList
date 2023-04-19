const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("list", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
  });
};
