const express = require("express");
const router = express.Router();
const transporter = require("../config/nodemailer");

router.route("/contactRequest").post(async (req, res) => {
  try {
    const contact = req.body;
    const { name, email, phone, message } = contact;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: "office@aurasjobs.ro", // list of receivers
      subject: "You contact request from aurasjobs", // Subject line
      text: `Thank you for contacting us Mr. ${name}, we will try to reach you at ${phone}. Your message is ${message}`, // plain text body
      template: "newContact",
      context: {
        layout: "newContact",
        name,
        email,
        phone,
        message,
        year: new Date().getFullYear(),
      },
    });

    return res.json({
      success: true,
      error: false,
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        msg: "Mailling server error, please inform the administrator.",
      },
      data: null,
    });
  }
});

router.route("/new-application").post(async (req, res) => {
  try {
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

    // // Creat folder and path
    // const path = `${__dirname}/../../frontend/public/uploads/${
    //   req.body.name
    // }_${Date.now()}`;

    // // Use the mv() method to place the files on your server
    // cv.mv(`${path}/${cv.name}`, (err) => {
    //   if (err)
    //     return res.status(500).json({
    //       success: false,
    //       error: {
    //         msg: "Server error. Please contact the administrator.",
    //       },
    //       data: null,
    //     });
    // });

    const { name, email, phone, message, department } = req.body;
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: "office@aurasjobs.ro", // list of receivers
      subject: `New Candidate ${name} Departament - ${department}`, // Subject line
      text: `Thank you for contacting us Mr. ${name}, we will try to reach you at ${phone} or ${email}`, // plain text body
      template: "newApplication",
      context: {
        layout: "newApplication",
        name,
        email,
        phone,
        message,
        department,
        year: new Date().getFullYear(),
      },
      attachments: [
        {
          filename: `${name}_cv.${cv.name.split(".").pop()}`,
          content: cv.data,
          encoding: cv.encoding,
        },
      ],
    });

    return res.json({
      success: true,
      error: false,
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: {
        status: 500,
        msg: "Server error, please inform the administrator.",
      },
      data: null,
    });
  }
});

module.exports = router;
