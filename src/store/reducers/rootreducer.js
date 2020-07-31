import authreducer from './authreducer'
import projectreducer from './projectreducer'
import bookreducer from './bookreducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootreducer = combineReducers({
    auth : authreducer,
    project : projectreducer,
    book : bookreducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootreducer 