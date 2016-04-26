import React, { Component } from 'react';
import { Link } from 'react-router';

class TeamSignIn extends Component {
  render() {
    return (
      <div>
            <h1>Sign Up for (Moderator)'s Game!</h1>

            <form id="fileUpload" method="post" action="/uploads/upload" encType="multipart/form-data">
                <label htmlFor="payload">Select a team name:</label>
                <input type="text"
                       name="TeamSignIn"
                       value=""
                       />
                <br />
                <button type="submit">Join Game</button>
            </form>
      </div>
    );
  }
}


export default TeamSignIn;