const express = require('express');

const app = express();

const path = require('path');
const appDir = path.dirname(require.main.filename);

app.set('view engine', 'pug');
app.use(express.static(appDir + "/assets"));

const index = require('./routes/index.js');
app.use('/', index);

const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));
