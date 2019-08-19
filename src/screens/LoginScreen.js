import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon } from 'native-base';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Family Budget - Login',
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Login</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input />
                        </Item>
                        <Button full onPress={this._signInAsync}>
                            <Text>ENTRAR</Text>
                        </Button>
                        <Button iconLeft full>
                            <Text>ENTRAR COM CONTA FACEBOOK</Text>
                        </Button>
                        <Button iconLeft full>
                            <Text>ENTRAR COM CONTA GOOGLE</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}