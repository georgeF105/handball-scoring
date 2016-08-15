import { connect } from 'react-redux'

import { fetchProjects } from '../../actions'
import Projects from '../Projects'

const mapStateToProps = (state) => {
  return {
    projects: state.get('projects').toJS(),
    fetchingProjects: state.get('fetchingProjects')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(fetchProjects())
    }
  }
}

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects)

export default ProjectsContainer
