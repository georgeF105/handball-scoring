import Firebase from 'firebase'

const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyCtSSC3XpY0WxucI7bm-pLbgsjWBPTUqPQ",
    authDomain: "handball-scoring.firebaseapp.com",
    databaseURL: "https://handball-scoring.firebaseio.com",
    storageBucket: "handball-scoring.appspot.com"
})

export default firebase