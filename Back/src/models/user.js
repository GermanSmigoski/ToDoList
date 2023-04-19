const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
    con: {
      type: DataTypes.STRING,
      defaultValue: "Connected",
    },
  });
};
