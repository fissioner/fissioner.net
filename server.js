require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');



const port = process.env.PORT || process.env.PORT_NUM || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
