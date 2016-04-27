import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';]
import { reduxForm } from 'redux-form';
import { uploadCSV } from './csv_action';

class CSV extends Component {
  //this is what is used to forward you to next page
  static contextTypes = {
    router: PropTypes.object
  };
//this makes it so when your post is successful it forwards you to the admin-game page
  onSubmit(props) {
    this.props.uploadCSV(props)
    .then(() => {
      this.context.router.push('/admin-game');
    })
  }

  render() {
    return (
      <div>
            <h1>Upload your questions!</h1>
            <h3>Example .CSV</h3>
            <form id="fileUpload"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(this.onSubmit.bind(this)}>
                <label htmlFor="payload">Select a file to upload:</label>
                <input type="file"
                        {...file}
                       name="csv"
                       value=""
                       accept=".csv"
                       />
                <br />
                <button
                        type="submit">
                Upload
                </button>

            </form>
      </div>
    );
  }
}


export default reduxForm({form: CSVForm, fields: [ 'file']}, null, {uploadCSV})(CSV);