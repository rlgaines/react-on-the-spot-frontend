import React, { Component } from 'react';
import { Link } from 'react-router';

class AdminGame extends Component {
  render() {
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


export default AdminGame;