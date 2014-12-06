
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  clickButton: function(buttonID) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_BUTTON,
      buttonID: buttonID
    });
  }

};
