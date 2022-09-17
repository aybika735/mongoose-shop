const Product = require("../models/Product.model");

module.exports.productscontroller = {
  createProduct: async function (req, res) {
    try {
      await Product.create({
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        category: req.body.category,
        reviews: req.body.reviews,
        brand:req.body.brand,

        
      });
      res.json("Товар добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteProductById: async function (req, res) {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      res.json("Товар удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeProductById: async function (req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        category: req.body.category,
        reviews: req.body.reviews,
        brand:req.body.brand,
      });
      res.json("Товар изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getProducts: async function (req, res) {
    try {
      const products = await Product.find().populate('brand');
      res.json(products);
    } catch (error) {
      console.log(error.toString());
    }
  },
  getProductsbyCategory: async function(req, res){
    try{
        const products = await Product.find({ category: req.params.id });
        res.json(products);
    }catch(error){
        console.log(error.toString());
    }
  },
  getProductsbyBrand: async function(req, res){
    try{
        const products = await Product.find({ brand: req.params.id });
        res.json(products);
    }catch(error){
        console.log(error.toString());
    }
  },
};