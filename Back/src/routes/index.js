const { Router } = require("express");
const express = require("express");
const list = require("./list");

const router = Router();

router.use(express.json());
router.use("/list", list);

module.exports = router;
