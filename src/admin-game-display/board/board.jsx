import React, { Component } from 'react';
import { Link } from 'react-router';
import Category from './category';
import { fetchQuestions } from '../../actions';
import { connect } from 'react-redux';


class GameBoard extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      questions: []
    }
  }

  setCategories(categories) {
    this.setState({ categories: this.props.categoriesAndQuestions.categories });
  }

  setQuestions(questions) {
    this.setState({ questions: this.props.categoriesAndQuestions.questions });
  }


  render() {
    return (
        <div id="gameBoard" className="row">
          <div className="row category u-full-width">

            <Category
            categories={this.props.categoriesAndQuestions.categories}
            questions = {this.props.categoriesAndQuestions.questions}
            />

          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { categoriesAndQuestions: state.categoriesAndQuestions.data }
}

export default connect(mapStateToProps, {fetchQuestions})(GameBoard);
