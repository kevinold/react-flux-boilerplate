var AppActions = require('../actions/AppActionCreators');

module.exports = {

  getData: function(){
    var data = JSON.parse(localStorage.getItem('items'));
    AppActions.receiveData(data);
  }, 
};
