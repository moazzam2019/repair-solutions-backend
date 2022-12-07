const express = require("express");
const phoneController = require("../controllers/phoneController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(phoneController.getAllPhones)
  .post(authController.protect, phoneController.createPhone);

router
  .route("/:id")
  .get(phoneController.getPhone)
  .patch(authController.protect, phoneController.updatePhone)
  .delete(authController.protect, phoneController.deletePhone);

module.exports = router;
