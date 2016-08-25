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
    this.setState({editingEvent: key})
  }

  updateEventTime = (e) => {
    this.setState({editingEvent: null})
  }

  deleteEvent = (eventKey) => {
    this.setState({editingEvent: null})
    this.props.deleteEvent(eventKey)
  }
  render () {
    const editingEvent = this.state.editingEvent
    let eventsArr = Object.keys(this.props.events).map(key => {
      let event = this.props.events[key]
      event.key = key
      return event
    })
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
            {editingEvent
              ?<div className='event-cell delete'>
              delete
            </div>
              : null}
          </div>
        </div>
        <div className='events'>
          {eventsArr.map((event, key) => {
            return (editingEvent !== event.key
                ? <div key={key} className='event-row' onClick={this.editEvent.bind(this,event.key)}>
                  <div className='event-cell team'>
                    <p>{event.team}</p>
                  </div>
                  <div className='event-cell player'>
                    <p>{event.player_name}</p>
                  </div>
                  <div className='event-cell type'>
                    <p>{event.type}</p>
                  </div>
                  <div className='event-cell time'>
                    <p>{formatTime(event.time)}</p>
                  </div>
                  {editingEvent
                    ?<div className='event-cell delete'></div>
                    : null}
                </div>
                : <div key={key} className='event-row editing'>
                  <div className='event-cell team'>
                    <p>{event.team}</p>
                  </div>
                  <div className='event-cell player'>
                    <p>{event.player_name}</p>
                  </div>
                  <div className='event-cell type'>
                    <p>{event.type}</p>
                  </div>
                  <div className='event-cell time'>
                    <input type='text' defaultValue={formatTime(event.time)} onBlur={this.updateEventTime} />
                  </div>
                  <div className='event-cell delete'>
                    <i className='fa fa-trash' onClick={this.deleteEvent.bind(this, event.key)}/>
                  </div>
                </div>)
          })}
        </div>
      </div>
    )
  }
}

export default EventsTable