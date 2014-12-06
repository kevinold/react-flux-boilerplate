/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActionCreators');

function getItems() {
  return { items: AppStore.getAll() };
}

var App = React.createClass({
  getInitialState: function() {
    return getItems();
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getItems());
  },

  handleClick: function() {
    AppActions.clickButton('one');
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return <li>{item}</li>
    });
    return (
      <div>
        <b>HI ho </b>
        <br />
        <button onClick={this.handleClick}>Click Me</button>
        <br />
        <ul>
          {items}
        </ul>
      </div>
    );
  }

});

module.exports = App;
