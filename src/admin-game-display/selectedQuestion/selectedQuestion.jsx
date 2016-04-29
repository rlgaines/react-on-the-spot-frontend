import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);

  }

  getSelectedQuestion() {
    return localStorage.getItem('currentQuestion');
  }

  render() {
    return (
      <div>
        <h3 className="row">Question:</h3>
        <h4 className="selected-question">
          {this.getSelectedQuestion()}
        </h4>
      </div>
    )
  }

}

export default SelectedQuestion;
