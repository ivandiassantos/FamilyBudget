import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container } from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>

      </Container>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
