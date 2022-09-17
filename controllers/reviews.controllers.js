const Review = require("../models/Review.model");

module.exports.reviewscontroller = {
  createReview: async function (req, res) {
    try {
      await Review.create({
       text: req.body.text,
       product: req.body.product,
      });
      res.json("Отзыв добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteReviewById: async function (req, res) {
    try {
      const review = await Review.findByIdAndRemove(req.params.id);
      res.json("Отзыв удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeReviewById: async function (req, res) {
    try {
      const review = await Review.findByIdAndUpdate(req.params.id, {
       text: req.body.text,
       product: req.body.product,
      });
      res.json("Отзыв изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getReviews: async function (req, res) {
    try {
      const reviews = await Review.find().populate('product');
      res.json(reviews);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // пользователь может смотреть отзывы к товару;
  getReviewsbyProduct: async function(req, res){
    try{
        const reviews = await Review.find({ product: req.params.id }).populate('product');
        res.json(reviews);
    }catch(error){
        console.log(error.toString());
    }
  }
};