import React from 'react';
import { saveItem } from '../actions/TodoActions.js';

export default class EditTodo extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._save = this._save.bind(this);
    this._catchEnter = this._catchEnter.bind(this);
    this.state = {
      text: '',
    };
  }

  _onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  _save() {
    saveItem(this.state.text);
  }

  _catchEnter(event) {
    if (event.keyCode === 13) {
      this._save();
    }
  }

  render() {
    return (

      <tr>
        <td>
          <input
            type="text"
            value={this.state.text}
            onChange={this._onChange}
            onKeyDown={this._catchEnter}
            placeholder="Add new todo..."
            className="form-control"
            autoFocus="true"
          />
        </td>
        <td>
          <button type="button"
            onClick={this._save}
            className="btn btn-link pull-right">
            <span
              className="glyphicon glyphicon-plus"
              aria-hidden="true">
            </span>
          </button>
        </td>
      </tr>

    );
  }

}

