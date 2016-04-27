//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createGame } from '../actions';


class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createGame(props)
    .then(() => {
      this.context.router.push('/csv-upload')
    })

  }

  render() {
    const { fields: { username }, handleSubmit } = this.props;
    return (
      <div>
        <h1>Welcome to On The Spot!</h1>
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="username">Create Username</label>
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
                <input className="button-primary" type="submit" value="Submit" />
              </div>
            </form>
          </div>
      </div>
    );
  }
}


export default reduxForm({form: 'HomeForm', fields: [ 'username' ]}, null, { createGame })(Home);


