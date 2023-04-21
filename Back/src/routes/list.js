const { Router } = require("express");
const controller = require("../controllers/listController");
const router = Router();

router.get("/", (req, res) => {
  try {
    let listInfo = controller.getList();
    res.status(200).send(listInfo);
  } catch (e) {
    res.status(404).send("No se encontro la ruta");
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  let { title, content, date } = req.body;
  try {
    return controller.postList(title, content, date).then(() => {
      return res.send("Lista creada");
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
