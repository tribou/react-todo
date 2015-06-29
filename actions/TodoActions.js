// Todo actions
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

module.exports = {

  addItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.ADD_ITEM,
      data: item
    });
  },

  removeItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE_ITEM,
      data: item
    });
  }

};

