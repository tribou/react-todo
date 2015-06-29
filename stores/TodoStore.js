// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ObjectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {
  list: []
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
var TodoStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function() {
    return _store.list;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {

    case AppConstants.ADD_ITEM:

      // Add the data defined in the TodoActions
      // which the View will pass as a payload
      _store.list.push(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_ITEM:

      // View should pass the item's index that
      // needs to be removed from the store
      _store.list.splice(action.data, 1);
      TodoStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = TodoStore;

