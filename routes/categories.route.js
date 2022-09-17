const { Router } = require("express");
const {categoriescontroller} = require("../controllers/categories.controller");
const router = Router();

router.post("/admin/categories", categoriescontroller.createCategory);

router.delete("/admin/categories/:id", categoriescontroller.deleteCategoryById);

router.patch("/admin/categories/:id", categoriescontroller.changeCategoryById);
router.get("/user/categories", categoriescontroller.getCategories);

module.exports = router;