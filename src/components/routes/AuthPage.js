import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignInForm from '../auth/SignInForm'
import SignUpForm from '../auth/SignUpForm'
import { Route, NavLink } from 'react-router-dom'
import {signUp, moduleName} from '../../ducks/auth'
import {connect} from 'react-redux'
import Loader from '../common/Loader'
 
class AuthPage extends Component {
  static propTypes = {

  }

  render() {

    const {loading} = this.props
    return (
      <div> 
        <h1>Auth page</h1>
          <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>sign in</NavLink>
          <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>sign up</NavLink>
          <Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn} />}/>
          <Route path="/auth/signup" render={() => <SignUpForm onSubmit={this.handleSignUp} />}/>
          {loading && <Loader />}
      </div>
    )
  }

  handleSignIn = (values) => console.log('----', values)
  handleSignUp = ({email, password}) => this.props.signUp(email, password)
}

export default connect(state => {
  return {
    loading: state[moduleName].loading
  }
}, {signUp})(AuthPage)