const { Router } = require("express");
const { cartscontroller } = require("../controllers/carts.controller");
const router = Router();

router.post("/cart", cartscontroller.createCart);

router.delete("/cart/:id", cartscontroller.deleteCartById);

router.patch("/cart/:id", cartscontroller.changeCartById);
router.get("/cart", cartscontroller.getCarts);
router.patch("/user/add/:id", cartscontroller.addProducttoCart);
router.patch("/user/delete/:id", cartscontroller.deleteProducttoCart);

module.exports = router;