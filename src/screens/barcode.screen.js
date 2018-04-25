import React from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    justScanned: false,
    read: null
  };

  componentDidMount() {
    this.setState({ justScanned: false });
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  delay(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(), time);
    });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = async ({ type, data }) => {
    await this.delay(500);
    if (this.state.justScanned && this.state.read == data) {
      return;
    }
    this.setState({ justScanned: true, read: data });

    console.log('data and type ', data, type);
    this.props.navigation.navigate('BarcodeDetails', {
      type: type,
      data: data
    });
  };
}
