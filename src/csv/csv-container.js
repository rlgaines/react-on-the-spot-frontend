import React, { Component } from 'react';
import { Link } from 'react-router';

class CSV extends Component {
  render() {
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
      </div>
    );
  }
}


export default CSV;