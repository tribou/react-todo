// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
import AppDispatcher from '../dispatcher/AppDispatcher';
import { TodoConstants } from '../constants/TodoConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
  list: [],
  editing: false,
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class TodoStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }

}

// Initialize the singleton to register with the
// dispatcher and export for React components
const TodoStore = new TodoStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

  case TodoConstants.NEW_ITEM:

    // Add the data defined in the TodoActions
    // which the View will pass as a payload
    _store.editing = true;
    TodoStore.emit(CHANGE_EVENT);
    break;

  case TodoConstants.SAVE_ITEM:

    // Add the data defined in the TodoActions
    // which the View will pass as a payload
    _store.list.push(action.text);
    _store.editing = false;
    TodoStore.emit(CHANGE_EVENT);
    break;

  case TodoConstants.REMOVE_ITEM:

    // View should pass the text's index that
    // needs to be removed from the store
    _store.list = _store.list.filter((item, index) => {
      return index !== action.index;
    });
    TodoStore.emit(CHANGE_EVENT);
    break;

  case TodoConstants.GET_RANDOM_RESPONSE:

    // Construct the new todo string
    const firstName = action.response.results[0].name.first;
    const city = action.response.results[0].location.city;
    const newTodo = `Call ${firstName} about real estate in ${city}`;

    // Add the new todo to the list
    _store.list.push(newTodo);
    TodoStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default TodoStore;

