import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchQuestions, fetchTeams } from '../actions';
import { connect } from 'react-redux';


class AdminGame extends Component {

    componentWillMount() {
        this.props.fetchTeams()
    }

    constructor(props) {
        super(props);
        this.state = { teams: []}
    }

  render() {
    let teams = this.props.teams.data;
    let listItems;

    if(teams) {
        listItems = teams.map(function(el) {
            for (var i in el) {
                return <li key={el.id}>
                <strong>{el.name}</strong>
                <br />
                ({el.score})</li>
            }
        })
    }




    if (!this.props.SelectedQuestion) {
        return (
            <div>
                <div className="row">
                    <aside id="score-board" className="two columns">
                        <h5><strong>Scores</strong></h5>
                        <ul>
                            {listItems}
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
                        {listItems}
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


function mapStateToProps(state) {
  return { teams: state.teams }
}

export default connect(mapStateToProps, {fetchTeams})(AdminGame);
