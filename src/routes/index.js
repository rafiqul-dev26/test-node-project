const express = require("express");
const userRoutes = require("./user.routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is working"
  });
});

router.use("/users", userRoutes);

module.exports = router;
