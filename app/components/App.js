import React from 'react'
import NavbarContainer from './containers/NavbarContainer'

export default React.createClass({
  render () {
    return (
      <div className='nav-ed-content'>
        <NavbarContainer props={this.props} />
        {this.props.children}
      </div>
    )
  }
})
