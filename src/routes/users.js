const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.getAllData);

router.post("/", userController.createNewUser);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
