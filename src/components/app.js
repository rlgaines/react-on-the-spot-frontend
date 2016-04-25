import React, { Component } from 'react';
import Request from 'react-http-request';
 
export default class App extends Component {
  render() {
    return (
      <Request
        url='http://localhost:3000/ping'
        method='get'
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}