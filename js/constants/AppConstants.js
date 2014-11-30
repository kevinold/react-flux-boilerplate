var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_BUTTON: null,
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
