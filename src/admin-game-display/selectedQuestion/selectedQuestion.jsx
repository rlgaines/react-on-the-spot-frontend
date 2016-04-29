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
        <div className="selected-question">
          <h4>{this.getSelectedQuestion()}</h4>
        </div>
      </div>
    )
  }

}

export default SelectedQuestion;
