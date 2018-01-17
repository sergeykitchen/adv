import firebase from 'firebase';
export const appName = 'adv2018-c96df';
export const firebaseConfig = {
  apiKey: "AIzaSyBP_rztQdQJGrZi9zkEGFYVOcKJCNwxj-U",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "427070364048"
};

firebase.initializeApp(firebaseConfig)

