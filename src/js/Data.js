module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify([
      'one',
      'two',
      'three'
    ]));
  }
};
