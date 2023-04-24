const server = require("./src/app");
const app = require("./src/app"); // o el nombre de tu archivo de aplicación

const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 4000, () => {
    console.log(`server ready en el puerto ${process.env.PORT || 4000}`);
  });
});
