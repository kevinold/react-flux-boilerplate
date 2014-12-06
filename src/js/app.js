// This file bootstraps the entire application

var Data = require('./Data.js');
var DataAPI = require('./utils/DataAPI.js');
var App = require('./components/App.react');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

// Load Mock Data into localStorage
Data.init();

// Load Mock API Call
DataAPI.getData();

React.render(<App />, document.getElementById('app'));
