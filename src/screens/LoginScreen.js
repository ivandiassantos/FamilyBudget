import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon, View } from 'native-base';
import Utils from '../misc/Utils';
import InputText from '../misc/components/InputText';
import InputSecret from '../misc/components/InputSecret';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <Form>
            <InputText required={true}
              label="E-Mail"
              value={this.state.email}
              maxLength={200}
              onChangeText={(email) => this.setState({ email })} 
              styles={{marginLeft: 5, marginRight: 5}} 
              type="email"
            />
            <InputSecret required={true}
              label="Senha"
              value={this.state.password}
              maxLength={200}
              onChangeText={(password) => this.setState({ password })}
              styles={{marginLeft: 5, marginRight: 5, marginTop: 15}}
            />
          </Form>
          <Button block style={{ margin: 5, marginTop: 30 }}>
            <Text>ENTRAR</Text>
          </Button>
          <Button block style={{ margin: 5, marginTop: 10 }}>
            <Icon name="logo-facebook" />
            <Text>LOGIN COM FACEBOOK</Text>
          </Button>
          <Button block style={{ margin: 5, marginTop: 10 }}>
            <Icon name="logo-google" />
            <Text>LOGIN COM GOOGLE</Text>
          </Button>
          <Button block light onPress={this.openFormNewAccount}>
            <Text> Não tem uma conta? Cadastre-se aqui </Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  openFormNewAccount = () => {
    this.props.navigation.navigate('CreateNewAccount');
  }
}