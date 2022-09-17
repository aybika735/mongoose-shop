const Brand = require("../models/Brand.model");

module.exports.brandscontroller = {
  createBrand: async function (req, res) {
    try {
      await Brand.create({
        name: req.body.name,
      });
      res.json("Бренд добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteBrandById: async function (req, res) {
    try {
      const brand = await Brand.findByIdAndRemove(req.params.id);
      res.json("Бренд удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeBrandById: async function (req, res) {
    try {
      const brand = await Brand.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Бренд изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  getBrands: async function (req, res) {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      console.log(error.toString());
    }
  },
};

