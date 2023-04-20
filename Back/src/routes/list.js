const { Router } = require("express");
const { List } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let getList = List.findAll();
    res.status(200).send(getList);
  } catch (e) {
    res.status(404).send("No se encontro la ruta", e);
    console.log(e);
  }
});

module.exports = router;
