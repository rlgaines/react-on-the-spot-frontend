import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h3 className="row">Question:</h3>
        <div>
          question here 
        </div>
      </div>
    )
  }

}

export default SelectedQuestion;
