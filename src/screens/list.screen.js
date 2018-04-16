import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class MeScreen extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Pantry List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
