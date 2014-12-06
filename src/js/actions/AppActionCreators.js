
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  receiveData: function(data){
    AppDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_DATA,
      data: data
    });
  }, 
  clickButton: function(buttonID) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_BUTTON,
      buttonID: buttonID
    });
  }

};
