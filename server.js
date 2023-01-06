const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

// server used to send send emails
const app = express();
const cors = require('cors');
const port = 3001;
app.use(express.json());
app.use(cors());
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

// app.post("/send", function (req, res) {
//   let mailOptions = {
//     from: "test@gmail.com",
//     to: process.env.EMAIL,
//     subject: "Nodemailer API",
//     text: "Hi from your nodemailer API",
//   };
 
//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//       res.json({ status: "Email sent" });
//     }
//   });
//  });

app.post('/send', (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  let mailOptions = {
    from: name,
    to: process.env.EMAIL,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
