import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDesRLtzUKaIs-fBVIs-TttpaXIUqDw6GU",
  authDomain: "plant-catalog-9cdf1.firebaseapp.com",
  databaseURL: "https://plant-catalog-9cdf1.firebaseio.com",
  projectId: "plant-catalog-9cdf1",
  storageBucket: "plant-catalog-9cdf1.appspot.com",
  messagingSenderId: "178396429905",
  appId: "1:178396429905:web:4ca98a58981d45c00e8270"
};

firebase.initializeApp(firebaseConfig);

export default firebase;