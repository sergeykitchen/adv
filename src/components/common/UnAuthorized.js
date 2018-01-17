import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <h1>Unautorized, please <Link to='/auth/signin'>sign in</Link></h1>
      </div>
    )
  }
}
