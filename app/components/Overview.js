import React from 'react'

import GamesContainer from './containers/GamesContainer'

export default (props) => {
  return (
    <div className='container'>
      <div className='page-header'>
        <h1>Games</h1>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Mens</h3>
          </div>
          <div className='col-md-6'>
            <h3>Womans</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <GamesContainer filter={{gender: 'male'}} />
        </div>
        <div className='col-md-6'>
          <GamesContainer filter={{gender: 'female'}} />
        </div>
      </div>
    </div>
  )
}
