const swaggerJSDoc = require("swagger-jsdoc");
const bla = require('./routes/list')
const options = {
  swaggerDefinition: {
    info: {
      title: "API To Do List",
      version: "1.0.0",
      description:
        "Estas son los end points de la aplicación web de las listas de cosas para hacer",
    },
    basePath: "/",
  },

  apis: ["./routes/list"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
