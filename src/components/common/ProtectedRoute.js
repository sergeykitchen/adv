import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {moduleName} from '../../ducks/auth'
import UnAuthorized from './UnAuthorized'

class ProtectedRout extends Component {
  render() {

    const {component, ...rest} = this.props
    return (
      <Route {...rest} render={this.renderProtected} />
    )
  }

  renderProtected = (routeProps) => {
    const {component: ProtectedComponent, autorized} = this.props
    return autorized ? <ProtectedComponent {...routeProps} /> : <UnAuthorized />
  }
}
export default connect(state => {
  return {
    authorized: !!state[moduleName].user
  }
})(ProtectedRout)