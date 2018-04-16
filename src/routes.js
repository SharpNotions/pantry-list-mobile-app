import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/login.screen';
import SplashScreen from './screens/splash.screen';
import ListScreen from './screens/list.screen';
import MeScreen from './screens/me.screen';

import colors from './utils/colors';

const PantryListStackNavigator = StackNavigator(
  {
    PantryList: {
      screen: ListScreen,
      navigationOptions: {
        headerTitle: 'Pantry List'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const MyProfileStackNavigator = StackNavigator(
  {
    MyProfile: {
      screen: MeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const MainTabNavigator = TabNavigator(
  {
    List: {
      screen: PantryListStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            name="list"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    Me: {
      screen: MyProfileStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            name="account-circle"
            size={29}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.primaryDark,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: '#f7f7f7'
      },
      IconStyle: {
        width: 35,
        height: 30
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    }
  }
);

export default StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    }
  }
});
