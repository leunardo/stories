import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './tailwind.css';
import MainRouter from './router/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKHyIPftWsO4DyHx7DntMSB1cYnil2We8",
    authDomain: "stories-leonardoalves.firebaseapp.com",
    databaseURL: "https://stories-leonardoalves.firebaseio.com",
    projectId: "stories-leonardoalves",
    storageBucket: "stories-leonardoalves.appspot.com",
    messagingSenderId: "1069643993187",
    appId: "1:1069643993187:web:1d1f18be34f068ca"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<MainRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const db = firebase.firestore();
// db.collection('stories').get().then((snapshot) => {
//     snapshot.forEach(console.log);
// });
