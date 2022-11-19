const express = require("express");
const phoneController = require("../controllers/phoneController");

const router = express.Router();

// router.param('id', phoneController.checkID);

// router
//   .route("/top-5-cheap")
//   .get(phoneController.aliasTopTours, phoneController.getAllPhones);

// router.route("/tour-stats").get(phoneController.getTourStats);
// router.route("/monthly-plan/:year").get(phoneController.getMonthlyPlan);

router
  .route("/")
  .get(phoneController.getAllPhones)
  .post(phoneController.createPhone);

router
  .route("/:id")
  .get(phoneController.getPhone)
  .patch(phoneController.updatePhone)
  .delete(phoneController.deletePhone);

module.exports = router;
