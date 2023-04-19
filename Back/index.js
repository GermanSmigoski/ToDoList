const http = require('http');
const app = require('./src/app'); // o el nombre de tu archivo de aplicación

const serverHttp = http.createServer(app);

const { conn } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  serverHttp.listen(process.env.PORT || 4000, () => {
    console.log(`server ready en el puerto ${process.env.PORT || 4000}`);
  });
});