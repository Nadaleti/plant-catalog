import Axios from 'axios';
import firebase from '../../../../firebase';

export const TrefleAxios = Axios.create({
  baseURL: 'https://trefle.io/api'
});

export const loadAppToken = () => {
  const appToken = JSON.parse(localStorage.getItem('appToken'));

  if (!appToken || ((appToken.expiration * 1000) < new Date().getTime())) {
    console.log('Loading app token...');

    return getAppTokenFromFirebase()
      .then((firebaseAppToken) => {
        localStorage.setItem('appToken', JSON.stringify(firebaseAppToken));
        return Promise.resolve(firebaseAppToken.token);
      })
      .catch((error) => Promise.reject(error));
  } else {
    return Promise.resolve(appToken.token);
  }
}

const getAppTokenFromFirebase = () => {
  const getAppAccessToken = firebase.functions().httpsCallable('getAppAccessToken?appUrl=http://localhost:3000');
  return getAppAccessToken()
      .then(response => Promise.resolve(response.data))
      .catch(error => {
        console.error(error);
        Promise.reject(error);
      });
}