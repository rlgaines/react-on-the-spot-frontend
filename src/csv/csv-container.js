import React, { Component } from 'react';
import { Link } from 'react-router';

class CSV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = 'http://localhost:8080/'
    const gameID = this.props.route.gameID;
    const endUrl = '/team-signin';

    return (
      <div>
            <h1>Upload your questions!</h1>
            <h3>Example .CSV</h3>
            <form id="fileUpload" method="post" action="/uploads/upload" encType="multipart/form-data">
                <label htmlFor="payload">Select a file to upload:</label>
                <input type="file"
                       name="csv"
                       value=""
                       accept=".csv"
                       />
                <br />
                <button type="submit">Upload</button>
            </form>
            <a href={url + gameID + endUrl}>Share your link!</a>
      </div>
    );
  }
}


export default CSV;
