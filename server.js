const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
// server used to send send emails
const port = 5000;

app.listen(port, () => console.log(`Server Running on port: ${port}`));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`===Server is ready to take messages: ${success}===`);
  }
});


// router.post('/contact', (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: 'stephn2027@gmail.com',
//     subject: 'Contact Form Submission - Portfolio',
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   transporter.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: 'Message Sent' });
//     }
//   });
// });
