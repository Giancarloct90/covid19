const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');

// CONFIGURATION PUBLOC FOLDER
app.use(express.static(path.join(__dirname, './public/')))

// CONFIGURATION VIEW ENGINE
app.set('views', path.join(__dirname, './views/'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// CONFIGURATION ROUTES
app.use(require('./routes/index'));

app.listen(3000);
console.log('Online baby');