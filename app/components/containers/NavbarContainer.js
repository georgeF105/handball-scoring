import { connect } from 'react-redux'

import { logIn, logOut } from '../../redux/userActions'
import Navbar from '../Navbar'

const mapStateToProps = (state) => {
  return {
    user: state.user.get('user').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      console.log('LOGIN')
      dispatch(logIn())
    },
    logOut: () => {
      dispatch(logOut())
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
