import React, { Component } from 'react';
import { Link } from 'react-router';

class TeamSignIn extends Component {
  render() {
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
                    <h3>(Question)</h3>
                </div>
                <div className="row" id="timer">
                    <h1>(Timer) <span><button>Increase</button><button>Decrease</button></span><button>Start Timer</button> </h1>
                </div>
                <div className="row" id="teamAnswers">
                    <ul>
                        <li>(team)  (show answer)
                            <input type="number" />
                        </li>
                        <li>(team)  (show answer)
                            <input type="number" />
                        </li>
                        <li>(team)  (show answer)
                            <input type="number" />
                        </li>
                        <li>(team)  (show answer)
                            <input type="number" />
                        </li>
                    </ul>
                    <button>Add Scores</button>
                    <button>Select Next Question</button>

                </div>
            </main>
        </div>
      </div>
    );
  }
}


export default TeamSignIn;