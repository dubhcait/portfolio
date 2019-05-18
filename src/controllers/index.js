const express = require('express');
// contact form
const nodemailer = require('nodemailer');
require("env2")("./config.env");

const home = require('./home');
const error = require('./error');

const app = express();
const router = express.Router();


// GET
router.get ('/', home.get);

// POST route from contact form
router.post('/contact', function (req, res) {
    let mailOpts, smtpTrans;



    console.log("hello fom inside the post", req.body )
    smtpTrans = nodemailer.createTransport({
     
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
         ciphers:'SSLv3'
      },
      auth: {
        user: 'dubhcait@live.ie',
        pass: 
      }
    });
    mailOpts = {
      from: req.body.email,
      to: 'dubhcait@live.ie',
      subject: 'New message from contact form on your portfolio',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    console.log(mailOpts);
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
          console.log(error);
        res.redirect(301, 'contact-failure');
      }
      else {
        res.render( 301, 'contact-success');
      }
    });
  });

router.get ('*', error.client);
router.use(error.server);


module.exports = router;