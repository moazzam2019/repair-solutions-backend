const express = require("express");
const phoneController = require("../controllers/phoneController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(phoneController.getAllPhones)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    phoneController.createPhone
  );

router
  .route("/:id")
  .get(phoneController.getPhone)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    phoneController.updatePhone
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    phoneController.deletePhone
  );

module.exports = router;
