import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon } from 'native-base';
import Utils from '../misc/Utils';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Family Budget - Login',
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
        <Content>
          <Form>
            <Item floatingLabel style={{ margin: 15 }} error={Utils.isEmpty(this.state.email)}>
              <Label>E-mail</Label>
              <Input value={this.state.email} onChangeText={(email) => this.setState({ email })} maxLength={200} />
            </Item>
            {Utils.isEmpty(this.state.email) ? <Text style={{ margin: 15 }}>Campo obrigatório</Text> : <Text />}
            <Item floatingLabel style={{ margin: 15 }} last error={Utils.isEmpty(this.state.password)}>
              <Label>Senha</Label>
              <Input secureTextEntry value={this.state.password} onChangeText={(password) => this.setState({ password })} />
            </Item>
            {Utils.isEmpty(this.state.email) ? <Text style={{ margin: 15 }}>Campo obrigatório</Text> : <Text />}
          </Form>
          <Button block style={{ margin: 15, marginTop: 10 }}>
            <Text>ENTRAR</Text>
          </Button>
          <Button block style={{ margin: 15, marginTop: 10 }}>
            <Icon name="logo-facebook" />
            <Text>LOGIN COM FACEBOOK</Text>
          </Button>
          <Button block style={{ margin: 15, marginTop: 10 }}>
            <Icon name="logo-google" />
            <Text>LOGIN COM GOOGLE</Text>
          </Button>
          <Button block light onPress={this.openFormNewAccount}>
            <Text> Não tem uma conta? adastre-se aqui </Text>
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
    console.log('Teste');
    this.props.navigation.navigate('CreateNewAccount');
  }
}