import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';
import { SocialIcon, Header } from 'react-native-elements';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: '',
      photoUrl: ''
    };
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          '430381753851-umurbastd4s7rj2mli11fjo9tkfk43a5.apps.googleusercontent.com',
        iosClientId:
          '430381753851-4i8ed01u344vd89l61d561jekcprpmqu.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        console.log('result', result);
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        });
      } else {
        console.log('cancelled');
      }
    } catch (e) {
      console.log('error', e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const LoginPage = props => {
  return (
    <View>
      <SocialIcon
        title="Sign In With Google"
        button
        type="google-plus-official"
        onPress={() => props.signIn()}
        style={styles.loginButton}
      />
    </View>
  );
};

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150
  },
  loginButton: {
    padding: 15,
    width: 250
  }
});
