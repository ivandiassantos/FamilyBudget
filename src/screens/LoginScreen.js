import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export class LoginScreen extends Component {

    render() {
      return (
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'center',}}>
          <View style={{ width: '100%' }}>
            <TextInput style={{ backgroundColor: '#fff' }}
              label='Email'
            />
          </View>
          <View style={{ width: '100%' }}>
            <TextInput style={{ backgroundColor: '#fff' }} secureTextEntry={true}
              label='Senha'
            />
          </View>
          <View style={{ width: '100%' }}>
            <Button mode="contained" onPress={this._signInAsync}>
              ENTRAR
          </Button>
          </View>
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }