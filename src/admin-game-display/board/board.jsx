import React, { Component } from 'react';
import { Link } from 'react-router';
import Category from './category';

class GameBoard extends Component {

  render() {
    return (
        <div className="row">
          <div className="row category u-full-width">
          here
            <Category />
          </div>
        </div>
    );
  }
}


export default GameBoard;
