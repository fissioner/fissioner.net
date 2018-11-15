require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');



app.post('/sent', (req, res) => {
  
  const sender = req.body.email;
  const formContent = `
  <h3>New Contact</h3>
  <ul>
    <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${!req.body.phone?'none provided':req.body.phone}</li>
    <li>Company: ${!req.body.company?'none provided': req.body.company}</li>
  </ul>
  <h2>Message</h4>
  <p>${req.body.message}</p>
  `;

  const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: process.env.SENDGRID_RECIPIENT,
  from: sender,
  subject: 'Fissioner Contact',
  text: formContent,
  html: formContent,
};
sgMail.send(msg).then(() => {
  res.status(200);
  console.log('email sent');
  return;
})
.catch(error => {
  return console.error(error.toString());
});

console.log(req.body)
res.render('index', {sent: true, msg: 'Your message has been sent.'})
})

const port = process.env.PORT || process.env.PORT_NUM || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
