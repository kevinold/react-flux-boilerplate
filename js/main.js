/** @jsx React.DOM */

var React = require('react');
var App = require('./App');

function generateData(count) {
  var data = [];
  for (var i = 0; i < count; i++) {
    data.push({
      id: faker.random.number(0, 1000),
      merchant: faker.Company.companyName(),
      total: faker.random.number(1.00, 150.00)
    });
  }
  return data;
}

var data = generateData(10);

React.render(<App data={data} />, document.getElementById('app'));
