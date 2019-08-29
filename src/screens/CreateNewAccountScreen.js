import React, { Component } from 'react';
import { Text, Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import InputSecret from '../misc/components/InputSecret';
import InputText from '../misc/components/InputText';

export default class CreateNewAccountScreen extends Component {
    static navigationOptions = {
        header: null,
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
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
                    <Form>
                        <InputText required={true}
                            label="Nome"
                            value={this.state.name}
                            maxLength={200}
                            onChangeText={(name) => this.setState({ name })}
                            styles={{ marginLeft: 5, marginRight: 5 }}
                        />
                        <InputText required={true}
                            label="E-Mail"
                            value={this.state.email}
                            maxLength={200}
                            onChangeText={(email) => this.setState({ email })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}
                        />
                        <InputSecret required={true}
                            label="Senha"
                            value={this.state.password}
                            maxLength={200}
                            onChangeText={(password) => this.setState({ password })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15  }}
                        />
                        <InputSecret required={true}
                            label="Repita a Senha"
                            value={this.state.passwordConfirmation}
                            maxLength={200}
                            onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15  }}
                        />
                    </Form>
                    <Button block style={{ margin: 5, marginTop: 30 }} onPress={this.handleSubmit}>
                        <Text>CADASTRAR</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}