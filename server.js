import express, { Router, json } from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';

// server used to send send emails
const app = express();
app.use(cors());
app.use(json());
app.use('/', Router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: 'stephn2027@gmail.com',
    pass: 'injxjdlauasmyfjh',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

Router.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'stephn2027@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
