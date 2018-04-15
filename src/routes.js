import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from './screens/Login';

import colors from './utils/colors';

export default StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});
