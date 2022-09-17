const { Router } = require("express");
const {
  reviewscontroller,
} = require("../controllers/reviews.controllers");
const router = Router();

router.post("/reviews", reviewscontroller.createReview);

router.delete("/reviews/:id", reviewscontroller.deleteReviewById);

router.patch("/reviews/:id", reviewscontroller.changeReviewById);
router.get("/reviews", reviewscontroller.getReviews);
router.get("/user/product/:id", reviewscontroller.getReviewsbyProduct);
module.exports = router;