import React from 'react'

import GamesContainer from './containers/GamesContainer'

export default (props) => {
  return (
    <div className='container overview'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='page-header'>
            <h3>Mens</h3>
          </div>
          <GamesContainer filter={{gender: 'male'}} />
        </div>
        <div className='col-md-6'>
          <div className='page-header'>
            <h3>Womans</h3>
          </div>
          <GamesContainer filter={{gender: 'female'}} />
        </div>
      </div>
    </div>
  )
}
