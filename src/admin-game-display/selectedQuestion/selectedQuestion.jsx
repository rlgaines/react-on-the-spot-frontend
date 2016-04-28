import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);
    console.log(this)

  }

  getSelectedQuestion() {
    localStorage.getItem('currentQuestion');
  }

  render() {
    console.log(this.getSelectedQuestion());
    return (
      <div>
        <h3 className="row">Question:</h3>
        <div>
          {this.getSelectedQuestion()}
        </div>
      </div>
    )
  }

}

export default SelectedQuestion;
