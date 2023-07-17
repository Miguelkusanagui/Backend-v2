'use strict'
const authRoutes = require('./auth/auth.routes.js');
const express = require('express');
const properties = require('./config/properties.js');
const DB = require('./config/db.js');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extende: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res) => {
   res.send('Hello from home');
});
app.use(router);
app.listen(properties.PORT, () => console.log(`Server runing on port ${properties.PORT}`)
);