const { Router } = require("express");
const express = require("express");
const list = require("./list/list");
const user = require("./user/user");

const router = Router();

router.use(express.json());
router.use("/list", list);
router.use("/user", user);

module.exports = router;
