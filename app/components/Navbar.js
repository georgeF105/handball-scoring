import React from 'react'
import { Link } from 'react-router'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { optionsView: false }
  }

  toggleOptions = () => {
    this.setState({optionsView: !this.state.optionsView})
  }

  render () {
    const userName = this.props.userName
    const loggedIn = this.props.loggedIn
    const logIn = this.props.logIn
    const logOut = this.props.logOut
    const optionsView = this.state.optionsView
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className='navbar-brand' to='/'>Handball Scoring</Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse in' aria-expanded="true">
            <ul className='nav navbar-nav navbar-right'>
              <li><p className='navbar-text'>{userName}</p></li>
              <li><Link className='' activeClassName='active' to='game/new'>New Game</Link></li>
              <li><Link className='' activeClassName='active' to='team/new'>New Team</Link></li>
              <li><Link className='' activeClassName='active' to='dashboard'>Dashboard</Link></li>
              {loggedIn
                ? <li><button className='btn btn-default navbar-btn' onClick={logOut}>LogOut</button></li>
                : <li><button className='btn btn-default navbar-btn' onClick={logIn}>LogIn</button></li>}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
