const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
  res.json({ success: true, data: req.body });
});

module.exports = router;
