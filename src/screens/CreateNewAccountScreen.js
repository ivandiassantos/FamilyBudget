import React, { Component } from 'react';
import { Text, Container, Content, Form, Item, Label, Input, Button } from 'native-base';

export default class CreateNewAccountScreen extends Component {
    static navigationOptions = {
        title: 'Family Budget - Cadastrar',
    };

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    }

    handleSubmit = () => {
        console.log('State: ', this.state);
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input onChangeText={(name) => this.setState({ name })}
                                value={this.state.name} maxLength={200}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>E-mail</Label>
                            <Input onChangeText={(email) => this.setState({email})} 
                                   value={this.state.email} maxLength={200}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input secureTextEntry onChangeText={(password) => this.setState({password})} 
                                   value={this.state.password} maxLength={12}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirmação da Senha</Label>
                            <Input secureTextEntry onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})} 
                                   value={this.state.passwordConfirmation} maxLength={12}/>
                        </Item>
                    </Form>
                    <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.handleSubmit}>
                        <Text>CADASTRAR</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}