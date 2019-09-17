import React, { Component } from 'react';
import { Text, Container, Content, Form, Button, Toast } from 'native-base';
import InputSecret from '../misc/components/InputSecret';
import InputText from '../misc/components/InputText';
import Utils from '../misc/Utils';
import {connect} from "react-redux";
import AccountActions from './AccountActions';

const mapReduxStateToProps = reduxState => ({
    registerSuccess: reduxState.accountReducer.registerSuccess,
});

const mapReduxDispatchToProps = {
    register: AccountActions.register,
};

export default connect(mapReduxStateToProps, mapReduxDispatchToProps)(
class CreateNewAccountScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    }

    handleSubmit = (event) => {
        if (!this.isFormValid()) {
            this.showToast();
            return false;
        }
        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation,
        });
    };

    showToast = () => {
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            duration: 3000
        });
    };

    isFormValid = () => {
        return !Utils.isEmpty(this.state.name)
            && !Utils.isEmpty(this.state.email)
            && Utils.isEmailValid(this.state.email)
            && !Utils.isEmpty(this.state.password)
            && !Utils.isEmpty(this.state.passwordConfirmation);
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
                            name="name"
                            onChangeText={(name) => this.setState({ name })}
                            styles={{ marginLeft: 5, marginRight: 5 }}
                        />
                        <InputText required={true}
                            label="E-Mail"
                            value={this.state.email}
                            maxLength={200}
                            type="email"
                            onChangeText={(email) => this.setState({ email })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}
                        />
                        <InputSecret required={true}
                            label="Senha"
                            value={this.state.password}
                            maxLength={200}
                            onChangeText={(password) => this.setState({ password })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}
                        />
                        <InputSecret required={true}
                            label="Repita a Senha"
                            value={this.state.passwordConfirmation}
                            maxLength={200}
                            onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}
                            styles={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}
                        />
                    </Form>
                    <Button block style={{ margin: 5, marginTop: 30 }} onPress={this.handleSubmit}>
                        <Text>CADASTRAR</Text>
                    </Button>
                </Content>
                {this.props.registerSuccess === true ? this.props.navigation.navigate('Auth'): this.props.navigation.navigate('CreateNewAccount')}
            </Container>
        );
    }
});