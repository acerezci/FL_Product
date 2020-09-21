const express = require('express');
const data = require('./db.json');

const app = express();

app.get('/', (_req, res) => {
  res.jsonp({ success: true, data });
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
