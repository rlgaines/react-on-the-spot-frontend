import React, { Component } from 'react';
import { Link } from 'react-router';
// import Question from './question';

class Category extends Component {

  render() {
    let category;
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


      //  category = this.props.categories.map(function (el) {
      //   return <div key={el.id}>
      //     <h6 className="category">{el.name}</h6>
      //     <div className="questionContainer">
      //       {question}
      //     </div></div>
      // });
    }

    return (
      <div className="categoriesAndQuestions">
          {category}
      </div>
    )
  }

}

export default Category;
