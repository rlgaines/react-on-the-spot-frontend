import React, { Component } from 'react';
import { Link } from 'react-router';
import Question from './question';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  render() {
    let category;
    if (this.props.categories) {
       category = this.props.categories.map(function (el) {
        return <h6 key={el.id} className="category">{el.name}</h6>
      });
    }

    return (
      <div className="categoriesAndQuestions">
        <div className="categoryContainer">
          {category}
        </div>

          <Question
          categories={this.props.categories}
          questions={this.props.questions}
          />

      </div>
    )
  }
}

export default Category;
