import React, { Component } from 'react';
import { fetchQuestions } from '../actions';
import { connect } from 'react-redux';


class App extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categoriesAndQuestions: state.categoriesAndQuestions.data }
}

export default connect(mapStateToProps, {fetchQuestions})(App);

// export default App;
