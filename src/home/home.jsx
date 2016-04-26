//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to On The Spot!</h1>
          <div className="container">
            <form>
              <div className="row">
                <div className="six columns">
                  <label for="username">Create Username</label>
                  <input className="u-full-width" type="username" placeholder="username" id="username" />
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


export default Home;


