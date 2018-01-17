import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {reduxForm, Field} from 'redux-form';
import emailValidator from 'email-validator'; 
import ErrorField from './ErrorField'

class SignUpForm extends Component {
  static propTypes = {

  }

  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component={ErrorField}/>
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

const validator = ({email, password}) => {
  const errors = {};

  if(!email) errors.email = 'email is required';
  else if(!emailValidator(email)) errors.email = 'invalid email';

  if(!password) errors.password = 'password is required';
  else if (password.length < 3) errors.password = 'to short';

  return errors;
}

export default reduxForm({
  form: 'auth',
  validator
})(SignUpForm)