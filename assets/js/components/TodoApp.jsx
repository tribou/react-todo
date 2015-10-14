import React from 'react';
import TodoStore from '../stores/TodoStore.js';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = TodoStore.getList();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(TodoStore.getList());
  }

  render() {
    return (

      <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <AddTodo />
            </div>
            <div className="panel-body">
              <TodoList
                list={this.state.list}
                editing={this.state.editing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

