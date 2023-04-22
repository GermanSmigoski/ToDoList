const { Router } = require("express");
const { getAllUsers, getUserById } = require("../../controllers/userController");

const router = Router();

router.get('/', getAllUsers)
router.get('/:id', getUserById)

module.exports = router