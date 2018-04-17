import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class SplashScreen extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object
  };

  componentDidMount() {
    const { isAuthenticated, navigation } = this.props;

    if (isAuthenticated) {
      this.props.navigation.navigate('Main');
    } else {
      // navigate to login page
      this.props.navigation.navigate('Main');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ flex: 1 }}
          source={require('../assets/splash.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B4BDF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
