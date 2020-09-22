const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./db.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
  res.jsonp({ success: true, data });
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
