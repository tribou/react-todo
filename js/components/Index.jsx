// React components
var React = require('react');
var TodoStore = require('../stores/TodoStore.js');

var ItemRow = React.createClass({

  render: function() {
    return(
      <tr>
        <td>First thing I need to do...</td>
        <td>
          <button type="button" id="remove" index="0" className="btn btn-link pull-right">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  }
});


var ItemTable = React.createClass({

  render: function() {
    return(
      <div className="table-responsive">
      <table className="table">
        <tbody>
          <ItemRow />
        </tbody>
      </table>
      </div>
    )
  }
});


var AddItem = React.createClass({

  render: function() {
    return(
      <button type="button" className="btn btn-default btn-block btn-lg">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    )
  }
});

var TodoTable = React.createClass({

  getInitialState: function() {
    return {
      list: TodoStore.getList()
    }
  },

  render: function() {
    return(
      <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <AddItem />
          <ItemTable />
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

