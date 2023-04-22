const { Router } = require("express");
const { getList, postList } = require("../../controllers/listController");
const router = Router();

router.get("/", getList);
router.post("/", postList);

module.exports = router;
