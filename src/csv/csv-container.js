import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { post } from './csv_action';

class CSV extends Component {

  //this is what is used to forward you to next page
  static contextTypes = {
    router: PropTypes.object
  };
//this makes it so when your post is successful it forwards you to the admin-game page
  onSubmit (event) {
    event.preventDefault();
    this.props.post(this.props)
    .then(() => {
      this.context.router.push('/admin-game/select');
    })
   .catch((err)=> {
      console.log("errr:", err);
   })
  }

  render() {
    const url = 'http://localhost:8080/'
    const gameID = this.props.route.gameID;
    const endUrl = '/team-signin';
    const { fields: { file, game_id }, handleSubmit} = this.props;

    return (
      <div>
            <h1>Upload your questions!</h1>
            <h3>Example .CSV</h3>
            <form id="fileUpload"
                  encType="multipart/form-data"
                  onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="payload">Select a file to upload:</label>
                <input type="file"
                        {...file}
                       value={this.props.file}
                       name="file"
                       accept=".csv"
                       />
                <input type="hidden"
                       value={ gameID }
                       {...game_id}
                       />
                <br />
                <button
                        type="submit">
                Upload
                </button>

            </form>
            <a href={url + gameID + endUrl}>Share your link!</a>
      </div>
    );
  }
}


export default reduxForm({form: 'CSVForm', fields: [ 'file', 'game_id']}, null, {post})(CSV);
