// Random User API logic
var TodoServerActions = require('../actions/TodoServerActions');
var request = require('superagent');

module.exports = {

  get: function() {
    request.get('http://api.randomuser.me/')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        TodoServerActions.receiveRandom(response.body);
      });
  }
};

