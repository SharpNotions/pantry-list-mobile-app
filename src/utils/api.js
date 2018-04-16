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

export const fetchList = async () => {
  const response = await fetch(Config.apiUrl);
  const listData = await response.json();

  return listData;
};
