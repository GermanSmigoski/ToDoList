const { Router } = require("express");
const express = require("express");
const list = require("./list/list");
const user = require("./user/user");
const info = require("./info/info");

const router = Router();

router.use(express.json());
router.use("/list", list);
router.use("/user", user);
router.use("/info", info);

module.exports = router;
