import React, { Component } from 'react';
import { Link } from 'react-router';

class Question extends Component {

  log() {
    console.log('click');
  }

  render() {

    if (this.props.questions) {


    }

    return (
      <div className="questionContainer"
      onClick={this.log}
      >
      here
      </div>
    )
  }
}

export default Question;
