const User = require("../models/User.model");

module.exports.userscontroller = {
  createUser: async function (req, res) {
    try {
      await User.create({
       name: req.body.name,
       reviews: req.body.reviews
       
      });
      res.json("Пользователь добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteUserById: async function (req, res) {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeUserById: async function (req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
       name: req.body.name,
       reviews: req.body.reviews
       
      });
      res.json("Пользователь изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getUsers: async function (req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - пользователь может оставлять свой отзыв;
  addReviews: async function (req, res) {
    try {
      const reviews = await User.findByIdAndUpdate(req.params.id,{
        $push: { reviews: req.body.reviews },
      });
      res.json(reviews);
    } catch (error) {
      console.log(error.toString());
    }
  },

};