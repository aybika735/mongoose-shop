const { Router } = require("express");
const {
  productscontroller,
} = require("../controllers/products.controllers");
const router = Router();

router.post("/admin/products", productscontroller.createProduct);

router.delete("/admin/products/:id", productscontroller.deleteProductById);

router.patch("/admin/products/:id", productscontroller.changeProductById);
router.get("/user/products", productscontroller.getProducts);
router.get("/user/category/:id", productscontroller.getProductsbyCategory);
router.get("/user/brand/:id", productscontroller.getProductsbyBrand);
module.exports = router;