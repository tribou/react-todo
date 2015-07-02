// React components
var React = require('react');
var TodoStore = require('../stores/TodoStore.js');
var TodoActions = require('../actions/TodoActions.js');

var ItemRow = React.createClass({

  getInitialState: function() {

    return {
      text: ''
    };
  },

  render: function() {


    if (this.props.item.editing) {

      return(
        <tr>
          <td><input type="text" id="txtItem" onKeyDown={this._catchEnter} placeholder="Add new todo..." /></td>
          <td>
            <button type="button" id="remove" index={this.props.key}
              onClick={this._save(document.getElementById('txtItem'), this.props.key)} className="btn btn-link pull-right">
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      )
    } else {

      return(
        <tr>
          <td>{this.props.item.text}</td>
          <td>
            <button type="button" onClick={this._delete} className="btn btn-link pull-right">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      )
    }
  },

  _save: function(value, index) {
    TodoActions.saveItem(value, index);
  },

  _delete: function() {
    TodoActions.removeItem(this.props.key);
  },

  _catchEnter: function(e) {
    if(e.keyCode === 13) {
      this._save(e.target.value, this.props.key);
    }
  }

});


var ItemTable = React.createClass({

  render: function() {

    var rows = [];
    if(this.props.list) {
      this.props.list.map(function(item, index) {
        rows.push(<ItemRow key={index} item={item} />);
      });
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


var AddItem = React.createClass({

  render: function() {
    return(
      <button type="button" onClick={this._add} className="btn btn-default btn-block btn-lg">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    )
  },

  _add: function() {
    TodoActions.addItem();
  }
});

var TodoTable = React.createClass({

  getInitialState: function() {
    return {
      list: TodoStore.getList()
    }
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
        list: TodoStore.getList()
    });
  },

  render: function() {
    return(
      <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <AddItem />
          <ItemTable list={this.state.list} />
        </div>
      </div>
      </div>
    )
  }
});

React.render(
  <TodoTable />
  , document.getElementById('app')
);

