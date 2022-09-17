const { Router } = require("express");
const {
  userscontroller,
} = require("../controllers/users.controllers");
const router = Router();

router.post("/users", userscontroller.createUser);

router.delete("/users/:id", userscontroller.deleteUserById);

router.patch("/users/:id", userscontroller.changeUserById);
router.get("/users", userscontroller.getUsers);
router.patch("/users/add/:id", userscontroller.addReviews);

module.exports = router;