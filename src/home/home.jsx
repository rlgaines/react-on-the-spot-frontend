//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createGame } from '../actions';


class Home extends Component {
  render() {
    const { fields: { username }, handleSubmit } = this.props;
    return (
      <div>
        <h1>Welcome to On The Spot!</h1>
          <div className="container">
            <form onSubmit={handleSubmit(this.props.createGame)}>
              <div className="row">
                <div className="six columns">
                  <label for="username">Create Username</label>
                  <input className="u-full-width"
                         { ...username }
                         type="text"
                         placeholder="username"
                         minlength="2"
                         required
                         />
                </div>
              </div>
              <div className="row">
                <input className="button-primary" type="submit" value="Submit" />
              </div>
            </form>
          </div>
      </div>
    );
  }
}


export default reduxForm({form: 'HomeForm', fields: [ 'username' ]}, null, { createGame })(Home);


