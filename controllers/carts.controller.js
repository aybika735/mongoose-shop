const Cart = require("../models/Cart.model");


module.exports.cartscontroller = {
  createCart: async function (req, res) {
    try {
      await Cart.create({
        user: req.body.user,
        shop: req.body.shop,
      
      });
      res.json("Корзина добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  deleteCartById: async function (req, res) {
    try {
      const cart = await Cart.findByIdAndRemove(req.params.id);
      res.json("Корзина удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCartById: async function (req, res) {
    try {
      const cart = await Cart.findByIdAndUpdate(req.params.id, {
       user: req.body.user,
       shop: req.body.shop,
      
      });
      res.json("Корзина изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getCarts: async function (req, res) {
    try {
      const carts = await Cart.find().populate('user');
      res.json(carts);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - пользователь может добавить товар в корзину;
  addProducttoCart: async function (req, res) {
    try {
      const products = await Cart.findByIdAndUpdate(req.params.id,{
        $push: { shop: req.body.shop },
      });
      res.json(products);
    } catch (error) {
      console.log(error.toString());
    }
  },
   // - пользователь может удалить товар из корзины;
   deleteProducttoCart: async function (req, res) {
    try {
      const products = await Cart.findByIdAndUpdate(req.params.id,{
        $pull: { shop: req.body.shop },
      });
      res.json(products);
    } catch (error) {
      console.log(error.toString());
    }
  },
};