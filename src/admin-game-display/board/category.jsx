import React, { Component } from 'react';
import { Link } from 'react-router';

class Category extends Component {
  constructor(props) {
    super(props);
    // this.selectQuestion = this.selectQuestion.bind(this)
    this.state = {
      selectedQuestion: ''
    }
  }

selectQuestion(question) {
  localStorage.setItem('currentQuestion', question.question);
}

  render() {

    let categories;
    let columnHeader;
    let questions;
    let question;

    if (this.props.categories && this.props.questions) {

      var result = this.props.questions.reduce(function (acc, question) {
        if ( acc[question.category_name] ) {
          acc[question.category_name].push(question);
          acc[question.category_name].sort(function (a, b) {
            return a.points - b.points;
          });
        } else {
          acc[question.category_name] = [question];
        }

        return acc;
      }, {});


      categories = Object.keys(result);


      columnHeader = categories.map(function (el) {
        for (var i in result) {
          if (i === el) {
            questions = result[i].map(function (el) {
              return <div className="question"
                          key={el.id}
                          onClick={this.selectQuestion(el)}
                          >
                          {el.points}</div>
            }, this);
          }
        }
         return <div className="category" key={el}><strong className="category-name">{el}</strong> {questions}</div>
       }, this);
    }

    return (
      <div className="categories-and-questions">
          {columnHeader}
      </div>
    )
  }

}

export default Category;
