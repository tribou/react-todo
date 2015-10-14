import React from 'react';
import { addItem, getRandom } from '../actions/TodoActions.js';

export default class AddTodo extends React.Component {

  _add() {
    addItem();
  }

  _random() {
    getRandom();
  }

  render() {
    return (

      <div>
        <button
          type="button"
          onClick={this._add}
          className="btn btn-link btn-block btn-lg">
          <span
            className="glyphicon glyphicon-plus"
            aria-hidden="true">
          </span>
        </button>
        <button
          type="button"
          onClick={this._random}
          className="btn btn-link btn-block btn-lg">
          <span
            className="glyphicon glyphicon-plus"
            aria-hidden="true">
          </span>&nbsp;Random
        </button>
      </div>

    );
  }

}

