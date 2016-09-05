import React from 'react'

import { convertToArray } from '../../lib/filter'
class MatchReport extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  fillTheBlanks = (arr, num) => {
    for (let i = arr.length; i < num; i++) {
      arr.push({})
    }
    return arr
  }

  formatEvents = (events) => {
    return {
      first: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      second: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  }

  render () {
    const game = this.props.games[this.props.params.id] || {}
    console.log('game', game)
    const homeTeam = game.home_team || {}
    const homeTeamPlayers = this.fillTheBlanks(convertToArray(homeTeam.players || {}), 16)
    const awayTeam = game.away_team || {}
    const awayTeamPlayers = this.fillTheBlanks(convertToArray(awayTeam.players || {}), 16)
    const scoringEvents = this.formatEvents(game.events)
    const homeHalfScore = game.halftime_score && game.halftime_score.home || ''
    const awayHalfScore = game.halftime_score && game.halftime_score.away || ''
    const homeFullScore = game.fulltime_score && game.fulltime_score.home || ''
    const awayFullScore = game.fulltime_score && game.fulltime_score.away || ''
    const league = 'Wellington Handball League'
    return (
      <div className='match-report'>
        <div className='container'>
          <div className='page-header'>
            <h1>Match Report</h1>
          </div>
          <div className='a4-page'>
            <div className='match-report-page' id='printable-match-report'>
              <div className='main-col'>
                <div className='report-head'>
                  <div className='report-title report-row four-rows'>
                    <div className='cell four-rows width-1-1'>
                      <img src='/images/logo-whl.png' alt='LOGO' className='logo' />
                    </div>
                    <div className='report-column width-grow'>
                      <div className='cell two-rows'>
                        <h2>{league}</h2>
                      </div>
                      <div className='cell two-rows'>
                        <h3>Match Report</h3>
                      </div>
                    </div>
                  </div>
                  <div className='report-row'>
                    <div className='cell width-1-1 highlight-3'>Venue</div>
                    <div className='cell width-2-2'>{game.venue}</div>
                    <div className='cell width-2-3  highlight-3'>Gender</div>
                    <div className='cell width-2-3'>{game.gender}</div>
                  </div>
                  <div className='report-row'>
                    <div className='cell width-1-1  highlight-3'>Home Team</div>
                    <div className='cell width-3-2'>{homeTeam.name}</div>
                    <div className='cell width-1-1  highlight-3'>Away Team</div>
                    <div className='cell width-3-4'>{awayTeam.name}</div>
                  </div>
                  <div className='report-row'>
                    <div className='cell width-1-1  highlight-3'>Date</div>
                    <div className='cell width-3-2'>{game.date}</div>
                    <div className='cell width-1-1  highlight-3'>Time</div>
                    <div className='cell width-3-4'>{game.time}</div>
                  </div>
                  <div className='report-row two-rows'>
                    <div className='report-column'>
                      <div className='report-row'>
                        <div className='cell width-1-1  highlight-3'>HT Score</div>
                        <div className='cell width-5-4'>{homeHalfScore + '  ' + awayHalfScore}</div>
                      </div>
                      <div className='report-row'>
                        <div className='cell width-1-1  highlight-3'>Final Score</div>
                        <div className='cell width-5-4'>{homeFullScore + '  ' + awayFullScore}</div>
                      </div>
                    </div>
                    <div className='cell two-rows width-5-4  highlight-3'>Time Outs</div>
                    <div className='report-column'>
                      <div className='report-row'>
                        <div className='cell width-1-1 highlight-3'>Home Team</div>
                        <div className='cell width-5-5 highlight-3'>1st Half</div>
                        <div className='cell width-5-6' />
                        <div className='cell width-5-5 highlight-3'>2nd Half</div>
                        <div className='cell width-5-6' />
                      </div>
                      <div className='report-row'>
                        <div className='cell width-1-1 highlight-3'>Away Team</div>
                        <div className='cell width-5-5 highlight-3'>1st Half</div>
                        <div className='cell width-5-6' />
                        <div className='cell width-5-5 highlight-3'>2nd Half</div>
                        <div className='cell width-5-6' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='report-team'>
                  <div className='report-row'>
                    <div className='cell width-grow highlight-2'>HOME TEAM</div>
                  </div>
                  <div className='report-row'>
                    <div className='cell width-8-1'>No.</div>
                    <div className='cell width-8-2'>Name</div>
                    <div className='cell width-5-4'>DoB</div>
                    <div className='cell width-1-1'>Goals</div>
                    <div className='cell width-5-6'>7m</div>
                    <div className='cell width-5-6'>YC</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>RC</div>
                  </div>
                  {homeTeamPlayers.map((player, key) => {
                    return (
                      <div key={key} className='report-row'>
                        <div className='cell width-8-1'>{player.number}</div>
                        <div className='cell width-8-2'>{(player.first_name || '') + ' ' + (player.last_name || '')}</div>
                        <div className='cell width-5-4'>{player.dob}</div>
                        <div className='cell width-1-1'>{player.goals}</div>
                        <div className='cell width-5-6'>{player.seven_meter}</div>
                        <div className='cell width-5-6'>{player.yellow_cards}</div>
                        <div className='cell width-5-6'>{player.two_minutes}</div>
                        <div className='cell width-5-6'>{player.two_minutes}</div>
                        <div className='cell width-5-6'>{player.two_minutes}</div>
                        <div className='cell width-5-6'>{player.red_cards}</div>
                      </div>
                    ) })}
                  <div className='report-row'>
                    <div className='cell width-grow highlight-3'>TEAM OFFICALS</div>
                  </div>
                  <div className='report-row highlight-1'>
                    <div className='cell width-8-1'>A</div>
                    <div className='cell width-grow'>{homeTeam.offical_a}</div>
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                  </div>
                  <div className='report-row highlight-1'>
                    <div className='cell width-8-1'>B</div>
                    <div className='cell width-grow'>{homeTeam.offical_b}</div>
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                  </div>
                </div>
                <div className='report-team'>
                  <div className='report-row'>
                    <div className='cell width-grow highlight-2'>AWAY TEAM</div>
                  </div>
                  <div className='report-row'>
                    <div className='cell width-8-1'>No.</div>
                    <div className='cell width-8-2'>Name</div>
                    <div className='cell width-5-4'>DoB</div>
                    <div className='cell width-1-1'>Goals</div>
                    <div className='cell width-5-6'>7m</div>
                    <div className='cell width-5-6'>YC</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>2min</div>
                    <div className='cell width-5-6'>RC</div>
                  </div>
                  {awayTeamPlayers.map((player, key) => {
                    return (
                      <div key={key} className='report-row'>
                        <div className='cell width-8-1'>{player.number}</div>
                        <div className='cell width-8-2'>{(player.first_name || '') + ' ' + (player.last_name || '')}</div>
                        <div className='cell width-5-4'>{player.dob}</div>
                        <div className='cell width-1-1'>{player.goals}</div>
                        <div className='cell width-5-6'>{player.seven_meter}</div>
                        <div className='cell width-5-6'>{player.yellow_cards}</div>
                        <div className='cell width-5-6'>{player.two_minutes > 0 ? 'x' : ''}</div>
                        <div className='cell width-5-6'>{player.two_minutes >= 2 ? 'x' : '' }</div>
                        <div className='cell width-5-6'>{player.two_minutes >= 3 ? 'x' : '' }</div>
                        <div className='cell width-5-6'>{player.red_cards}</div>
                      </div>
                    ) })}
                  <div className='report-row'>
                    <div className='cell width-grow highlight-3'>TEAM OFFICALS</div>
                  </div>
                  <div className='report-row highlight-1'>
                    <div className='cell width-8-1'>A</div>
                    <div className='cell width-grow'>{awayTeam.offical_a}</div>
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                  </div>
                  <div className='report-row highlight-1'>
                    <div className='cell width-8-1'>B</div>
                    <div className='cell width-grow'>{awayTeam.offical_a}</div>
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                    <div className='cell width-5-6' />
                  </div>
                </div>
                <div className='match-officials'>
                  <div className='report-row highlight-2'>
                    <div className='cell width-grow'>MATCH OFFICALS</div>
                  </div>
                  <div className='report-row'>
                    <div className='report-column'>
                      <div className='report-row'>
                        <div className='cell width-1-1'>Referee #1</div>
                        <div className='cell width-2-2'>{game.referee_1}</div>
                      </div>
                      <div className='report-row'>
                        <div className='cell width-1-1'>Referee #2</div>
                        <div className='cell width-2-2'>{game.referee_2}</div>
                      </div>
                      <div className='report-row'>
                        <div className='cell width-1-1'>Timekeeper</div>
                        <div className='cell width-2-2'>{game.timekeeper}</div>
                      </div>
                      <div className='report-row'>
                        <div className='cell width-1-1'>Scorekeeper</div>
                        <div className='cell width-2-2'>{game.scorekeeper}</div>
                      </div>
                    </div>
                    <div className='cell four-rows width-grow' id='report-comments'>Comments (League Offical):<p>{game.game_comments}</p></div>
                  </div>
                </div>
              </div>
              <div className='score-col'>
                <div className='cell five-rows width-grow'>
                  <img src='/images/logo-nzhf.png' alt='LOGO' className='logo' />
                </div>
                <div className='cell width-grow highlight-2'>Scoring</div>
                <div className='report-row highlight-2'>
                  <div className='cell width-half'>1st</div>
                  <div className='cell width-half'>2nd</div>
                </div>
                <div className='report-row width-grow'>
                  <div className='report-column width-half'>
                    {scoringEvents.first.map((event, key) => {
                      return <div key={key} className={`report-row ${key % 2 ? 'highlight-3' : ''}`}>
                        <div className='cell width-half' />
                        <div className='cell width-half' />
                      </div>
                    })}
                  </div>
                  <div className='report-column width-half'>
                    {scoringEvents.second.map((event, key) => {
                      return <div key={key} className={`report-row ${key % 2 ? 'highlight-3' : ''}`}>
                        <div className='cell width-half' />
                        <div className='cell width-half' />
                      </div>
                    })}
                  </div>
                </div>
                <div className='report-row'>
                  <div className='cell width-half highlight-2'>Score</div>
                  <div className='cell width-half highlight-2'>Score</div>
                </div>
                <div className='report-row'>
                  <div className='cell width-half four-rows'><h3>{homeFullScore}</h3></div>
                  <div className='cell width-half four-rows'><h3>{awayFullScore}</h3></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchReport
