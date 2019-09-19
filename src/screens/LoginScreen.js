import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Form, Button, Text, Icon } from 'native-base';
import InputText from '../misc/components/InputText';
import InputSecret from '../misc/components/InputSecret';
import { connect } from "react-redux";
import AccountActions from '../account/AccountActions';

const mapReduxStateToProps = reduxState => ({
  loginSuccess: reduxState.accountReducer.loginSuccess,
});

const mapReduxDispatchToProps = {
  authenticate: AccountActions.authenticate,
};

export default connect(mapReduxStateToProps, mapReduxDispatchToProps)(
  class LoginScreen extends Component {
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

    authenticate = () => {
      this.props.authenticate({
        email: this.state.email,
        password: this.state.password,
      })
    };

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
                styles={{ marginLeft: 5, marginRight: 5 }}
                type="email"
              />
              <InputSecret required={true}
                label="Senha"
                value={this.state.password}
                maxLength={200}
                onChangeText={(password) => this.setState({ password })}
                styles={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}
              />
            </Form>
            <Button block style={{ margin: 5, marginTop: 30 }} onPress={this.authenticate}>
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
          {this.props.loginSuccess === true ? this.props.navigation.navigate('Home'): this.props.navigation.navigate('Login')}
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
  });