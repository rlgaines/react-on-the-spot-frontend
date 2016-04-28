import React, { Component } from 'react';
import { Link } from 'react-router';
// import Question from './question';

class Category extends Component {

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


      categories = Object.keys(result); // array


      columnHeader = categories.map(function (el) {
        for (var i in result) {
          if (i === el) {
            questions = result[i].map(function (el) {
              return <div className="question" key={el.id}>{el.points}</div>
            });
          }
        }
         return <div className="category" key={el}><strong className="category-name">{el}</strong> {questions}</div>
       });


    }

    return (
      <div className="categories-and-questions">
          {columnHeader}
      </div>
    )
  }

}

export default Category;
