import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { createTeam } from '../actions';
import { reduxForm } from 'redux-form';

class TeamSignIn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createGame(props)
    .then(() => {
      this.context.router.push('/team-game')
    })

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
