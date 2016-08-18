import React from 'react'

import { formatTime } from '../../lib/formatNumber'

export default (props) => {
  const events = props.events
  return (
    <div className='event-table card'>
      <div className='heading'> <div>Events</div> </div>
      <div className='events'>
        {Object.keys(events).map((key) => {
          return (
            <div key={key} className='event'>
              {events[key].team} team - player {events[key].player_name} - {events[key].type} - {formatTime(events[key].time)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
