import React from 'react';
import { removeItem } from '../actions/TodoActions.js';

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this._delete = this._delete.bind(this);
  }

  _delete() {
    removeItem(this.props.index);
  }

  render() {
    return (

      <tr>
        <td>{this.props.item}</td>
        <td>
          <button
            type="button"
            onClick={this._delete}
            className="btn btn-link pull-right">
            <span
              className="glyphicon glyphicon-remove"
              aria-hidden="true">
            </span>
          </button>
        </td>
      </tr>

    );
  }
}

TodoItem.propTypes = {
  index: React.PropTypes.number,
  item: React.PropTypes.string,
};

