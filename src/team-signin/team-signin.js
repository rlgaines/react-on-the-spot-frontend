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
      localStorage.setItem('game_id', response.game_id);
      localStorage.setItem('token', response.token);
      this.context.router.push('/team-game')
    });
  }

  render() {
    const { fields: { username }, handleSubmit } = this.props;
    return (
      <div>
            <h1>Join (Moderator)'s Game!</h1>
             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="username"></label>
                  <input className="u-full-width"
                         { ...username }
                         type="text"
                         placeholder="username"
                         minLength="2"
                         required
                         />
                  <input
                    className="u-full-width"
                    type="hidden"
                    value={this.props.params.gameID}
                  />
                </div>
              </div>
              <div className="row">
                <input className="button-primary" type="submit" value="Join Game" />
              </div>
            </form>
      </div>
    );
  }
}

export default reduxForm({form: 'TeamForm', fields: [ 'username' ]}, null, { createTeam })(TeamSignIn);
