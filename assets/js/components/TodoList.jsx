import React from 'react';
import EditTodo from './EditTodo.jsx';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {

  render() {
    let rows = [];
    if (this.props.list) {
      this.props.list.map((item, index) => {
        rows.push(<TodoItem key={index} index={index} item={item} />);
      });
    }

    if (this.props.editing) {
      rows.push(<EditTodo key={-1} />);
    }

    return (

      <table className="table">
        <tbody>
          {rows}
        </tbody>
      </table>

    );
  }
}

TodoList.propTypes = {
  editing: React.PropTypes.bool,
  list: React.PropTypes.array,
};

