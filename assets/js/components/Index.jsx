// React components
var React = require('react');
var TodoStore = require('../stores/TodoStore.js');
var TodoActions = require('../actions/TodoActions.js');

var TodoItem = React.createClass({

  render: function() {

    return(
      <tr>
        <td>{this.props.item}</td>
        <td>
          <button type="button" onClick={this._delete} className="btn btn-link pull-right">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  },

  _delete: function() {

    TodoActions.removeItem(this.props.index);
  }
});


var EditTodo = React.createClass({

  getInitialState: function() {

    return {
      text: ''
    }
  },

  render: function() {

    return(
      <tr>
        <td><input
            type="text"
            value={this.state.text}
            onChange={this._onChange}
            onKeyDown={this._catchEnter}
            placeholder="Add new todo..."
            className="form-control"
            autoFocus={true}
          /></td>
        <td>
          <button type="button"
            onClick={this._save}
            className="btn btn-link pull-right">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  },

  _onChange: function(e) {
    this.setState({
      text: e.target.value
    });
  },

  _save: function() {
    TodoActions.saveItem(this.state.text);
  },

  _catchEnter: function(e) {
    if(e.keyCode === 13) {
      this._save();
    }
  }


});


var TodoList = React.createClass({

  render: function() {

    var rows = [];
    if(this.props.list) {
      this.props.list.map(function(item, index) {
        rows.push(<TodoItem key={index} index={index} item={item} />);
      });
    }

    if(this.props.editing) {
      rows.push(<EditTodo key={-1} />);
    }

    return(
      <div className="table-responsive">
      <table className="table">
        <tbody>
          {rows}
        </tbody>
      </table>
      </div>
    )
  }
});


var AddTodo = React.createClass({

  render: function() {
    return(
      <div>
      <button type="button" onClick={this._add} className="btn btn-link btn-block btn-lg">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
      <button type="button" onClick={this._random} className="btn btn-link btn-block btn-lg">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;Random
      </button>
      </div>
    )
  },

  _add: function() {
    TodoActions.addItem();
  },

  _random: function() {
    TodoActions.getRandom();
  }
});


var TodoApp = React.createClass({

  getInitialState: function() {
    return TodoStore.getList();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(TodoStore.getList());
  },

  render: function() {
    return(
      <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <AddTodo />
            </div>
            <div className="panel-body">
              <TodoList list={this.state.list} editing={this.state.editing} />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
});

React.render(
  <TodoApp />
  , document.body
);

