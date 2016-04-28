import React, { Component } from 'react';
import { Link } from 'react-router';

class Question extends Component {

  render() {

    let question;
    let category;
    if (this.props.questions && this.props.categories) {

      question = this.props.questions.map(function (el, index) {
        if (index !== 0 && index % 5 === 0) {
          return <div className="question fifth-question" key={el.id}><p>{el.question}</p></div>
        } else {
          return <div className="question" key={el.id}><p>{el.question}</p></div>
        }
      });

    }

    return (
      <div className="questionContainer">
        {question}
      </div>
    )
  }
}

export default Question;
