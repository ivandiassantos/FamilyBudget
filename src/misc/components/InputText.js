import React, { Component } from 'react';
import Utils from '../Utils';
import { Item, Label, Input, Text, View } from 'native-base';

export default class InputText extends Component {
    render() {
        return (
            <View style={this.props.styles}>
                <Item floatingLabel error={this.props.showRequiredMessage ? true : false}>
                    <Label>{this.props.label}</Label>
                    <Input value={this.props.value}
                        onChangeText={this.props.onChangeText} maxLength={this.props.maxLength} />
                </Item>
                {
                    this.props.showRequiredMessage && Utils.isEmpty(this.props.value) &&
                    <Text style={{ marginLeft: 5, color: '#dc3545' }}>Campo obrigatório</Text>
                }
                {
                    this.props.dataType === 'email' && !Utils.isEmpty(this.props.value) && Utils.isEmailValid(this.props.value) &&
                    <Text style={{ marginLeft: 5, color: '#dc3545' }}>E-Mail inválido</Text>
                }
            </View>
        );
    }
}