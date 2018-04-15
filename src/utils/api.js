import Expo from 'expo';
import { Config } from '../../config';

export const getUserInfo = async accessToken => {
  let userInfoResponse = await fetch(
    'https://www.googleapis.com/userinfo/v2/me',
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return userInfoResponse;
};

// export const signInWithGoogleAsync = () => {
//   try {
//     const result = await Expo.Google.logInAsync({
//       androidClientId: '430381753851-umurbastd4s7rj2mli11fjo9tkfk43a5.apps.googleusercontent.com',
//       iosClientId: '430381753851-4i8ed01u344vd89l61d561jekcprpmqu.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//     });
//
//     if (result.type === 'success') {
//       return result.accessToken;
//     } else {
//       return {cancelled: true};
//     }
//   } catch(e) {
//     return {error: true};
//   }
// }

export const fetchList = async () => {
  const response = await fetch(Config.apiUrl);
  const listData = await response.json();

  return listData;
};
