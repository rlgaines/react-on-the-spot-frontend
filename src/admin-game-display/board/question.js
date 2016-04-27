import React, { Component } from 'react';
import { Link } from 'react-router';

class Question extends Component {
  constructor(props) {
    super();
    this.state = {
      questions : []// questions from api
    }
  }



  render() {
    var question = this.state.questions.map(function (el) {
      return <div key={el.id}>{el.question}</div>
    });
    return (
      <div className="question">
        {question}
      </div>
    )
  }
}

export default Question;
