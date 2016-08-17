import React from 'react'

import { formatTime } from '../../lib/formatNumber'

export default (props) => {
  const events = props.events
  return (
    <div className='event-table card'>
      <div className='heading'> <div>Events</div> </div>
      <div className='events'>
        {events.map((event, key) => {
          return (
            <div key={key} className='event'>
              {event.team_side} team - player {event.player_number} - {event.type} - {formatTime(event.time)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
