// Todo actions
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var RandomUserAPI = require('../utils/RandomUserAPI');

module.exports = {

  addItem: function() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.NEW_ITEM
    });
  },

  saveItem: function(text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.SAVE_ITEM,
      text: text
    });
  },

  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE_ITEM,
      index: index
    });
  },

  getRandom: function() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.GET_RANDOM
    });

    RandomUserAPI.get();
  }

};

