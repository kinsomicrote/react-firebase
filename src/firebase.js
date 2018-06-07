import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAgf2r8lDHxXTecca1qXupO9MA6MqWirYw',
  authDomain: 'zeolearn-50beb.firebaseapp.com',
  databaseURL: 'https://zeolearn-50beb.firebaseio.com',
  projectId: 'zeolearn-50beb',
  storageBucket: '',
  messagingSenderId: '313682888321',
};

firebase.initializeApp(config);

export default firebase;
