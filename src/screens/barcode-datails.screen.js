import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { fetchBarcodeData } from '../utils/api';
import { colors } from '../utils/colors';

export default class BarcodeDetalsScreen extends React.Component {
  constructor(props) {
    super(props);

    // const { params } = this.props.navigation.state;
    // console.log('params', params);

    this.state = {
      loading: true,
      error: false,
      data: null
    };
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    // orange crush: 078000013054
    // purell : 073852025842
    // gold bond: 041167055106
    //this.handleGetBarcodeData(params.data);
    this.handleGetBarcodeData('078000013054');
  }

  handleGetBarcodeData = async code => {
    if (!code) return;

    this.setState({ loading: true }, async () => {
      try {
        const barcodeData = await fetchBarcodeData(code);
        console.log('barcode data', barcodeData);
        this.setState({ loading: false, error: false, data: barcodeData });
      } catch (e) {
        this.setState({ loading: false, error: true });
      }
    });
  };

  render() {
    const { loading, error, data } = this.state;
    return (
      <View>
        <ActivityIndicator animating={loading} color="white" size="large" />
        {!loading && (
          <View>
            {error && (
              <Text>
                Could not load barcode details, please try another barcode
              </Text>
            )}

            {!error && (
              <Card
                title={data.items[0].title}
                image={{ uri: data.items[0].images[0] }}
                imageProps={{ resizeMode: 'contain' }}
              >
                <Button
                  title="Add To List"
                  buttonStyle={{ backgroundColor: '#7B4BDF' }}
                />
              </Card>
            )}
          </View>
        )}
      </View>
    );
  }
}
