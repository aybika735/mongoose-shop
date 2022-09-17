const { Router } = require("express");
const {brandscontroller } = require("../controllers/brands.controller");
const router = Router();

router.post("/brands", brandscontroller.createBrand);

router.delete("/brands/:id", brandscontroller.deleteBrandById);

router.patch("/brands/:id", brandscontroller.changeBrandById);
router.get("/brands", brandscontroller.getBrands);

module.exports = router;