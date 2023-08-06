// auth-service/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateMiddleware } = require("../middlewares/authenticate");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/postcomment", authenticateMiddleware, userController.postComment);
router.post("/getcomment",authenticateMiddleware, userController.getComment);

module.exports = router;
