// React components
var React = require('react');

var ItemRow = React.createClass({

  render: function() {
    return(
      <tr>
        <td>First thing I need to do...</td>
        <td>
          <button type="button" id="remove" index=0 className="btn btn-link pull-right">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  }
});


var ItemTable = React.createClass({

  render: function() {
    return(
      <div class="table-responsive">
      <table class="table">
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
      <button type="button" class="btn btn-default btn-block btn-lg">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    )
  }
});

var TodoTable = React.createClass({

  render: function() {
    return(
      <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
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

