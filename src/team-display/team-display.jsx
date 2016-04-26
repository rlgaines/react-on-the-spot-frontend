//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';

class TeamDisplay extends Component {
  render() {
    return (
      <div>
          <h3>(TEAM NAME)</h3>
          <div class="container">
            <div class="row">
              <div class="twelve column">
                 <label for="exampleMessage">Question</label>
                 <div class="u-full-width" id="exampleMessage"></div>
              </div>
            </div>
            <div class="row">
               <div class="eleven columns">
                 <label for="AnswerBox">Answer</label>
                 <textarea class="u-full-width" placeholder="Answer Here …" id="AnswerBox"></textarea>
               </div>
            </div>

              <input class="button-primary" type="submit" value="Submit"/>

          </div>

      </div>
    );
  }
}


export default TeamDisplay;


