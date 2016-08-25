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

  updateEventTime = (e) => {
    console.log(e.target.value)
    this.setState({editingEvent: null})
  }

  deleteEvent = (eventKey) => {
    console.log('deleteEvent', eventKey)
    this.setState({editingEvent: null})
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
            {editingEvent
              ?<div className='event-cell delete'>
              delete
            </div>
              : null}
          </div>
        </div>
        <div className='events'>
          {Object.keys(events).map((key) => {
            return (editingEvent !== key
                ? <div key={key} className='event-row' onClick={this.editEvent.bind(this,key)}>
                  <div className='event-cell team'>
                    <p>{events[key].team}</p>
                  </div>
                  <div className='event-cell player'>
                    <p>{events[key].player_name}</p>
                  </div>
                  <div className='event-cell type'>
                    <p>{events[key].type}</p>
                  </div>
                  <div className='event-cell time'>
                    <p>{formatTime(events[key].time)}</p>
                  </div>
                  {editingEvent
                    ?<div className='event-cell delete'></div>
                    : null}
                </div>
                : <div key={key} className='event-row editing'>
                  <div className='event-cell team'>
                    <p>{events[key].team}</p>
                  </div>
                  <div className='event-cell player'>
                    <p>{events[key].player_name}</p>
                  </div>
                  <div className='event-cell type'>
                    <p>{events[key].type}</p>
                  </div>
                  <div className='event-cell time'>
                    <input type='text' value={formatTime(events[key].time)} onBlur={this.updateEventTime} />
                  </div>
                  <div className='event-cell delete'>
                    <i className='fa fa-trash' onClick={this.deleteEvent.bind(this, key)}/>
                  </div>
                </div>)
          })}
        </div>
      </div>
    )
  }
}

export default EventsTable