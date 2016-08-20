import Firebase from 'firebase'

import config from '../firebasefile.js'

const firebase = Firebase.initializeApp(config[process.env.NODE_ENV || 'development'])

export default firebase
