const express = require("express");

const {
  createCoupon,
  getAllCoupons,
  getCoupon,
  deleteCoupon,
  updateCoupon,
} = require("../controllers/coupon");

const {
  isRequestValidated,
  validateCouponRequest,
  validateCouponDeleteRequest,
  validateCouponUpdateRequest,
} = require("../validators/coupon");

const router = express.Router();

router.post("/", validateCouponRequest, isRequestValidated, createCoupon);
router.get("/", getAllCoupons);
router.get("/:id", getCoupon);
router.delete("/:id", deleteCoupon);
router.patch(
  "/",
  validateCouponUpdateRequest,
  isRequestValidated,
  updateCoupon
);

module.exports = router;
