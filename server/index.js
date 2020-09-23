const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./data.json');
const filters = require('./filters.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/alldata', (_req, res) => {
  res.jsonp({ data });
});

app.get('/allfilters', (_req, res) => {
  res.jsonp({ filters });
});

app.post('/filterdata', (req, res) => {
  let filteredData = data;
  const {
    cloth, colors, cut, sizes, gender, price,
  } = req.body;

  if (cloth.length > 0) {
    filteredData = data.filter((item) => cloth.find((findItem) => findItem === item.cloth));
  }

  if (colors.length > 0) {
    filteredData = filteredData.filter((item) => colors.find((findItem) => findItem === item.color));
  }

  if (cut.length > 0) {
    filteredData = filteredData.filter((item) => cut.find((findItem) => findItem === item.cut));
  }

  if (sizes.length > 0) {
    filteredData = filteredData.filter((item) => sizes.find((findItem) => findItem === item.size));
  }

  if (gender.length > 0) {
    filteredData = filteredData.filter((item) => gender.find((findItem) => findItem === item.gender));
  }

  if (price.min || price.max) {
    let { min, max } = price;
    if (max === '') max = 99999999;
    if (min === '') min = 0;
    filteredData = filteredData.filter(
      (item) => item.price >= parseInt(min, 10)
        && item.price <= parseInt(max, 10),
    );
  }

  res.jsonp(filteredData);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
