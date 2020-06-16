const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;

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

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: "./emails",
    layoutsDir: "./emails",
    defaultLayout: "newContact.handlebars",
  },
  viewPath: "./emails",
  extName: ".handlebars",
};
transporter.use("compile", hbs(handlebarOptions));

module.exports = transporter;
