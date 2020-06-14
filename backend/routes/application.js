const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
  // If no file is passed
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      msg: "No files were uploaded.",
    });
  }

  // Check the CV mimetype and size
  const cv = req.files.cv;
  if (
    cv.mimetype !== "application/pdf" &&
    cv.mimetype !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
    cv.mimetype !== "application/msword"
  )
    return res.json({
      success: false,
      error: {
        type: "mimetype",
        msg: "Only pdf/doc/docx files accepted, please convert the format",
      },
    });

  if (cv.size > 10 * 1024 * 1024)
    return res.json({
      success: false,
      error: {
        type: "size",
        msg: "Maximum file size 10mb",
      },
    });

  // Creat folder and path
  const path = `${__dirname}/../../frontend/public/uploads/${
    req.body.name
  }_${Date.now()}`;

  // Use the mv() method to place the files on your server
  cv.mv(`${path}/${cv.name}`, (err) => {
    if (err) return res.status(500).send(err);
  });

  // The id is not required
  const id = req.files.id || null;
  if (id) {
    id.mv(`${path}/${id.name}`, (err) => {
      if (err) return res.status(500).send(err);
    });
  }

  res.json({
    success: true,
    application: {
      phone: req.body.phone,
      email: req.body.email,
    },
  });
});

module.exports = router;
