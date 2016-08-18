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
      <header>
        <div className='container'>
          <div className='navbar'>
            <Link className='header-icon home' to='/'><i className='fa fa-home' /></Link>
            {optionsView
              ? <div className='options-bar'>
                {loggedIn
                  ? <div className='login-bar'>
                    <div className='user-name'>{userName}</div>
                    <Link className='nav-button' activeClassName='active' to='game/new'>New Game</Link>
                    <Link className='nav-button' activeClassName='active' to='team/new'>New Team</Link>
                    <Link className='nav-button' activeClassName='active' to='team/new'>Dashboard</Link>
                    <div className='nav-button' onClick={logOut}>LogOut</div>
                  </div>
                  : <div className='login-bar'>
                    <div className='nav-button' onClick={logIn}>LogIn</div>
                  </div>}
                <div className='header-icon options' onClick={this.toggleOptions}><i className='fa fa-caret-up' /></div>
              </div>
              : <div className='header-icon options' onClick={this.toggleOptions}><i className='fa fa-caret-down' /></div>
            }

          </div>

        </div>
      </header>
    )
  }
}

export default NavBar
