import React, { Component } from 'react';
import { Link } from 'react-router';


class GameSetup extends Component {
  render() {
        return (
            <div className="row">
                <h1>(timer)
                    <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
                    <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                </h1>
                <button>Start Timer</button>
            </div>
        );
  }
}


export default GameSetup;