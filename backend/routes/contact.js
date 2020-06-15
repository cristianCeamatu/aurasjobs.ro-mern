const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.route("/").post((req, res) => {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;
  async function main() {
    let transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true, // use TLS
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const { name, email, phone, message } = req.body;
    const body = `
    <h1>Thank you for your email Mr. ${name}</h1>
    <p>Please check your details below and contact us in case of any mistakes:
    <ul>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    `;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "office@aurasjobs.ro", // sender address
      to: email, // list of receivers
      subject: "You contact request from aurasjobs", // Subject line
      text: message, // plain text body
      html: body, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
  console.log(main().catch(console.error));
  res.json({
    success: true,
    data: req.body,
  });
});

module.exports = router;
