import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware ,compose} from 'redux';
import { Provider } from 'react-redux'
import rootreducer from './store/reducers/rootreducer'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore ,createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, getFirebase ,ReactReduxFirebaseProvider, reduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

import firebase from "firebase/app";


const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users',attackAuthIsReady: true })
  )
);




  ReactDOM.render(
    <Provider store={store}>
        
            <App />
        
    </Provider>,
    document.getElementById('root'));  
    serviceWorker.unregister();

  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
