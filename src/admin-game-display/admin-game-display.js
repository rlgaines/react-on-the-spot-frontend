import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchQuestions } from '../actions';
import { connect } from 'react-redux';


class AdminGame extends Component {

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
    this.setState({ categories: this.props.categoriesAndQuestions });
  }

  setQuestions(questions) {
    this.setState({ questions: this.props.categoriesAndQuestions.questions });
  }

  render() {
    console.log('state', this.state);
    if (!this.props.SelectedQuestion) {
        return (
            <div>
                <div className="row">
                    <h3><i className="fa fa-cogs" aria-hidden="true"></i></h3>
                </div>
                <div className="row">
                    <aside className="four columns">
                        <h3>Score Board</h3>
                        <ul>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                        </ul>
                    </aside>
                    <main className="eight columns">
                        <div className="row" id="questionZone">
                            <h3>Question</h3>
                        </div>
                        {this.props.children}
                    </main>
                </div>
              </div>
        );
    } else {

        return (
          <div>
            <div className="row">
                <h3><i className="fa fa-cogs" aria-hidden="true"></i></h3>
            </div>
            <div className="row">
                <aside className="four columns">
                    <h3>Score Board</h3>
                    <ul>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                    </ul>
                </aside>
                <main className="eight columns">
                    <div className="row" id="questionZone">
                        <h3>Question</h3>
                    </div>
                    {this.props.children}
                </main>
            </div>
          </div>
        );
    }
  }
}
// this.props.children is where to pass data ( categories and questions )

function mapStateToProps(state) {
  return { categoriesAndQuestions: state.categoriesAndQuestions.data }
}

export default connect(mapStateToProps, {fetchQuestions})(AdminGame);
