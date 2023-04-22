const { Router } = require("express");
const { loadInfo } = require("../../controllers/infoController");

const router = Router();

router.get("/", loadInfo);

module.exports = router