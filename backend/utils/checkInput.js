const checkInput = {
  file: (req, res) => {
    // If no file is passed
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        success: false,
        error: {
          msg: "No files were uploaded.",
        },
        data: null,
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
      return res.status(400).json({
        success: false,
        error: {
          msg: "Only pdf/doc/docx files accepted, please convert the format",
        },
        data: null,
      });

    if (cv.size > 10 * 1024 * 1024)
      return res.status(400).json({
        success: false,
        error: {
          msg: "Maximum file size 10mb",
        },
        data: null,
      });
  },
};

module.exports = checkInput;
