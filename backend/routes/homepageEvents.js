const express = require("express");
const router = express.Router();
const transporter = require("../config/nodemailer");

//  @route    POST /api/v1/events/newContact
//  @desc     New contact request, send email to office
//  @access   Public
router.route("/contactRequest").post(async (req, res) => {
  try {
    const contact = req.body;
    // send mail with defined transport object
    await transporter.sendMail({
      from: contact.email, // sender address
      to: "office@aurasjobs.ro", // list of receivers
      subject: `Contact request from ${contact.name}`, // Subject line
      text: `Thank you for contacting us Mr. ${contact.name}, we will try to reach you at ${contact.phone}. Your message is ${contact.message}`, // plain text body
      template: "newContact",
      context: {
        layout: "newContact",
        year: new Date().getFullYear(),
        ...contact,
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
      error: "Mailling server error, please inform the administrator.",
    });
  }
});

//  @route    POST /api/v1/events/newApplication
//  @desc     New application from site, send email with attachment
//  @access   Public
router.route("/new-application").post(async (req, res) => {
  try {
    // If no file is passed
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        success: false,
        error:
          "Nici un fisier nu a fost incarcat. Va rugam informati administratorul",
      });
    }

    // Check the CV mimetype and size
    const cv = req.files.cv;
    const application = req.body;
    if (
      cv.mimetype !== "application/pdf" &&
      cv.mimetype !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
      cv.mimetype !== "application/msword"
    )
      return res.status(400).json({
        success: false,
        error:
          "Doar fisierele cu extensia pdf/doc/docx sunt acceptate. Daca fisierul este in alt format va rugam sa trimiteti catre office@aurasjobs.ro",
      });

    if (cv.size > 10 * 1024 * 1024)
      return res.status(400).json({
        success: false,
        error: "Marimea maxima a fisierelor este de 10mb",
      });

    // send mail with defined transport object
    await transporter.sendMail({
      from: application.email, // sender address
      to: "office@aurasjobs.ro", // list of receivers
      subject: `New Candidate ${application.name} Departament - ${application.department}`, // Subject line
      text: `Thank you for contacting us Mr. ${application.name}, we will try to reach you at ${application.phone} or ${application.email}`, // plain text body
      template: "newApplication",
      context: {
        layout: "newApplication",
        year: new Date().getFullYear(),
        ...application,
      },
      attachments: [
        {
          filename: `${application.name}_cv.${cv.name.split(".").pop()}`,
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
    return res.status(500).json({
      success: false,
      error: "Mailling server error, please inform the administrator.",
    });
  }
});

module.exports = router;
