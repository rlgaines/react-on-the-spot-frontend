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
      for (var i in result) {
        questions = result[i].map(function (el) {
          return <div key={el.id}> {el.question} </div>
        });
      }


console.log(questions);

      columnHeader = categories.map(function (el) {
         return <h6 key={el}>{el} {questions}</h6>
       });


    }

    return (
      <div className="categoriesAndQuestions">
          {columnHeader}
      </div>
    )
  }

}

export default Category;
