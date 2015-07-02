// Todo actions
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

module.exports = {

  addItem: function() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.NEW_ITEM
    });
  },

  saveItem: function(text, index) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.SAVE_ITEM,
      text: text,
      index: index
    });
  },

  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE_ITEM,
      index: index
    });
  }

};

