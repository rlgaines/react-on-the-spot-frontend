import React, { Component } from 'react';
import { Link } from 'react-router';
import Question from './question';

class Category extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: // categories from api
    }
  }

  render() {
    var category = this.state.categories.map(function (el) {
      return <h3 key={el.id} className="category">{el.category_name}</h3>
    });
    return (
      <div className="four columns">
      {category}
          <Question />
      </div>
    )
  }
}

export default Category;
