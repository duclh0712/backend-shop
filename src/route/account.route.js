const express = require("express");
const router = express.Router();
const accountController = require("../controller/account.controller");

router.get("/login", accountController.login)
router.get("/logout", accountController.logout)
router.get("/register", accountController.register)
router.post("/registered", accountController.registered)
router.post("/me", accountController.me)

module.exports = router;