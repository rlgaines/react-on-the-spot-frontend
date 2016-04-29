import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { createTeam } from '../actions';
import { reduxForm } from 'redux-form';

class TeamSignIn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createTeam(props)
    .then((response) => {
      response = response.payload.data;
      console.log(response);
      localStorage.setItem('game_id', this.props.params.gameID);
      localStorage.setItem('team_id', response.teamID);
      localStorage.setItem('token', response.token);
      this.context.router.push('/team-game')
    });
  }

  render() {
    const { fields: { username }, handleSubmit } = this.props;
    return (
      <div>
            <h1>Join the Game</h1>
             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <label htmlFor="username"></label>
                  <input
                         { ...username }
                         type="text"
                         placeholder="username"
                         minLength="2"
                         required
                         />
                  <br /><br />
                  <input
                    className="u-full-width"
                    type="hidden"
                    value={this.props.params.gameID}
                  />
              <div className="row">
                <input className="button-primary" type="submit" value="Join Game" />
              </div>
            </form>
      </div>
    );
  }
}

export default reduxForm({form: 'TeamForm', fields: [ 'username' ]}, null, { createTeam })(TeamSignIn);
