import React from 'react'

import { formatTime } from '../../lib/formatNumber'

class EventsTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editingEvent: null
    }
  }

  editEvent = (key) => {
    console.log('key',key)
    this.setState({editingEvent: key})
  }
  render () {
    const events = this.props.events
    const editingEvent = this.state.editingEvent
    return (
      <div className='event-table card'>
        <div className='heading'> 
          <div>Events - click to edit</div> 
          <div className='event-row'>
            <div className='event-cell team'>
              team
            </div>
            <div className='event-cell player'>
              player
            </div>
            <div className='event-cell type'>
              type
            </div>
            <div className='event-cell time'>
              time
            </div>
          </div>
        </div>
        <div className='events'>
          {Object.keys(events).map((key) => {
            console.log('editingEvent' , editingEvent, 'key', key)
            return (editingEvent !== key
                ? <div key={key} className='event-row' onClick={this.editEvent.bind(this,key)}>
                  <div className='event-cell team'>
                    {events[key].team}
                  </div>
                  <div className='event-cell player'>
                    {events[key].player_name}
                  </div>
                  <div className='event-cell type'>
                    {events[key].type}
                  </div>
                  <div className='event-cell time'>
                    {formatTime(events[key].time)}
                  </div>
                </div>
                : <div key={key} className='event-row editing' onClick={this.editEvent.bind(this,key)}>
                  <div className='event-cell team'>
                    {events[key].team}
                  </div>
                  <div className='event-cell player'>
                    {events[key].player_name}
                  </div>
                  <div className='event-cell type'>
                    {events[key].type}
                  </div>
                  <div className='event-cell time'>
                    {formatTime(events[key].time)}
                  </div>
                </div>)
          })}
        </div>
      </div>
    )
  }
}

export default EventsTable