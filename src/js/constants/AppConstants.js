var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_BUTTON: null,
    RECEIVE_DATA: null,
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
