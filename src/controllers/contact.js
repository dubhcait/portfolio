const nodemailer = require('nodemailer');
const escapeHtml =require('escape-html');


 require("env2")("./config.env");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

exports.post = (req, res) => {

const name = escapeHtml(req.body.name);
const email = escapeHtml(req.body.email); 
const message = escapeHtml(req.body.message);
    let mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport({
     
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
         ciphers:'SSLv3'
      },
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    mailOpts = {
      from: req.body.email,
      to: GMAIL_USER,
      subject: 'New message from the contact form on your portfolio',
      text: `${name} (${email}) says: ${message}`
    };
  
    smtpTrans.sendMail(mailOpts, function (error, response) {

      
      if (error) {
        res.redirect(301, 'contact-failure');
      }
      else {
        res.redirect( 301, 'contact-success');
      }
    });
  }