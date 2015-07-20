// Todo actions
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

module.exports = {

  receiveRandom: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_RANDOM_RESPONSE,
      response: response
    });
  },
};

