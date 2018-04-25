import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class MeScreen extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Type Here..."
        />
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
