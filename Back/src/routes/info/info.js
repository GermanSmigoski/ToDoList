const { Router } = require("express");
const { loadInfo } = require("../../controllers/infoController");

const router = Router();

router.post("/", loadInfo);

module.exports = router;
