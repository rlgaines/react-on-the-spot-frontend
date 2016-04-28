//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';

class TeamDisplay extends Component {
  render() {
    return (
      <div>
          <h3>(TEAM NAME)</h3>
          <div className="container">
            <div className="row">
              <div className="twelve column">
                 <label htmlFor="exampleMessage">Question</label>
                 <div className="u-full-width" id="exampleMessage"></div>
              </div>
            </div>
            <div className="row">
               <div className="eleven columns">
                 <label htmlFor="AnswerBox">Answer</label>
                 <textarea className="u-full-width" placeholder="Answer Here …" id="AnswerBox"></textarea>
               </div>
            </div>

              <input className="button-primary" type="submit" value="Submit"/>

          </div>

      </div>
    );
  }
}


export default TeamDisplay;
