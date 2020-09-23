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
  const { range, status } = req.body;

  if (status) {
    Object.keys(status).forEach((filterKey) => {
      const statusFilterArray = status[filterKey];
      if (statusFilterArray.length > 0) {
        filteredData = filteredData.filter((item) => statusFilterArray.find(
          (findItem) => item.properties[filterKey] === findItem,
        ));
      }
    });
  }

  if (range) {
    Object.keys(range).forEach((filterKey) => {
      const rangeFilterAray = range[filterKey];
      if (
        rangeFilterAray.length > 0
        && (rangeFilterAray[0] !== '' || rangeFilterAray[1] !== '')
      ) {
        let min = rangeFilterAray[0];
        let max = rangeFilterAray[1];
        if (!min) min = 0;
        if (!max) max = 99999999;
        filteredData = filteredData.filter(
          (item) => item.properties[filterKey] >= parseInt(min, 10)
            && item.properties[filterKey] <= parseInt(max, 10),
        );
      }
    });
  }

  res.jsonp(filteredData);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
