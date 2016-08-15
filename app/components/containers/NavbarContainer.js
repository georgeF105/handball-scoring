import { connect } from 'react-redux'

import { attemptLogIn, attemptLogOut } from '../../redux/userActions'
import Navbar from '../Navbar'

const mapStateToProps = (state) => {
  return {
    userName: state.user.get('userName'),
    loggedIn: state.user.get('loggedIn')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      console.log('LOGIN')
      dispatch(attemptLogIn())
    },
    logOut: () => {
      dispatch(attemptLogOut())
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
