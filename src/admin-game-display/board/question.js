import React, { Component } from 'react';
import { Link } from 'react-router';

class Question extends Component {
  render() {

    let question;
    if (this.props.questions) {
      question = this.props.questions.map(function (el) {
      return <div key={el.id}>{el.question}</div>
      });
    }

    return (
      <div className="question">
      {question}
      </div>
    )
  }
}

export default Question;
