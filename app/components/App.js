import React from 'react'
import Navbar from './Navbar'

export default React.createClass({
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})
