import React from 'react'
import NavbarContainer from './containers/NavbarContainer'

export default React.createClass({
  render () {
    return (
      <div>
        <NavbarContainer props={this.props} />
        {this.props.children}
      </div>
    )
  }
})
