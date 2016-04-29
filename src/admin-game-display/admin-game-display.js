import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchQuestions } from '../actions';
import { connect } from 'react-redux';


class AdminGame extends Component {

  render() {

    if (!this.props.SelectedQuestion) {
        return (
            <div>
                <div className="row">
                    <aside id="score-board" className="two columns">
                        <h5><strong>Scores</strong></h5>
                        <ul>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                            <li>(team)  (score)</li>
                        </ul>
                    </aside>
                    <main className="ten columns">
                        {this.props.children}
                    </main>
                </div>
                <div className="row">
                    <button>End Game</button>
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
                <aside id="score-board" className="two columns">
                    <h5><strong>Scores</strong></h5>
                    <ul>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                        <li>(team)  (score)</li>
                    </ul>
                </aside>
                <main className="ten columns">
                    {this.props.children}
                </main>
            </div>
            <div className="row">
                <button>End Game</button>
            </div>
          </div>
        );
    }
  }
}

export default AdminGame;
