import React, {Component} from 'react';
import {View, Button, StatusBar, AsyncStorage} from 'react-native';

export default class OtherScreen extends Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <View>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }