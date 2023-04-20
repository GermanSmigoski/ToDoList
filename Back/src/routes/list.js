const { Router } = require("express");
const { List } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  /**
   * @swagger
   * /list:
   *   get:
   *     summary: Obtiene una lista de cosas para haceer
   *     responses:
   *       200:
   *         description: Lista de cosas para hacer
   */
  try {
    let getList = List.findAll();
    res.status(200).send(getList);
  } catch (e) {
    res.status(404).send("No se encontro la ruta", e);
    console.log(e);
  }
});

module.exports = router;
