const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

const path = require('path');
const appDir = path.dirname(require.main.filename);

app.set('view engine', 'pug');
app.use(express.static(appDir + "/assets"));

// app.use(bodyParser.urlencoded({extended: false}));

//Routes
const index = require('./routes/index.js');
app.use('/', index);
// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes)

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));
