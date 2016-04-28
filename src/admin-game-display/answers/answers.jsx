//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';

class GameAnswers extends Component {  

  render() {
    socket.on('admin', function(data){
      console.log(data)
    })
    return (
      <div>
                <div className="row" id="teamGameAnswers">
                  <h1>Answers</h1>
                    <table class="u-full-width">
                      <thead>
                        <tr>
                          <th>Team Name</th>
                          <th>Answer Given</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                      </tbody>    
                    </table>   
                    <button>Add Scores</button>
                </div>
      </div>
    );
  }
}


export default GameAnswers;

 