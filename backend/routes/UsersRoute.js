const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile
} = require("../controllers/usersController");
const { protect } = require("../midlewares/authMiddleware");
const router = express.Router();

//user register
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);

//get user profile private route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
