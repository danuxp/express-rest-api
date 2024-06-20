const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.getAllData);

router.post("/", userController.createNewData);

router.patch("/:id", userController.updateData);

router.delete("/:id", userController.deleteUser);

module.exports = router;
