//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form'
import { sendAnswer } from './team_display_action';
export const fields = [ 'notes' ]

class SimpleForm extends Component {
  onSubmit(props){
    sendAnswer(props)
}

  render() {
    // console.log(this.props)
    const {
      fields: { notes },
      handleSubmit,
      resetForm,
      submitting
      } = this.props
    return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3>(TEAM NAME)</h3>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...notes}
              value={notes.value || ''}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            // {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}


export default reduxForm({
  form: 'simple',
  fields: ['notes'], null
})(SimpleForm)
