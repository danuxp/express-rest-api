const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/", userController.createNewUser);

router.patch("/:idUser", userController.updateUser);

module.exports = router;
